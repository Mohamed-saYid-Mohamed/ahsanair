import axios from 'axios';

// Create an axios instance
const api = axios.create({
    // This points to your XAMPP server
    // Make sure you copy the 'api' folder to C:\xampp\htdocs\ahsan-api
    baseURL: 'http://localhost/ahsan-api/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
