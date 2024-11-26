package com.gaurav.facultyregistration.repository;

import com.gaurav.facultyregistration.entity.CourseSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseScheduleRepository extends JpaRepository<CourseSchedule, Integer> {
    // Custom queries (if needed) can be added here
}
