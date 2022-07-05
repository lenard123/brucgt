import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom";
import { registerApi } from "../../apis/authApi";
import { getValidationErrors, showSuccessMessage } from "../../utils";

export default function useRegistrationHandler()
{
    const navigate = useNavigate()

    const { mutate, isLoading,  error } = useMutation(registerApi, {
        onSuccess() {
            showSuccessMessage('You can now proceed to login', 'Registered Successfully')
            navigate('/login')
        }
    })

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