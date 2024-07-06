import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend-38vd.vercel.app/api/v1", 
});

export default axiosInstance;
