import { Button, Typography } from "antd";
import { Link } from "react-router-dom";

export default function Categories() {

    const categories = ["Tshirt", "Polo Shirt", "Wet Shirt", "Clothing", "Bag", "Slippers", "Cups", "Perfumes", "Beauty Products"]

    return (
        <div className="p-4 mt-4 max-w-screen-lg mx-auto">

            <div className="flex justify-between">
                <Typography.Title level={3}>All Categories</Typography.Title>
                <Link to="create">
                    <Button className="rounded" type="primary" size="large">Add New Category</Button>
                </Link>
            </div>

            <div className="mt-6 bg-white rounded shadow-lg">

                <div className="p-4 border-b border-gray-200">
                    <span className="font-semibold text-lg text-gray-800">Categories</span>
                </div>

                <div className="p-4">


                    <div className="grid grid-cols-1 divide-y divide-gray-200">

                        <div className="flex justify-between p-4 font-bold text-sm">
                            <span>Name</span>
                            <span>Option</span>
                        </div>

                        {categories.map(item => (
                            <div key={item} className="flex gap-4 p-4">
                                <span className="flex-grow">{item}</span>
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


                </div>
            </div>
        </div>
    )
}