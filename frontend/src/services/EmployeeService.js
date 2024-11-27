import axios from 'axios';

const API_URL = process.env.REACT_APP_API_BASE_URL;

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
    addEmployee,
    getAllEmployees,
};

export default EmployeeService;
