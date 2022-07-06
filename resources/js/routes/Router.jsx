import { AuthProvider } from "@/services/Auth";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRoutes from "./UserRoutes";

const AdminRoutes = React.lazy(() => import('./AdminRoutes'))


export default function Router() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Suspense fallback={'Loading...'}>
                    <Routes>
                        <Route path="/admin_area/*" element={<AdminRoutes />} />
                        <Route path="/*" element={<UserRoutes />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </AuthProvider>
    )
}
