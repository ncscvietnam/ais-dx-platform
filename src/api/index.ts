import axios from 'axios'
const API = axios.create({ baseURL: 'https://api.khonggianmang.vn/api/v3/' })
API.interceptors.response.use(
    (response: any) => {
        return response
    },
    (error: any) => {
        return Promise.reject(error)
    }
)

export default API
