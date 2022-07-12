import Http from "@/services/Http"
import { getCsrfCookie } from "./api"


export const createAttribute = async function(name) {
    await getCsrfCookie()
    const { data } = await Http.post('/attribute', { name })
    return data
}

export const fetchAllAttributes = async function () {
    await getCsrfCookie()
    const { data } = await Http.get('/attribute')
    return data
}