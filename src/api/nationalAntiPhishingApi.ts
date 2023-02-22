import { store } from './../redux/store/store'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_NAP_API_URL

const napAPI = axios.create({
    baseURL: API_URL,
})

export const getCategories = () => {
    return napAPI.get('categories').then((res) => res.data)
}

napAPI.interceptors.request.use((config: any) => {
    if (store.getState().auth.anonymous === false) {
        config.headers.Authorization = store.getState().auth.token
    }
    return config
})

export default napAPI
