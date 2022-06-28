import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Suspense } from "react";

export default function MainLayout() {
    return (
        <>
            <Header />
            <Navbar />
            <Suspense fallback={'loading'}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    )
}