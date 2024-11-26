package com.gaurav.facultyregistration.repository;

import com.gaurav.facultyregistration.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Integer> {
    // Custom queries (if needed) can be added here
}
