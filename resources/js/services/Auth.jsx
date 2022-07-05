import { fetchCurrentUser, loginApi, logoutApi } from "@/apis/authApi"
import { showSuccessMessage } from "@/utils"
import { Modal } from "antd"
import { useEffect, useState } from "react"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { Navigate } from "react-router-dom"

const key = "auth-user"

const Loading = function () {
    return 'Loading...'
}


export const useLogout = () => {
    const queryClient = useQueryClient()
    return useMutation(logoutApi, {
        onSuccess() {
            queryClient.setQueryData(key, null)
        }
    })
}

export const useLogin = () => {
    const queryClient = useQueryClient()
    return useMutation(loginApi, {
        onSuccess(data) {
            queryClient.setQueryData(key, data)
        }
    })
}

export const useAuth = function () {
    const [initializing, setInitializing] = useState(true)

    const { data:user, refetch } = useQuery({
        queryKey: key,
        queryFn: fetchCurrentUser,
        initialData: null,
        enabled: false,

        retry: (failureCount, error) => {
            //Unauthenticated
            if (error?.response?.status === 401) return false

            if (failureCount >= 3) return false

            return true
        },
        onSettled() {
            setInitializing(false)
        }
    })

    const isLoggedIn = user !== null

    return {
        user,
        initializing,
        isLoggedIn,
        refetch,
    }
}

export const AuthProvider = function ({ children }) {
    const { initializing, refetch, isLoggedIn } = useAuth()

    useEffect(() => {
        refetch()
    }, [])

    if (initializing)
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