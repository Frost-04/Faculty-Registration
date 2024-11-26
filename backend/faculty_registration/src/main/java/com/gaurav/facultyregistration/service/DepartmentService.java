package com.gaurav.facultyregistration.service;

import com.gaurav.facultyregistration.entity.Department;
import com.gaurav.facultyregistration.repository.DepartmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentService {

    private final DepartmentRepository departmentRepository;

    public DepartmentService(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    public Optional<Department> getDepartmentById(Integer deptId) {
        return departmentRepository.findById(deptId);
    }

    public Department saveDepartment(Department department) {
        return departmentRepository.save(department);
    }

    public void deleteDepartment(Integer deptId) {
        departmentRepository.deleteById(deptId);
    }
}
