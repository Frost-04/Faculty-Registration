package com.gaurav.facultyregistration.controller;

import com.gaurav.facultyregistration.entity.Department;
import com.gaurav.facultyregistration.exception.ResourceNotFoundException;
import com.gaurav.facultyregistration.service.DepartmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/departments")
public class DepartmentController {

    private final DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @GetMapping
    public ResponseEntity<List<Department>> getAllDepartments() {
        return ResponseEntity.ok(departmentService.getAllDepartments());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Department> getDepartmentById(@PathVariable Integer id) {
        Department department = departmentService.getDepartmentById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with ID: " + id));
        return ResponseEntity.ok(department);
    }

    @PostMapping
    public ResponseEntity<Department> createDepartment(@RequestBody Department department) {
        return ResponseEntity.ok(departmentService.saveDepartment(department));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Department> updateDepartment(@PathVariable Integer id, @RequestBody Department updatedDepartment) {
        if (!departmentService.getDepartmentById(id).isPresent()) {
            throw new ResourceNotFoundException("Department not found with ID: " + id);
        }
        updatedDepartment.setDeptId(id);
        return ResponseEntity.ok(departmentService.saveDepartment(updatedDepartment));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDepartment(@PathVariable Integer id) {
        if (!departmentService.getDepartmentById(id).isPresent()) {
            throw new ResourceNotFoundException("Department not found with ID: " + id);
        }
        departmentService.deleteDepartment(id);
        return ResponseEntity.noContent().build();
    }
}
