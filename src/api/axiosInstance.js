// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ecommerce-backend-xfhn.vercel.app/api", // ✅ deployed backend URL
  withCredentials: true,
});
export default axiosInstance;
