import React, { useEffect, useState } from 'react';
import CourseService from '../../services/CourseService';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await CourseService.getAllCourses();
                setCourses(response.data);
            } catch (error) {
                console.error(error);
                alert('Failed to fetch courses.');
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="mt-4">
            <h4>Courses</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Description</th>
                        <th>Year</th>
                        <th>Credits</th>
                        <th>Term</th>
                        <th>Capacity</th>
                        <th>EmployeeId</th>
                        <th>Employee Name</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.courseId}>
                            <td>{course.courseCode}</td>
                            <td>{course.courseName}</td>
                            <td>{course.courseDescription}</td>
                            <td>{course.courseYear}</td>
                            <td>{course.courseCredits}</td>
                            <td>{course.courseTerm}</td>
                            <td>{course.courseCapacity}</td>
                            <td>{course.employee.employeeId}</td>
                            <td>{course.employee.firstName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseList;
