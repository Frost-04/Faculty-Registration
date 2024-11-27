import axios from 'axios';

const API_URL = process.env.REACT_APP_API_BASE_URL;

const getAllDepartments = async () => {
    return axios.get(`/departments`);
};

const DepartmentService = {
    getAllDepartments,
};

export default DepartmentService;
