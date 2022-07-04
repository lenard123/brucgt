
import axios from "./axios";

const configurations = {
    axios     
}

export default function config(key, _default = null)
{
    const keys = key.split('.');
    let value = configurations
    for(let _key of keys) {
        if (value[_key] == undefined) {
            return _default;
        }
        value = value[_key]
    }
    return value
}