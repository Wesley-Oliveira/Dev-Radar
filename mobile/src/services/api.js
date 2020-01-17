import axios from 'axios';

const api = axios.create({
    //o endereço que o expo disponibilizar
    baseURL: 'http://192.168.0.7:3333'
});

export default api;