package com.gaurav.facultyregistration.controller;

import com.gaurav.facultyregistration.entity.Course;
import com.gaurav.facultyregistration.service.CourseService;
import com.gaurav.facultyregistration.service.CourseScheduleService;
import com.gaurav.facultyregistration.utils.CourseTimeValidator;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {

    private final CourseService courseService;
    private final CourseScheduleService scheduleService;
    private final CourseTimeValidator timeValidator;

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
        return courseService.getCourseById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> createCourse(@RequestBody Course course) {
        // Validate scheduling constraints
        if (!timeValidator.isValidSchedule(course)) {
            return ResponseEntity.badRequest().body("Schedule conflict detected");
        }
        return ResponseEntity.ok(courseService.saveCourse(course));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCourse(@PathVariable Integer id, @RequestBody Course updatedCourse) {
        if (!courseService.getCourseById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        // Validate scheduling constraints
        if (!timeValidator.isValidSchedule(updatedCourse)) {
            return ResponseEntity.badRequest().body("Schedule conflict detected");
        }
        updatedCourse.setCourseId(id);
        return ResponseEntity.ok(courseService.saveCourse(updatedCourse));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Integer id) {
        courseService.deleteCourse(id);
        return ResponseEntity.noContent().build();
    }
}
