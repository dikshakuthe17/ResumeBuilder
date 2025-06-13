import axios from 'axios';
import {BASE_URL} from './apiPaths';
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, // 10 seconds timeout
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// Add a request interceptor to include the token in headers
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('token');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
   (response) => {
    return response;
   },
   (error) => {
        if (error.response) {
            // Handle specific error responses
            if (error.response.status === 401) {
                // Unauthorized access, redirect to login or show a message
                console.error('Unauthorized access - please log in again.');
                // Redirect to login page or show a modal
                window.location.href = '/';
            } else if (error.response.status === 500) {
                // Server error
                console.error('Server error - please try again later.');
            } else if (error.code === 'ECONNABORTED') {
                // Other errors
                console.error('Request timed out - please try again later.');
            }
        } else {
            // Network or other errors
            console.error('Network error or server is down.');
        }
        return Promise.reject(error);

   }

);
export default axiosInstance;