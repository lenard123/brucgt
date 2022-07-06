import Http from "../services/Http"
import { getCsrfCookie } from "./api"

export const registerApi = async (data) => {
    await getCsrfCookie()
    return await Http.post('/register', data)
}

export const loginApi = async (credential) => {
    await getCsrfCookie()
    const { data } = await Http.post('/login', credential)
    return data
}

export const logoutApi = async() => {
    await getCsrfCookie()
    return await Http.post('/logout')
}

export const fetchCurrentUser = async () => {
    await getCsrfCookie()
    const { data } = await Http.get('/user')
    return data
}

export const adminLoginApi = async (credential) => {
    await getCsrfCookie()
    const { data } = await Http.get('/admin/login', credential)
    return data
}