import axios from 'axios';

const API_URL = process.env.REACT_APP_API_BASE_URL;

const addCourse = async (course) => {
    return axios.post(`/courses`, course);
};

const getAllCourses = async () => {
    return axios.get(`/courses`);
};

const assignCourseToEmployee = async (courseId, employeeId) => {
    return axios.post(`/courses/assign`, { courseId, employeeId });
};

const CourseService = {
    addCourse,
    getAllCourses,
    assignCourseToEmployee,
};

export default CourseService;
