import { loginApi, logoutApi } from "@/apis/authApi"
import useCurrentUser from "@/queries/useCurrentUser"
import { showSuccessMessage } from "@/utils"
import { Modal } from "antd"
import { useMutation, useQueryClient } from "react-query"
import { Navigate } from "react-router-dom"

const key = "auth-user"

const Loading = function () {
    return 'Loading...'
}


export const useAuth = function (option = {}) {
    const { data: user } = useCurrentUser(key, option)

    const isLoggedIn = !!user

    return {
        user,
        isLoggedIn,
    }
}

export const useLogin = () => {
    const queryClient = useQueryClient()
    return useMutation(loginApi, {
        onSuccess(data) {
            queryClient.setQueryData(key, data)
        }
    })
}

export const useLogout = () => {
    const queryClient = useQueryClient()
    return useMutation(logoutApi, {
        onSuccess() {
            queryClient.setQueryData(key, null)
        }
    })
}

export const AuthProvider = function ({ children }) {
    
    const { isLoading } = useCurrentUser(key)

    if (isLoading)
        return <Loading />

    return children
}

export const GuestOnly = function ({ element }) {
    const { isLoggedIn } = useAuth()

    if (isLoggedIn) {
        return <Navigate to='/' />
    }

    return element
}


export const useLogoutModal = function () {

    const { mutateAsync } = useLogout()

    const showLogoutModal = () => {
        Modal.confirm({
            title: 'Confirm Logout?',
            content: 'Are you sure to logout?',
            async onOk() {
                await mutateAsync()
                showSuccessMessage('Logout Successfully')
            }
        })
    }

    return { showLogoutModal }
}