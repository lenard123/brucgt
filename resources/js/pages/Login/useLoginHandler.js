import { loginApi } from "@/apis/authApi"
import { useAuth, useLogin } from "@/services/Auth"
import { getValidationErrors } from "@/utils"
import { useMutation } from "react-query"


export default function useLoginHandler()
{
    const { mutate, isLoading, error } = useLogin()

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

