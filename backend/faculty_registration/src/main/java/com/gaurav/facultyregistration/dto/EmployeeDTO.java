package com.gaurav.facultyregistration.dto;

import lombok.Data;

@Data
public class EmployeeDTO {
    private Integer employeeId;
    private String email;
    private String firstName;
    private String lastName;
    private String title;
    private String photoPath;
    private Integer departmentId; // Reference to the department
}
