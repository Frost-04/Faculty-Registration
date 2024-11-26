package com.gaurav.facultyregistration.service;

import com.gaurav.facultyregistration.entity.Course;
import com.gaurav.facultyregistration.repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Optional<Course> getCourseById(Integer courseId) {
        return courseRepository.findById(courseId);
    }

    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    public void deleteCourse(Integer courseId) {
        courseRepository.deleteById(courseId);
    }
}
