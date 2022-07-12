import { DollarCircleFilled, FileTextFilled, HomeFilled, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";


export default function Sidebar() {

    const [visible, setVisible] = useState(false)

    return (
        <div
            className={
                "lg:overflow-auto thin-scrollbar z-20 fixed lg:relative lg:block lg:left-0 flex-shrink-0 w-[260px] h-screen bg-[#141423] xbg-slate-800 text-gray-500 transition-all ease-in-out duration-300 lg:duration-0 "
                + (visible ? " left-0 overflow-auto " : "-left-[260px] overflow-visible")
            }
        >
            <div className="h-16 bg-[#1A1A27] xbg-gray-900 text-white shadow px-5 flex items-center">
                <img src="/images/logo.png" className="mr-2 h-8" />
                <span className="text-2xl font-bold">BRUCGT</span>
            </div>

            <div
                className="absolute top-0 lg:hidden right-0 h-16 flex items-center px-4 transition-all "
                style={{
                    transform: !visible ? 'translateX(100%)' : null,
                }}
            >
                <Button
                    style={{
                        color: visible ? 'white' : 'black'
                    }}
                    type="text"
                    icon={visible ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                    onClick={() => setVisible(visible => !visible)} />
            </div>

            <nav>
                <p className="p-3 mt-3 text-xs uppercase text-gray-400 mb-0">Home</p>

                <Link to='/admin_area' className="transition-all text-sm flex hover:bg-[#181827] text-[#a2a3b7] hover:text-white py-2" href="#">
                    <span className="inline-flex justify-center items-center w-12 h-5 flex-none">
                        <HomeFilled />
                    </span>
                    <span className="flex-grow">Dashboard</span>
                </Link>

                <p className="p-3 mt-3 text-xs uppercase text-gray-400 mb-0">General</p>

                <Dropdown
                    label='Products'
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    }
                >
                    <div className="py-2 pl-12 hover:text-gray-300">Add Product</div>
                    <Link to='/admin_area/products/all' className="py-2 pl-12 hover:text-gray-300">All Products</Link>
                    <Link to='/admin_area/categories' className="py-2 pl-12 block hover:text-gray-300">Category</Link>
                    <div className="py-2 pl-12 hover:text-gray-300">Attributes</div>
                </Dropdown>

                <Link to='/admin_area' className="transition-all text-sm flex hover:bg-[#181827] text-[#a2a3b7] hover:text-white py-2" href="#">
                    <span className="inline-flex justify-center items-center w-12 h-5 flex-none">
                        <DollarCircleFilled />
                    </span>
                    <span className="flex-grow">Sales</span>
                </Link>

                <Link to='/admin_area' className="transition-all text-sm flex hover:bg-[#181827] text-[#a2a3b7] hover:text-white py-2" href="#">
                    <span className="inline-flex justify-center items-center w-12 h-5 flex-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                    </span>
                    <span className="flex-grow">Customers</span>
                </Link>

                <Dropdown
                    label={'Reports'}
                    icon={<FileTextFilled />}
                >
                    <div className="py-2 pl-12 hover:text-gray-300">Sales Report</div>
                    <div className="py-2 pl-12 hover:text-gray-300">Best Seller</div>
                </Dropdown>

            </nav>

        </div>
    )
}