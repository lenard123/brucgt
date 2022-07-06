import AdminLayout from "@/layouts/AdminLayout/AdminLayout"
import AdminLogin from "@/pages/Admin/AdminLogin/AdminLogin"
import Dashboard from "@/pages/Admin/Dashboard/Dashboard"
import { Route, Routes } from "react-router-dom"

const AdminDashboardRoutes = function () {
    return (
        <AdminLayout>
            <Routes>
                <Route index element={<Dashboard />} />
            </Routes>
        </AdminLayout>
    )
}

const AdminRoutes = function () {
    return (
        <Routes>
            <Route path="login" element={<AdminLogin />} />
            <Route path="*" element={<AdminDashboardRoutes />} />
        </Routes>
    )
}

export default AdminRoutes