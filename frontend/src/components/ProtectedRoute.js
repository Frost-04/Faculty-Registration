import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const ProtectedRoute = ({ children }) => {
    // Check if the user is authenticated
    return AuthService.isAuthenticated() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
