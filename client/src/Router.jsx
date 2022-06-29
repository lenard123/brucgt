import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";

const Shop = React.lazy(() => import('./pages/Shop/Shop'))
const LandingPage = React.lazy(() => import('./pages/LandingPage/LandingPage'))
const About = React.lazy(() => import('./pages/About/About'))
const Contact = React.lazy(() => import('./pages/Contact/Contact'))

export default function Router()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />} >
                    <Route index element={<LandingPage />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='shop' element={<Shop />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
