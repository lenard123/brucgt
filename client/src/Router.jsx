import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";

// import LandingPage from "./pages/LandingPage/LandingPage";
const LandingPage = React.lazy(() => import('./pages/LandingPage/LandingPage'))
const About = React.lazy(() => import('./pages/About/About'))

export default function Router()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />} >
                    <Route index element={<LandingPage />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={null} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
