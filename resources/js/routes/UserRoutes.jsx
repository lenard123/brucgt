import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider, GuestOnly } from "../services/Auth";
import MainLayout from "../layouts/MainLayout/MainLayout";

const Shop = React.lazy(() => import('../pages/Shop/Shop'))
const LandingPage = React.lazy(() => import('../pages/LandingPage/LandingPage'))
const About = React.lazy(() => import('../pages/About/About'))
const Contact = React.lazy(() => import('../pages/Contact/Contact'))
const Register = React.lazy(() => import('../pages/Register/Register'))
const Login = React.lazy(() => import('../pages/Login/Login'))

export default function UserRoutes() {
    return (
        <MainLayout>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='shop' element={<Shop />} />
                <Route path='login' element={<GuestOnly element={<Login />} />} />
                <Route path='register' element={<GuestOnly element={<Register />} />} />
            </Routes>
        </MainLayout>
    )
}