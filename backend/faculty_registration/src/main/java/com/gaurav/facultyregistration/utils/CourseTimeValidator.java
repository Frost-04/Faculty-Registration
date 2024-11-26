package com.gaurav.facultyregistration.utils;

import com.gaurav.facultyregistration.entity.Course;
import com.gaurav.facultyregistration.entity.CourseSchedule;
import com.gaurav.facultyregistration.repository.CourseScheduleRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CourseTimeValidator {

    private final CourseScheduleRepository scheduleRepository;

    public CourseTimeValidator(CourseScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    // Validate that a course schedule does not conflict with existing schedules
    public boolean isValidSchedule(Course course) {
        if (course.getEmployee() == null || course.getEmployee().getEmployeeId() == null) {
            return false; // Employee must be assigned
        }

        List<CourseSchedule> existingSchedules = scheduleRepository.findAll();

        for (CourseSchedule newSchedule : course.getSchedules()) {
            for (CourseSchedule existingSchedule : existingSchedules) {
                if (conflictsWith(newSchedule, existingSchedule)) {
                    return false; // Conflict detected
                }
            }
        }
        return true; // No conflicts
    }

    // Check if two schedules conflict
    private boolean conflictsWith(CourseSchedule newSchedule, CourseSchedule existingSchedule) {
        return newSchedule.getCourseDay().equals(existingSchedule.getCourseDay()) &&
                newSchedule.getCourseTime().equals(existingSchedule.getCourseTime()) &&
                newSchedule.getRoom().equals(existingSchedule.getRoom());
    }
}
