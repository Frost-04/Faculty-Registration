package com.gaurav.facultyregistration.repository;

import com.gaurav.facultyregistration.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Integer> {
    // Custom queries (if needed) can be added here
}
