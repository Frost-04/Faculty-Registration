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

const addSchedule = async (schedule) => {
    return axios.post(`/schedules`, schedule);
};

const getAllSchedules = async () => {
    return axios.get(`/schedules`);
};

const ScheduleService = {
    addSchedule : alertWrapper(addSchedule),
    getAllSchedules : alertWrapper(getAllSchedules),
};

export default ScheduleService;
