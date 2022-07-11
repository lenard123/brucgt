import { AdminContainer, AdminHeader } from "@/components";
import useCategories from "@/queries/useCategories";
import { Button, Empty, Spin, } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CategoryList = function () {
    const { data, isLoading, invalidateData } = useCategories()

    useEffect(() => {
        invalidateData()
    }, [])

    if (isLoading) 
        return <Spin className="py-16 block" tip='Fetching Categories' />

    if (data?.length === 0)
        return (
            <Empty description='No categories' className="py-16">
                <Link to='create'><Button type='primary'>Create Now</Button></Link>
            </Empty>
        )

    return (
        <div className="grid grid-cols-1 divide-y divide-gray-200">

            <div className="flex justify-between p-4 font-bold text-sm">
                <span>Name</span>
                <span>Option</span>
            </div>

            {data.map(item => (
                <div key={item.id} className="flex gap-4 p-4">
                    <span className="flex-grow">{item.name}</span>
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
                </div>
            ))}
        </div>
    )

}

export default function Categories() {

    const categories = ["Tshirt", "Polo Shirt", "Wet Shirt", "Clothing", "Bag", "Slippers", "Cups", "Perfumes", "Beauty Products"]

    return (
        <AdminContainer>

            <AdminHeader title='Categories'>
                <Link to="create">
                    <Button className="rounded" type="primary" >Add New Category</Button>
                </Link>
            </AdminHeader >

            <div className="mt-6 bg-white rounded shadow">

                <div className="p-4 border-b border-gray-200">
                    <span className="font-semibold text-lg text-gray-800">List of Categories</span>
                </div>

                <div className="p-4">
                    <CategoryList />
                </div>
            </div>
        </AdminContainer>
    )
}