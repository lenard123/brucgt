import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

export default function Router()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage />} />
            </Routes>      
        </BrowserRouter>
    )
}
