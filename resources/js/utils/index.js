import _ from "lodash"
import { useEffect, useState } from "react"

const throwValidationRule = (message) => {
    return () => ({
        async validator() {
            throw new Error(message)
        }
    })
} 

export const useValidationErrors = (rules, error) => {

    const [result, setResult] = useState(rules)

    useEffect(() => {
        if (error?.response?.status === 422) {
            const { errors } = error.response.data
            const temp = {};
            _.keys(rules).forEach(key => {            
                temp[key] = rules[key]
                if (errors[key] !== undefined) {
                    const rule = errors[key].map(throwValidationRule)
                    temp[key].push(...rule)
                }
            })
            setResult(temp)
        } else {
            setResult(rules)
        }
    }, [error])

    return result
}