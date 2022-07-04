import axios from "axios";
import config from "../config/config";

const Http = axios.create(config('axios'))

window.Http = Http

export default Http