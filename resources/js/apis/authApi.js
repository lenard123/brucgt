import Http from "../services/Http"
import { getCsrfCookie } from "./api"

export const registerApi = async (data) => {
    await getCsrfCookie()
    return await Http.post('/register', data)
}

export const loginApi = async (data) => {
    await getCsrfCookie()
    return await Http.post('/login', data)
}

export const logoutApi = async() => {
    await getCsrfCookie()
    return await Http.post('/logout')
}

export const fetchCurrentUser = async () => {
    await getCsrfCookie()
    return await Http.get('/user')
}