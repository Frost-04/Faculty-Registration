import axios from 'axios';

const API_URL = process.env.REACT_APP_API_BASE_URL;

// Login function
const login = async (email, password) => {
    try {
        // Prepare data as key-value pairs
        const formData = new URLSearchParams();
        formData.append('username', email);
        formData.append('password', password);
       

        // Send POST request with x-www-form-urlencoded format
        const response = await axios.post(`/auth/login`, formData, {
            headers: {
                
                'Content-Type': 'application/x-www-form-urlencoded', // Specify content type
            },
        });


        // Save the JWT token in local storage
        localStorage.setItem('token', response.data.token);

        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};


// Logout function
const logout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
};

// Get the currently logged-in user's token
const getToken = () => {
    return localStorage.getItem('token');
};

// Check if the user is authenticated
const isAuthenticated = () => {
    const token = getToken();
    return token !== null; // Return true if token exists, false otherwise
};

// Attach Authorization header with the token for protected API calls
const setAuthHeader = () => {
    const token = getToken();
    if (token) {
        axios.defaults.headers.common['Authorization'] = `token`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

const AuthService = {
    login,
    logout,
    getToken,
    isAuthenticated,
    setAuthHeader,
};

export default AuthService;
