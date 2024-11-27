package com.gaurav.facultyregistration.repository;

import com.gaurav.facultyregistration.entity.CourseSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
public interface CourseScheduleRepository extends JpaRepository<CourseSchedule, Integer> {
    // Custom queries (if needed) can be added here
    @Query("SELECT cs FROM CourseSchedule cs WHERE " +
            "(cs.course.courseId = :courseId AND cs.courseTime BETWEEN :courseTime AND :courseTime + 1 AND cs.courseDay = :courseDay) " +
            "OR " +
            "(cs.room = :room AND cs.courseTime BETWEEN :courseTime AND :courseTime + 1 AND cs.courseDay = :courseDay)")
    Optional<CourseSchedule> findByCourseIdAndCourseTime(
            @Param("courseId") Integer courseId,
            @Param("courseTime") Integer courseTime,
            @Param("courseDay") String courseDay,
            @Param("room") String room);

}
