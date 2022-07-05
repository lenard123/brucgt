import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";
import Dashboard from "./pages/Admin/AdminLogin/Dashboard/Dashboard";
import { AuthProvider, GuestOnly } from "./services/Auth";

const Shop = React.lazy(() => import('./pages/Shop/Shop'))
const LandingPage = React.lazy(() => import('./pages/LandingPage/LandingPage'))
const About = React.lazy(() => import('./pages/About/About'))
const Contact = React.lazy(() => import('./pages/Contact/Contact'))
const Register = React.lazy(() => import('./pages/Register/Register'))
const Login = React.lazy(() => import('./pages/Login/Login'))

export default function Router() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<AuthProvider><MainLayout /></AuthProvider>} >
                    <Route index element={<LandingPage />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='shop' element={<Shop />} />
                    <Route path='login' element={<GuestOnly element={<Login />} />} />
                    <Route path='register' element={<GuestOnly element={<Register />} />} />
                </Route>
                <Route path='/admin_area' element={<Outlet />}>
                    <Route index element={<Dashboard />} />
                    <Route path="login" element={<AdminLogin />} />
                </Route>
            </Routes>

        </BrowserRouter>
    )
}
