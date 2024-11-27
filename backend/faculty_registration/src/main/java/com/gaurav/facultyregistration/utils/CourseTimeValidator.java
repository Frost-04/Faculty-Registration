package com.gaurav.facultyregistration.utils;

import com.gaurav.facultyregistration.entity.Course;
import com.gaurav.facultyregistration.entity.CourseSchedule;
import com.gaurav.facultyregistration.repository.CourseScheduleRepository;
import com.gaurav.facultyregistration.service.CourseScheduleService;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CourseTimeValidator {

    private final CourseScheduleRepository scheduleRepository;
    private final CourseScheduleService courseScheduleService;

    public CourseTimeValidator(CourseScheduleRepository scheduleRepository, CourseScheduleService courseScheduleService) {
        this.scheduleRepository = scheduleRepository;
        this.courseScheduleService = courseScheduleService;
    }

    // Existing method: Validate that a course schedule does not conflict with existing schedules
    public boolean isValidSchedule(Course course) {
        if (course.getEmployee() == null || course.getEmployee().getEmployeeId() == null) {
            return false; // Employee must be assigned
        }

        List<CourseSchedule> existingSchedules = scheduleRepository.findAll();

        for (CourseSchedule newSchedule : courseScheduleService.getAllSchedules()) {
            for (CourseSchedule existingSchedule : existingSchedules) {
                if (conflictsWith(newSchedule, existingSchedule)) {
                    return false; // Conflict detected
                }
            }
        }
        return true; // No conflicts
    }

    // Existing method: Check if two schedules conflict
    private boolean conflictsWith(CourseSchedule newSchedule, CourseSchedule existingSchedule) {
        return newSchedule.getCourseDay().equals(existingSchedule.getCourseDay()) &&
                newSchedule.getCourseTime().equals(existingSchedule.getCourseTime()) &&
                newSchedule.getRoom().equals(existingSchedule.getRoom());
    }

    // New method: Validate a single course schedule
    public boolean isValidSchedule(CourseSchedule schedule) {
        List<CourseSchedule> existingSchedules = scheduleRepository.findAll();

        for (CourseSchedule existingSchedule : existingSchedules) {
            if (conflictsWith(schedule, existingSchedule)) {
                return false; // Conflict detected
            }
        }
        return true; // No conflicts
    }

    // New method: Validate multiple course schedules at once
    public boolean isValidSchedules(List<CourseSchedule> schedules) {
        List<CourseSchedule> existingSchedules = scheduleRepository.findAll();

        for (CourseSchedule newSchedule : schedules) {
            for (CourseSchedule existingSchedule : existingSchedules) {
                if (conflictsWith(newSchedule, existingSchedule)) {
                    return false; // Conflict detected
                }
            }
        }
        return true; // No conflicts
    }

    // New method: Check if a specific employee is already assigned at the given time and day
    public boolean isEmployeeAvailable(Integer employeeId, String courseTime, String courseDay) {
        List<CourseSchedule> existingSchedules = scheduleRepository.findAll();

        for (CourseSchedule schedule : existingSchedules) {
            if (schedule.getCourse().getEmployee() != null &&
                    schedule.getCourse().getEmployee().getEmployeeId().equals(employeeId) &&
                    schedule.getCourseTime().equals(courseTime) &&
                    schedule.getCourseDay().equals(courseDay)) {
                return false; // Conflict: Employee is already assigned
            }
        }
        return true; // Employee is available
    }
}
