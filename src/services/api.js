import axios from "axios";

export const api = axios.create({
    baseURL: 'https://moviememoir-api.onrender.com'
});