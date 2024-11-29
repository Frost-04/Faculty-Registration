import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const DashboardPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        AuthService.logout();
        navigate('/');
    };

    const tokenTimeRemaining = AuthService.tokenTimeRemaining();

    return (
        <div
            className="vh-100 d-flex justify-content-center align-items-center"
            style={{
                background: 'linear-gradient(135deg, #0077b6, #0096c7)',
            }}
        >
            <div
                className="card p-5 shadow-lg"
                style={{
                    width: '800px',
                    borderRadius: '12px',
                    border: 'none',
                    backgroundColor: '#ffffff',
                }}
            >
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2
                        style={{
                            fontWeight: '700',
                            color: '#023e8a',
                        }}
                    >
                        Welcome to the Dashboard
                    </h2>
                    <button
                        className="btn"
                        onClick={handleLogout}
                        style={{
                            backgroundColor: '#e63946',
                            color: '#ffffff',
                            fontWeight: '600',
                            borderRadius: '8px',
                            padding: '10px 20px',
                            border: 'none',
                        }}
                    >
                        Logout
                    </button>
                </div>
                <p
                    className="mb-4"
                    style={{
                        color: '#495057',
                        fontSize: '16px',
                    }}
                >
                    Select a page to manage:
                </p>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <Link
                            to="/employees"
                            className="btn w-100"
                            style={{
                                backgroundColor: '#0077b6',
                                color: '#ffffff',
                                fontWeight: '600',
                                borderRadius: '8px',
                                padding: '15px 20px',
                                fontSize: '16px',
                                border: 'none',
                            }}
                        >
                            Manage Faculty
                        </Link>
                    </div>
                    <div className="col-md-6 mb-3">
                        <Link
                            to="/courses"
                            className="btn w-100"
                            style={{
                                backgroundColor: '#0096c7',
                                color: '#ffffff',
                                fontWeight: '600',
                                borderRadius: '8px',
                                padding: '15px 20px',
                                fontSize: '16px',
                                border: 'none',
                            }}
                        >
                            Manage Courses
                        </Link>
                    </div>
                    <div className="col-md-6 mb-3">
                        <Link
                            to="/departments"
                            className="btn w-100"
                            style={{
                                backgroundColor: '#2a9d8f',
                                color: '#ffffff',
                                fontWeight: '600',
                                borderRadius: '8px',
                                padding: '15px 20px',
                                fontSize: '16px',
                                border: 'none',
                            }}
                        >
                            See Departments
                        </Link>
                    </div>
                    <div className="col-md-6 mb-3">
                        <Link
                            to="/schedules"
                            className="btn w-100"
                            style={{
                                backgroundColor: '#264653',
                                color: '#ffffff',
                                fontWeight: '600',
                                borderRadius: '8px',
                                padding: '15px 20px',
                                fontSize: '16px',
                                border: 'none',
                            }}
                        >
                            Manage Schedules
                        </Link>
                    </div>
                </div>
                <div
                    className="text-center mt-4"
                    style={{
                        fontWeight: '600',
                        fontSize: '16px',
                        color: '#149414',
                    }}
                >
                    Session Time Remaining: {`${tokenTimeRemaining} seconds`}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
