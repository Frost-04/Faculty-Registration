import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseForm from '../components/Course/CourseForm';
import CourseList from '../components/Course/CourseList';
import AuthService from '../services/AuthService';

const CoursePage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        AuthService.logout();
        navigate('/');
    };

    const goToDashboard = () => {
        navigate('/dashboard');
    };

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
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2
                        className="text-center mb-0"
                        style={{
                            fontWeight: '700',
                            color: '#023e8a',
                        }}
                    >
                        Course Management
                    </h2>
                    <div>
                        <button
                            onClick={goToDashboard}
                            className="btn btn-primary me-2"
                            style={{
                                fontWeight: '600',
                            }}
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={handleLogout}
                            className="btn btn-danger"
                            style={{
                                fontWeight: '600',
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </div>
                <CourseForm />
                <hr
                    style={{
                        border: '1px solid #adb5bd',
                        margin: '20px 0',
                    }}
                />
                <CourseList />
            </div>
        </div>
    );
};

export default CoursePage;
