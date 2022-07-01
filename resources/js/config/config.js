
import axios from "./axios";

const configurations = {
    axios     
}

export default function config(key, _default = null)
{
    const keys = key.split('.');
    let value = configurations
    for(let key in keys) {
        if (value[key] == undefined) {
            return _default;
        }
        value = value[key]
    }
    return value
}