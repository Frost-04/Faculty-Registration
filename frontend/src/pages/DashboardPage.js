import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    return (
        <div className="container mt-5">
            <h2>Welcome to the Dashboard</h2>
            <p>Select a page to manage:</p>
            <div className="row">
                <div className="col-md-3 mb-3">
                    <Link to="/employees" className="btn btn-primary w-100">
                        Manage Faculty
                    </Link>
                </div>
                <div className="col-md-3 mb-3">
                    <Link to="/courses" className="btn btn-secondary w-100">
                        Manage Courses
                    </Link>
                </div>
                <div className="col-md-3 mb-3">
                    <Link to="/departments" className="btn btn-success w-100">
                        See Departments
                    </Link>
                </div>
                <div className="col-md-3 mb-3">
                    <Link to="/schedules" className="btn btn-info w-100">
                        Manage Schedules
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
