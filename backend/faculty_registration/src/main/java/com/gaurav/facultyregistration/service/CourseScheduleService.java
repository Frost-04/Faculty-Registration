package com.gaurav.facultyregistration.service;

import com.gaurav.facultyregistration.entity.CourseSchedule;
import com.gaurav.facultyregistration.repository.CourseScheduleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseScheduleService {

    private final CourseScheduleRepository courseScheduleRepository;

    public CourseScheduleService(CourseScheduleRepository courseScheduleRepository) {
        this.courseScheduleRepository = courseScheduleRepository;
    }

    // Get all course schedules
    public List<CourseSchedule> getAllSchedules() {
        return courseScheduleRepository.findAll();
    }

    // Get a course schedule by ID
    public Optional<CourseSchedule> getScheduleById(Integer scheduleId) {
        return courseScheduleRepository.findById(scheduleId);
    }

    // Save a course schedule
    public CourseSchedule saveSchedule(CourseSchedule courseSchedule) {
        return courseScheduleRepository.save(courseSchedule);
    }

    // Delete a course schedule
    public void deleteSchedule(Integer scheduleId) {
        courseScheduleRepository.deleteById(scheduleId);
    }
}
