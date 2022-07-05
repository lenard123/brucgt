import { useAuth } from "@/services/Auth";
import { useState } from "react";
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom";
import { registerApi } from "../../apis/authApi";
import { getValidationErrors, showSuccessMessage } from "../../utils";

export default function useRegistrationHandler()
{
    const navigate = useNavigate()

    const { register, isRegistering: isLoading, error } = useAuth()

    // const { mutate, isLoading,  error } = useMutation(registerApi, {
    //     onSuccess() {
    //         showSuccessMessage('You can now proceed to login', 'Registered Successfully')
    //         navigate('/login')
    //     }
    // })
    const validationErrors = getValidationErrors(error)

    const handleSubmit = (data) => {
        register(data, {
            onSuccess() {
                showSuccessMessage('Registered Successfully')
                // navigate('/login')
            }
        })
    }

    return {
        handleSubmit,
        isLoading,
        validationErrors
    }
}