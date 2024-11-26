package com.gaurav.facultyregistration.dto;

import lombok.Data;

@Data
public class CourseDTO {
    private Integer courseId;
    private String courseCode;
    private String courseName;
    private String courseDescription;
    private Integer courseYear;
    private Integer courseCredits;
    private Integer courseTerm;
    private Integer courseCapacity;
    private Integer employeeId; // Reference to the assigned employee
}
