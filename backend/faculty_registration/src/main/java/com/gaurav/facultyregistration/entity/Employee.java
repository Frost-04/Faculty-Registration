package com.gaurav.facultyregistration.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer employeeId;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String firstName;

    private String lastName;

    private String title;

    @Column(nullable = false)
    private String photoPath;

    @ManyToOne
    @JoinColumn(name = "dept_id", nullable = false)
    private Department department;
}
