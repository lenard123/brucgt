import AdminLayout from "@/layouts/AdminLayout/AdminLayout"
import AdminLogin from "@/pages/Admin/AdminLogin/AdminLogin"
import Dashboard from "@/pages/Admin/Dashboard/Dashboard"
import { AdminOnly, PreventAdmin } from "@/services/Auth"
import { Route, Routes } from "react-router-dom"
import Categories from "@/pages/Admin/Categories/Categories"
import CreateCategory from "@/pages/Admin/Categories/CreateCategory"

const AdminDashboardRoutes = function () {
    return (
        <AdminLayout>
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="categories" element={<Categories />} />
                <Route path="categories/create" element={<CreateCategory />} />
            </Routes>
        </AdminLayout>
    )
}

const AdminRoutes = function () {
    return (
        <Routes>
            <Route 
                path="/*" 
                element={
                    <AdminOnly element={<AdminDashboardRoutes />} />
                } 
            />
            <Route 
                path="login" 
                element={ 
                    <PreventAdmin element={<AdminLogin/>} />
                } 
            />
        </Routes>
    )
}

export default AdminRoutes