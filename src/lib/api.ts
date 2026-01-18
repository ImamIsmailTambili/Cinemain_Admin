import axios from "axios";

export const api = axios.create({
    baseURL: "https://cinemain-backend.up.railway.app",
    withCredentials: true, // penting untuk cookie JWT
});
