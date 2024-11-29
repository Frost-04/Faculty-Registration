package com.gaurav.facultyregistration.controller;

import com.gaurav.facultyregistration.entity.Employee;
import com.gaurav.facultyregistration.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private final EmployeeService employeeService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public EmployeeController(EmployeeService employeeService, PasswordEncoder passwordEncoder) {
        this.employeeService = employeeService;
        this.passwordEncoder = passwordEncoder;
    }

    // Get all employees (Admin only)
    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees() {
        return ResponseEntity.ok(employeeService.getAllEmployees());
    }

    // Get employee by ID
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Integer id) {
        return employeeService.getEmployeeById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create a new employee (Admin only)
    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
        // Encode the password before saving
        employee.setPassword(passwordEncoder.encode(employee.getPassword()));
        return ResponseEntity.ok(employeeService.saveEmployee(employee));
    }

    // Update an existing employee
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Integer id, @RequestBody Employee updatedEmployee) {
        return employeeService.getEmployeeById(id)
                .map(existingEmployee -> {
                    updatedEmployee.setEmployeeId(id);
                    // If password is updated, encode it
                    if (updatedEmployee.getPassword() != null && !updatedEmployee.getPassword().isEmpty()) {
                        updatedEmployee.setPassword(passwordEncoder.encode(updatedEmployee.getPassword()));
                    } else {
                        updatedEmployee.setPassword(existingEmployee.getPassword());
                    }
                    return ResponseEntity.ok(employeeService.saveEmployee(updatedEmployee));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete an employee (Admin only)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Integer id) {
        if (!employeeService.getEmployeeById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        employeeService.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }

    // Get currently logged-in employee's details
    @GetMapping("/me")
    public ResponseEntity<Employee> getLoggedInEmployee(@RequestParam String email) {
        return employeeService.getEmployeeByEmail(email)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
