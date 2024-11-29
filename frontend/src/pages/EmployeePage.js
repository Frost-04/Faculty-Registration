import React from 'react';
import EmployeeForm from '../components/Employee/EmployeeForm';
import EmployeeList from '../components/Employee/EmployeeList';

const EmployeePage = () => {
    return (
        <div
            className="vh-100"
            style={{
                background: 'linear-gradient(135deg, #0077b6, #0096c7)',
                paddingTop: '20px',
                overflowY: 'auto',
            }}
        >
            <div
                className="container p-4 shadow-lg"
                style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                }}
            >
                <h2
                    className="text-center mb-4"
                    style={{
                        fontWeight: '700',
                        color: '#023e8a',
                    }}
                >
                    Faculty Management
                </h2>
                <EmployeeForm />
                <hr
                    style={{
                        border: '1px solid #adb5bd',
                        margin: '20px 0',
                    }}
                />
                <EmployeeList />
            </div>
        </div>
    );
};

export default EmployeePage;
