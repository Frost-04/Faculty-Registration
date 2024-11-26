package com.gaurav.facultyregistration.dto;

import lombok.Data;

@Data
public class CourseScheduleDTO {
    private Integer courseScheduleId;
    private String courseTime;
    private String courseDay;
    private String room;
    private String building;
    private Integer courseId; // Reference to the course
}
