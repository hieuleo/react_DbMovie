import axios from 'axios';

const getApiBaseUrl = () => {
    if (process.env.REACT_APP_API_URL) {
        return process.env.REACT_APP_API_URL;
    }

    return '';
};

const authClient = axios.create({
    baseURL: getApiBaseUrl(),
});

export default async function getToken({ username, password }) {
    const response = await authClient.post('/api/auth/login', {
        username,
        password,
    });

    return response.data;
}

export async function getCurrentUser(token) {
    const response = await authClient.get('/api/auth/me', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data.user;
}
