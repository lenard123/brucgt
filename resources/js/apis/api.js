import Cookies from "js-cookie"
import Http from "../services/Http"


export const getCsrfCookie = async () => {
    return Cookies.get('XSRF-TOKEN') || Http.get('/csrf-cookie')
}