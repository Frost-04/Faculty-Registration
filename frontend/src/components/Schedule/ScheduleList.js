import React, { useEffect, useState } from 'react';
import ScheduleService from '../../services/ScheduleService';

const ScheduleList = () => {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await ScheduleService.getAllSchedules();
                setSchedules(response.data);
            } catch (error) {
                console.error(error);
                alert('Failed to fetch schedules.');
            }
        };

        fetchSchedules();
    }, []);

    return (
        <div className="mt-4">
            <h4>Schedules</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Time</th>
                        <th>Day</th>
                        <th>Room</th>
                        <th>Building</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((schedule) => (
                        <tr key={schedule.courseScheduleId}>
                            <td>{schedule.course.courseName}</td>
                            <td>{schedule.courseTime}</td>
                            <td>{schedule.courseDay}</td>
                            <td>{schedule.room}</td>
                            <td>{schedule.building}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleList;
