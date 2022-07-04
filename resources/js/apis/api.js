import Cookies from "js-cookie"
import Http from "../services/Http"


export const getCsrfCookie = async () => {
    return Cookies.get('XSRF-TOKEN') || await Http.get('/csrf-cookie')
}