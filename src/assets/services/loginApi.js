import axios from 'axios';

const getApiBaseUrl = () => {
    if (process.env.REACT_APP_API_URL) {
        return process.env.REACT_APP_API_URL;
    }

    if (typeof window !== 'undefined') {
        return `${window.location.protocol}//${window.location.hostname}:5000`;
    }

    return 'http://localhost:5000';
};

export default async function getToken({ username, password }) {
    const response = await axios.post(`${getApiBaseUrl()}/api/auth/login`, {
        username,
        password,
    });

    return response.data;
}
