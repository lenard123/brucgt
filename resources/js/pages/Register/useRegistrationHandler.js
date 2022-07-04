import { useEffect, useState } from "react";
import { useMutation } from "react-query"
import { registerApi } from "../../apis/authApi";
import { useValidationErrors } from "../../utils";
import baseRules from './registerValidation'

export default function useRegistrationHandler()
{
    const { mutate, isLoading, error } = useMutation(registerApi)
    const validationErrors = useValidationErrors(baseRules, error)

    useEffect(() => {
        // console.log({form})
    }, [validationErrors])

    const handleSubmit = (data) => {
        if (isLoading) return;
        mutate(data)
    }

    return {
        handleSubmit,
        isLoading
    }
}