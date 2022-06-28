import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import LandingPage from "./pages/LandingPage/LandingPage";

export default function Router()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />} >
                    <Route index element={<LandingPage />} />
                    <Route path='about' element={null} />
                    <Route path='contact' element={null} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
