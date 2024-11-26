package com.gaurav.facultyregistration.repository;

import com.gaurav.facultyregistration.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    // Custom queries (if needed) can be added here
}
