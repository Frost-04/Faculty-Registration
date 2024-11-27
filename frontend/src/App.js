import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import EmployeePage from './pages/EmployeePage';
import CoursePage from './pages/CoursePage';
import DepartmentPage from './pages/DepartmentPage';
import SchedulePage from './pages/SchedulePage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Router>
            <Routes>
                {/* Public Route */}
                <Route path="/" element={<LoginPage />} />

                {/* Protected Routes */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/employees"
                    element={
                        <ProtectedRoute>
                            <EmployeePage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/courses"
                    element={
                        <ProtectedRoute>
                            <CoursePage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/departments"
                    element={
                        <ProtectedRoute>
                            <DepartmentPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/schedules"
                    element={
                        <ProtectedRoute>
                            <SchedulePage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
