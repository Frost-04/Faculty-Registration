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

const addEmployee = async (data) => {
    return axios.post(`/employees`, data, {
        headers: {
            'Content-Type': 'application/json', // Send as JSON
        },
    });
};

const getAllEmployees = async () => {
    return axios.get(`/employees`);
};

const EmployeeService = {
    addEmployee : alertWrapper(addEmployee),
    getAllEmployees : alertWrapper(getAllEmployees),
};

export default EmployeeService;
