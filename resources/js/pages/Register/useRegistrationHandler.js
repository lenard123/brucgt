import { useMutation } from "react-query"
import { registerApi } from "../../apis/authApi";


export default function useRegistrationHandler()
{

    const { execute, isLoading } = useMutation(registerApi)

    const handleSubmit = (data) => {
        if (isLoading) return;
        execute(data)
    }

    return {
        handleSubmit,
        isLoading
    }
}