package com.gaurav.facultyregistration.controller;

import com.gaurav.facultyregistration.entity.CourseSchedule;
import com.gaurav.facultyregistration.exception.ResourceNotFoundException;
import com.gaurav.facultyregistration.exception.ValidationException;
import com.gaurav.facultyregistration.service.CourseScheduleService;
import com.gaurav.facultyregistration.utils.CourseTimeValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/schedules")
public class CourseScheduleController {

    private final CourseScheduleService courseScheduleService;
    private final CourseTimeValidator timeValidator;

    @Autowired
    public CourseScheduleController(CourseScheduleService courseScheduleService, CourseTimeValidator timeValidator) {
        this.courseScheduleService = courseScheduleService;
        this.timeValidator = timeValidator;
    }

    // Get all schedules
    @GetMapping
    public ResponseEntity<List<CourseSchedule>> getAllSchedules() {
        return ResponseEntity.ok(courseScheduleService.getAllSchedules());
    }

    // Get schedule by ID
    @GetMapping("/{id}")
    public ResponseEntity<CourseSchedule> getScheduleById(@PathVariable Integer id) {
        CourseSchedule schedule = courseScheduleService.getScheduleById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Schedule not found with ID: " + id));
        return ResponseEntity.ok(schedule);
    }


    @PostMapping
    public ResponseEntity<CourseSchedule> createSchedule(@RequestBody CourseSchedule schedule) {
        // Validate the schedule's time range
        if (schedule.getCourseTime() > 23 || schedule.getCourseTime() < 0) {
            throw new ValidationException("Invalid time. Time must be between 0 and 23.");
        }

        if (!timeValidator.isValidSchedule(schedule)) {
            throw new ValidationException("Schedule conflict detected.");
        }

        return ResponseEntity.ok(courseScheduleService.saveSchedule(schedule));
    }

    // Update an existing schedule
    @PutMapping("/{id}")
    public ResponseEntity<CourseSchedule> updateSchedule(@PathVariable Integer id, @RequestBody CourseSchedule updatedSchedule) {
        CourseSchedule existingSchedule = courseScheduleService.getScheduleById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Schedule not found with ID: " + id));

        // Validate the updated schedule
        if (updatedSchedule.getCourseTime() > 23 || updatedSchedule.getCourseTime() < 0) {
            throw new ValidationException("Invalid time. Time must be between 0 and 23.");
        }

        if (!timeValidator.isValidSchedule(updatedSchedule)) {
            throw new ValidationException("Schedule conflict detected.");
        }

        updatedSchedule.setCourseScheduleId(existingSchedule.getCourseScheduleId());
        return ResponseEntity.ok(courseScheduleService.saveSchedule(updatedSchedule));
    }

    // Delete a schedule
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSchedule(@PathVariable Integer id) {
        if (!courseScheduleService.getScheduleById(id).isPresent()) {
            throw new ResourceNotFoundException("Schedule not found with ID: " + id);
        }

        courseScheduleService.deleteSchedule(id);
        return ResponseEntity.noContent().build();
    }
}
