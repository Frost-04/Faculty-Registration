package com.gaurav.facultyregistration.controller;

import com.gaurav.facultyregistration.entity.CourseSchedule;
import com.gaurav.facultyregistration.service.CourseScheduleService;
import com.gaurav.facultyregistration.utils.CourseTimeValidator;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/schedules")
public class CourseScheduleController {

    private final CourseScheduleService courseScheduleService;
    private final CourseTimeValidator timeValidator;

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
        return courseScheduleService.getScheduleById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create a new schedule
    @PostMapping
    public ResponseEntity<?> createSchedule(@RequestBody CourseSchedule schedule) {
        // Validate the schedule using CourseTimeValidator
        if (!timeValidator.isValidSchedule(schedule)) {
            return ResponseEntity.badRequest().body("Schedule conflict detected");
        }
        return ResponseEntity.ok(courseScheduleService.saveSchedule(schedule));
    }

    // Update an existing schedule
    @PutMapping("/{id}")
    public ResponseEntity<?> updateSchedule(@PathVariable Integer id, @RequestBody CourseSchedule updatedSchedule) {
        if (!courseScheduleService.getScheduleById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }

        // Validate the updated schedule
        if (!timeValidator.isValidSchedule(updatedSchedule)) {
            return ResponseEntity.badRequest().body("Schedule conflict detected");
        }

        updatedSchedule.setCourseScheduleId(id);
        return ResponseEntity.ok(courseScheduleService.saveSchedule(updatedSchedule));
    }

    // Delete a schedule
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSchedule(@PathVariable Integer id) {
        courseScheduleService.deleteSchedule(id);
        return ResponseEntity.noContent().build();
    }
}
