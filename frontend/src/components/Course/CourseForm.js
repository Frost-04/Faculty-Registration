import React, { useState } from 'react';
import CourseService from '../../services/CourseService';

const CourseForm = () => {
    const [form, setForm] = useState({
        courseCode: '',
        courseName: '',
        courseDescription: '',
        courseYear: '',
        courseCredits: '',
        courseTerm: '',
        courseCapacity: '',
        employeeId:'',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestBody = {
            courseCode: form.courseCode,
            courseName: form.courseName,
            courseDescription: form.courseDescription,
            courseYear: form.courseYear,
            courseCredits: form.courseCredits,
            courseTerm: form.courseTerm, 
            courseCapacity: form.courseCapacity,
            employee: {
                employeeId: form.employeeId, // Wrap department ID inside a department object
            },
        };
        try {
            await CourseService.addCourse(requestBody);
            alert('Course added successfully!');
            setForm({
                courseCode: '',
                courseName: '',
                courseDescription: '',
                courseYear: '',
                courseCredits: '',
                courseTerm: '',
                courseCapacity: '',
                employeeId:'',
            });
        } catch (error) {
            console.error(error);
            alert('Failed to add course.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label>Course Code</label>
                    <input
                        type="text"
                        className="form-control"
                        name="courseCode"
                        value={form.courseCode}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label>Course Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="courseName"
                        value={form.courseName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-md-12 mb-3">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        name="courseDescription"
                        value={form.courseDescription}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="col-md-4 mb-3">
                    <label>Year</label>
                    <input
                        type="number"
                        className="form-control"
                        name="courseYear"
                        value={form.courseYear}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label>Credits</label>
                    <input
                        type="number"
                        className="form-control"
                        name="courseCredits"
                        value={form.courseCredits}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label>Term</label>
                    <input
                        type="number"
                        className="form-control"
                        name="courseTerm"
                        value={form.courseTerm}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label>Capacity</label>
                    <input
                        type="number"
                        className="form-control"
                        name="courseCapacity"
                        value={form.courseCapacity}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label>Employee ID</label>
                    <input
                        type="number"
                        className="form-control"
                        name="employeeId"
                        value={form.employeeId}
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Add Course
            </button>
        </form>
    );
};

export default CourseForm;
