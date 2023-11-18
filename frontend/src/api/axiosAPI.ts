import axios from "axios"
export const axiosAPI = axios.create({
    baseURL: 'http://10.121.6.160:8080'
})