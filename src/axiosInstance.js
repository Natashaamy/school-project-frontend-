import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:4000/api/auth", // Change to your backend URL
    headers: { "Content-Type": "application/json" },
});

export default API;
