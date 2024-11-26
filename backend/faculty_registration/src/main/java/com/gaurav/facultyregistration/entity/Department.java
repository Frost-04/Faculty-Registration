package com.gaurav.facultyregistration.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "department")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer deptId;

    @Column(nullable = false)
    private String deptName;

    @Column(nullable = false)
    private Integer capacity;
}
