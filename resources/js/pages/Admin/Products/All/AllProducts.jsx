import { AdminContainer, AdminHeader } from "@/components";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";

const { Column } = Table

export default function AllProducts() {
    return (
        <AdminContainer>

            <AdminHeader title='Products'>
                <Link to="create">
                    <Button className="rounded" type="primary" >Add New Product</Button>
                </Link>
            </AdminHeader>

            <div className="mt-6 bg-white rounded shadow">
                <div className="p-4 border-b border-gray-200">
                    <span className="font-semibold text-gray-800">All Products</span>
                </div>

                <div className="p-4">
                    
                </div>

            </div>

        </AdminContainer>
    )
}
