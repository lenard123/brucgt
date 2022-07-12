import AdminLayout from "@/layouts/AdminLayout/AdminLayout"
import AdminLogin from "@/pages/Admin/AdminLogin/AdminLogin"
import Dashboard from "@/pages/Admin/Dashboard/Dashboard"
import { AdminOnly, PreventAdmin } from "@/services/Auth"
import { Route, Routes } from "react-router-dom"
import Categories from "@/pages/Admin/Categories/Categories"
import CreateCategory from "@/pages/Admin/Categories/CreateCategory"
import AllProducts from "@/pages/Admin/Products/All/AllProducts"
import CreateProduct from "@/pages/Admin/Products/Create/CreateProduct"
import Attributes from "@/pages/Admin/Attributes/Attributes"
import AttributeValues from "@/pages/Admin/Attributes/AttributeValues"

const AdminDashboardRoutes = function () {
    return (
        <AdminLayout>
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="products/create" element={<CreateProduct />} />
                <Route path="products/all" element={<AllProducts />} />
                <Route path="categories" element={<Categories />} />
                <Route path="categories/create" element={<CreateCategory />} />
                <Route path="attributes" element={<Attributes />} />
                <Route path="attributes/:id" element={<AttributeValues />} />
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