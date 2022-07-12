import { AdminContainer, AdminHeader } from "@/components";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";

const { Column } = Table

export default function AllProducts() {


    const products = [
        {
            id: 1,
            title: "PIQUE POLO - PINK POLO SHIRT (PREMIUM WEAR)",
            price: 330,
            saleCount: 100,
            image: "https://brucgt.com/admin_area/product_images/IMG20220409182331-removebg-preview.png"
        },
        {
            id: 2,
            title: "PIQUE POLO - PINK POLO SHIRT (PREMIUM WEAR)",
            price: 330,
            saleCount: 100,
            image: "https://brucgt.com/admin_area/product_images/IMG20220409173228-removebg-preview.png"
        },
    ]

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
                    <Table dataSource={products} rowSelection={{ type: 'checkbox' }}>
                        <Column title='Name' dataIndex={'title'} render={(value, record) => (
                            <div>
                                <img className="w-16" src={record.image} />
                                <span>{record.title}</span>
                            </div>
                        )} />
                        <Column title='Price' dataIndex={'price'} />
                        <Column title='Info' />
                        <Column
                            fixed='right'
                            title='Actions'
                            render={(_, record) => (
                                <div className="flex-shrink-0 flex gap-2">
                                    <a className="circle-icon-btn circle-icon-btn-orange">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </a>
                                    <a className="circle-icon-btn circle-icon-btn-red">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </a>
                                </div>
                            )}
                        />
                    </Table>
                </div>

            </div>

        </AdminContainer>
    )
}
