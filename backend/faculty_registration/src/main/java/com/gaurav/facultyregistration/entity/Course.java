package com.gaurav.facultyregistration.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer courseId;

    @Column(unique = true, nullable = false)
    private String courseCode;

    @Column(nullable = false)
    private String courseName;

    private String courseDescription;

    @Column(nullable = false)
    private Integer courseYear;

    @Column(nullable = false)
    private Integer courseCredits;

    @Column(nullable = false)
    private Integer courseTerm;

    @Column(nullable = false)
    private Integer courseCapacity;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    // Getter for schedules
    @Getter
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CourseSchedule> schedules = new ArrayList<>();

}