import axios from 'axios';
import AuthService from '../services/AuthService';
//const API_URL = process.env.REACT_APP_API_BASE_URL;


const alertWrapper = (fn) => {
    return async (...args) => {
        if (AuthService.isTokenExpired()) { 
            AuthService.logout();
        }
        return fn(...args);
    };
};

const getAllDepartments = async () => {
    return axios.get(`/departments`);
};

const DepartmentService = {
    getAllDepartments : alertWrapper(getAllDepartments),
};

export default DepartmentService;
