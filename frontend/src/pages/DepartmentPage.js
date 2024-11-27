import React from 'react';
import DepartmentList from '../components/Department/DepartmentList';

const DepartmentPage = () => {
    return (
        <div className="container mt-4">
            <h2>Departments</h2>
            <DepartmentList />
        </div>
    );
};

export default DepartmentPage;
