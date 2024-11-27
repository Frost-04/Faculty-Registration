import React, { useState, useEffect } from 'react';
import ScheduleService from '../../services/ScheduleService';
import CourseService from '../../services/CourseService';

const ScheduleForm = () => {
    const [form, setForm] = useState({
        courseTime: '',
        courseDay: '',
        room: '',
        building: '',
        courseId: '',
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestBody = {
            courseTime:form.courseTime, 
            courseDay:form.courseDay,
            room:form.room,
            building:form.building,
            course: {
                courseId: form.courseId, // Wrap department ID inside a department object
            },
        };
        try {
            await ScheduleService.addSchedule(requestBody);
            alert('Schedule added successfully!');
            setForm({
                courseTime: '',
                courseDay: '',
                room: '',
                building: '',
                courseId: '',
            });
        } catch (error) {
            console.error(error);
            alert('Failed to add schedule. Please check for conflicts.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label>Course</label>
                    <select
                        className="form-control"
                        name="courseId"
                        value={form.courseId}
                        onChange={handleInputChange}
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
                <div className="col-md-6 mb-3">
                    <label>Course Time</label>
                    <input
                        type="text"
                        className="form-control"
                        name="courseTime"
                        placeholder="e.g., 10:00 AM - 12:00 PM"
                        value={form.courseTime}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label>Course Day</label>
                    <input
                        type="text"
                        className="form-control"
                        name="courseDay"
                        placeholder="e.g., Monday"
                        value={form.courseDay}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label>Room</label>
                    <input
                        type="text"
                        className="form-control"
                        name="room"
                        value={form.room}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label>Building</label>
                    <input
                        type="text"
                        className="form-control"
                        name="building"
                        value={form.building}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Add Schedule
            </button>
        </form>
    );
};

export default ScheduleForm;
