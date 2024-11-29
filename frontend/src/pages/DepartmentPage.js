import React from 'react';
import DepartmentList from '../components/Department/DepartmentList';

const DepartmentPage = () => {
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
                    Departments
                </h2>
                <DepartmentList />
            </div>
        </div>
    );
};

export default DepartmentPage;
