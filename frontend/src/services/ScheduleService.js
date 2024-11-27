import axios from 'axios';

const API_URL = process.env.REACT_APP_API_BASE_URL;

const addSchedule = async (schedule) => {
    return axios.post(`/schedules`, schedule);
};

const getAllSchedules = async () => {
    return axios.get(`/schedules`);
};

const ScheduleService = {
    addSchedule,
    getAllSchedules,
};

export default ScheduleService;
