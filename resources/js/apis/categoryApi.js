import Http from "@/services/Http"
import { getCsrfCookie } from "./api"


export const createCategory = async function(data) {
    await getCsrfCookie()
    const { data:result } = await Http.post('/category', data)
    return result
}

export const fetchCategories = async function() {
    await getCsrfCookie()
    const { data } = await Http.get('/category')
    return data
}
