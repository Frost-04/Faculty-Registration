import React from 'react';
import ScheduleForm from '../components/Schedule/ScheduleForm';
import ScheduleList from '../components/Schedule/ScheduleList';

const SchedulePage = () => {
    return (
        <div className="container mt-4">
            <h2>Schedule Management</h2>
            <ScheduleForm />
            <ScheduleList />
        </div>
    );
};

export default SchedulePage;
