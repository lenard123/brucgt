import { loginApi } from "@/apis/authApi"
import { useAuth } from "@/services/Auth"
import { getValidationErrors } from "@/utils"
import { useMutation } from "react-query"


export default function useLoginHandler()
{
    // const { mutate, isLoading, error } = useMutation(loginApi)
    const { login } = useAuth()
    const { mutate, isLoading, error } = login

    const validationErrors = getValidationErrors(error)

    const handleSubmit = (data) => {
        mutate(data)
    }

    return {
        handleSubmit,
        isLoading,
        validationErrors
    }
}