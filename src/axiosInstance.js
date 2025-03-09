import axios from "axios";

const API = axios.create({
    baseURL: "https://school-project-pg6q.onrender.com/api/auth",
    headers: { "Content-Type": "application/json" },
});

export default API;
