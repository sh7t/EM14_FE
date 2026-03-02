import axios from 'axios';

const customAxios = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default customAxios;