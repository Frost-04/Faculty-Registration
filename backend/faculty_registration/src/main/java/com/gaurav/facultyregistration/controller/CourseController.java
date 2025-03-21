package com.gaurav.facultyregistration.controller;

import com.gaurav.facultyregistration.entity.Course;
import com.gaurav.facultyregistration.exception.ResourceNotFoundException;
import com.gaurav.facultyregistration.exception.ValidationException;
import com.gaurav.facultyregistration.service.CourseService;
import com.gaurav.facultyregistration.service.CourseScheduleService;
import com.gaurav.facultyregistration.utils.CourseTimeValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {

    private final CourseService courseService;
    private final CourseScheduleService scheduleService;
    private final CourseTimeValidator timeValidator;

    @Autowired
    public CourseController(CourseService courseService, CourseScheduleService scheduleService, CourseTimeValidator timeValidator) {
        this.courseService = courseService;
        this.scheduleService = scheduleService;
        this.timeValidator = timeValidator;
    }

    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses() {
        return ResponseEntity.ok(courseService.getAllCourses());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Integer id) {
        Course course = courseService.getCourseById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found with ID: " + id));
        return ResponseEntity.ok(course);
    }

    @PostMapping
    public ResponseEntity<?> createCourse(@RequestBody Course course) {
        // Validate scheduling constraints
        if (course.getEmployee().getEmployeeId()==null) {
            throw new ValidationException("Schedule conflict detected");
        }
        return ResponseEntity.ok(courseService.saveCourse(course));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCourse(@PathVariable Integer id, @RequestBody Course updatedCourse) {
        if (!courseService.getCourseById(id).isPresent()) {
            throw new ResourceNotFoundException("Course not found with ID: " + id);
        }
        // Validate scheduling constraints
        if (!timeValidator.isValidSchedule(updatedCourse)) {
            throw new ValidationException("Schedule conflict detected");
        }
        updatedCourse.setCourseId(id);
        return ResponseEntity.ok(courseService.saveCourse(updatedCourse));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Integer id) {
        if (!courseService.getCourseById(id).isPresent()) {
            throw new ResourceNotFoundException("Course not found with ID: " + id);
        }
        courseService.deleteCourse(id);
        return ResponseEntity.noContent().build();
    }
}
