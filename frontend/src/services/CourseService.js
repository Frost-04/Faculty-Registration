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

const addCourse = async (course) => {
    return axios.post(`/courses`, course);
};

const getAllCourses = async () => {
    return axios.get(`/courses`);
};

const assignCourseToEmployee = async (courseId, employeeId) => {
    return axios.post(`/courses/assign`, { courseId, employeeId });
};

// Wrap each function with alertWrapper
const CourseService = {
    addCourse: alertWrapper(addCourse),
    getAllCourses: alertWrapper(getAllCourses),
    assignCourseToEmployee: alertWrapper(assignCourseToEmployee),
};

export default CourseService;
