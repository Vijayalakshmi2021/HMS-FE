import axios from "axios";

const instance = axios.create({
    // baseURL:  "http://localhost:5000"
    baseURL: "https://capstone-be-g5sw.onrender.com"
});

export default instance;