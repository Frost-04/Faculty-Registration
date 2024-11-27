import React from 'react';
import EmployeeForm from '../components/Employee/EmployeeForm';
import EmployeeList from '../components/Employee/EmployeeList';

const EmployeePage = () => {
    return (
        <div className="container mt-4">
            <h2>Faculty Management</h2>
            <EmployeeForm />
            <EmployeeList />
        </div>
    );
};

export default EmployeePage;
