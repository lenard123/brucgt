import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Suspense } from "react";
import PageLoading from "./components/PageLoading";

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <Navbar />
            <Suspense fallback={<PageLoading />}>
                { children }
            </Suspense>
            <Footer />
        </>
    )
}