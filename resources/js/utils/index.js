import { notification } from "antd"

export const getValidationErrors = (error) => {
    if (error?.response?.status === 422) {
        const { errors } = error.response.data
        return Object.keys(errors).reduce( (acm, field) => ({
            ...acm,
            [field]: { validateStatus: 'error', help: errors[field].join('\n') }
        }), {} )
    }
    return {}
}

export const showSuccessMessage = (description, message = 'Success') => {
    notification.success({
        message,
        description
    })
}