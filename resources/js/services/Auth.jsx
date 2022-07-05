import { fetchCurrentUser, loginApi, logoutApi } from "@/apis/authApi"
import { useState } from "react"
import { useMutation, useQuery } from "react-query"

const key = "auth-user"

const Loading = function () {
    return 'Loading...'
}

const loginFn = async (credential) => {
    const { data } = await loginApi(credential) 
    return data
}

const useLogin = () => {
    return useMutation(loginFn)
}

export const useAuth = function () {
    const [initializing, setInitializing] = useState(true)
    const login = useLogin()


    const { user } = useQuery({
        queryKey: key,
        queryFn: fetchCurrentUser,
        enabled: false,
        retry: (failureCount, error) => {
            if (failureCount >= 3) return false

            //Unauthenticated
            if (error?.response?.status === 401) return false

            return true
        },
        onSettled() {
            setInitializing(false)
        }
    })

    const isLoggedIn = user !== undefined

    return {
        user,
        initializing,
        isLoggedIn,
        login,
        logout: logoutApi
    }
}

export const AuthProvider = function ({ children }) {
    const { initializing } = useAuth()

    if (initializing)
        return <Loading />

    return children
}

// import { fetchCurrentUser, loginApi, logoutApi, registerApi } from '@/apis/authApi';
// import { Modal } from 'antd';
// import { initReactQueryAuth } from 'react-query-auth';
// import { Navigate } from 'react-router-dom';

// export const { AuthProvider, useAuth } = initReactQueryAuth({

//     loadUser: async function() {
//         const { data } = await fetchCurrentUser()
//         return data
//     },

//     loginFn: async function (credential) {
//         const { data } = await loginApi(credential)
//         return data
//     },

//     logoutFn: logoutApi,

//     registerFn: async function (userData) {
//         const { data } = await registerApi(userData)
//         return data
//     }

// })

export const GuestOnly = function ({ element }) {
    const { user } = useAuth()

    if (user) {
        return <Navigate to='/' />
    }

    return element

}


export const useLogoutModal = function () {

    const { logout } = useAuth()

    const showLogoutModal = () => {
        Modal.confirm({
            title: 'Confirm Logout?',
            content: 'Are you sure to logout?',
            onOk() {
                return logout()
            }
        })
    }

    return { showLogoutModal }
}