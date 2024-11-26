package com.gaurav.facultyregistration.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "course_schedule")
public class CourseSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer courseScheduleId;

    @Column(nullable = false)
    private String courseTime;

    @Column(nullable = false)
    private String courseDay;

    @Column(nullable = false)
    private String room;

    private String building;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;
}
