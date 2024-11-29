import axios from 'axios';
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // Add token to Authorization header
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

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


        const rawToken = response.data; // Full token, e.g., "Bearer eyJhbGci..."
        const jwtToken = rawToken.split(' ')[1]; // Extract the JWT part

        // Log the raw token and the extracted JWT
        console.log('Full Token:', rawToken);
        console.log('JWT Token:', jwtToken);
        axios.defaults.headers.common['Authorization'] = rawToken;
        // Save only the JWT in local storage
        localStorage.setItem('token', jwtToken);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};


//Expired Function
const isTokenExpired = () => {
    const token = getToken();
    if (!token) return true;

    try {
        const [, payload] = token.split('.'); // Decode payload
        const decodedPayload = JSON.parse(atob(payload));
        const now = Math.floor(Date.now() / 1000);
        const result=decodedPayload.exp < now;
        if(result)
            alert("from expiration part");
        return result; // Return true if token is expired
    } catch {
        return true; // Treat invalid tokens as expired
    }
};


// Logout function
const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization']; // Remove the token from local storage
};

// Get the currently logged-in user's token
const getToken = () => {
    return localStorage.getItem('token');
};

// Check if the user is authenticated
const isAuthenticated = () => {
    const token = getToken();
    const result =(token !== null);
    return result;
};

// Attach Authorization header with the token for protected API calls
const setAuthHeader = () => {
    const token = getToken();
    console.log('auth header', 'token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
