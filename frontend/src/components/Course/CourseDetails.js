import React, { useEffect, useState } from 'react';
import CourseService from '../../services/CourseService';
import EmployeeService from '../../services/EmployeeService';

const CourseDetails = () => {
    const [courses, setCourses] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [assignment, setAssignment] = useState({
        courseId: '',
        employeeId: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coursesResponse = await CourseService.getAllCourses();
                const employeesResponse = await EmployeeService.getAllEmployees();
                setCourses(coursesResponse.data);
                setEmployees(employeesResponse.data);
            } catch (error) {
                console.error(error);
                alert('Failed to fetch data.');
            }
        };

        fetchData();
    }, []);

    const handleAssignmentChange = (e) => {
        const { name, value } = e.target;
        setAssignment({ ...assignment, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await CourseService.assignCourseToEmployee(assignment.courseId, assignment.employeeId);
            alert('Course assigned successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to assign course.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
                <label>Course</label>
                <select
                    className="form-control"
                    name="courseId"
                    value={assignment.courseId}
                    onChange={handleAssignmentChange}
                    required
                >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                        <option key={course.courseId} value={course.courseId}>
                            {course.courseName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label>Employee</label>
                <select
                    className="form-control"
                    name="employeeId"
                    value={assignment.employeeId}
                    onChange={handleAssignmentChange}
                    required
                >
                    <option value="">Select an employee</option>
                    {employees.map((employee) => (
                        <option key={employee.employeeId} value={employee.employeeId}>
                            {employee.firstName} {employee.lastName}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">
                Assign Course
            </button>
        </form>
    );
};

export default CourseDetails;
