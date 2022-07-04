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