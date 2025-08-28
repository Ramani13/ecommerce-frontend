// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ecommerce-backend-qx43.onrender.com/api", // ✅ deployed backend URL
  withCredentials: true,
});
export default axiosInstance;
