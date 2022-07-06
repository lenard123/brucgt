import { DollarCircleFilled, HomeFilled, MenuFoldOutlined, MenuUnfoldOutlined, UnorderedListOutlined } from "@ant-design/icons"
import { Avatar, Button } from "antd"
import { useState } from "react"


export default function AdminLayout({ children }) {

    const [visible, setVisible] = useState(true)

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={
                    "fixed lg:relative lg:block lg:left-0 flex-shrink-0 w-[260px] h-screen bg-slate-800 text-gray-500 transition-all ease-in-out duration-300 lg:duration-0 "
                    + (visible ? "left-0 " : "-left-[260px] ")
                }
            >
                <div className="h-16 bg-gray-900 text-white shadow px-5 flex items-center">
                    <img src="/images/logo.png" className="mr-2 h-8" />
                    <span className="text-2xl font-bold">BRUCGT</span>
                </div>

                <div
                    className="absolute top-0 lg:hidden right-0 h-16 flex items-center px-4 transition-all"
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
                    <a
                        className="flex hover:bg-gray-700 text-gray-300 py-2" href="#">
                        <span className="inline-flex justify-center items-center w-12 h-6 flex-none">
                            <HomeFilled />
                        </span>
                        <span className="flex-grow">Dashboard</span>
                    </a>

                    <p className="p-3 mt-3 text-xs uppercase text-gray-400 mb-0">General</p>


                    <a
                        className="flex hover:bg-gray-700 text-gray-300 py-2" href="#">
                        <span className="inline-flex justify-center items-center w-12 h-6 flex-none">
                            <UnorderedListOutlined />
                        </span>
                        <span className="flex-grow">Categories</span>
                    </a>

                    <a
                        className="flex hover:bg-gray-700 text-gray-300 py-2" href="#">
                        <span className="inline-flex justify-center items-center w-12 h-6 flex-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                        </span>
                        <span className="flex-grow">Products</span>
                    </a>

                    <a
                        className="flex hover:bg-gray-700 text-gray-300 py-2" href="#">
                        <span className="inline-flex justify-center items-center w-12 h-6 flex-none">
                            <DollarCircleFilled />
                        </span>
                        <span className="flex-grow">Orders</span>
                    </a>


                    <a
                        className="flex hover:bg-gray-700 text-gray-300 py-2" href="#">
                        <span className="inline-flex justify-center items-center w-12 h-6 flex-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                        </span>
                        <span className="flex-grow">Customers</span>
                    </a>
                </nav>

            </div>

            <div className="flex-grow min-h-screen flex flex-col">
                {/* header */}
                <div className="h-16 bg-white shadow">
                    <div className="flex items-center justify-between h-full">
                        <div></div>
                        <div className="px-4">
                            <Avatar size="large" src="https://avatars.dicebear.com/api/initials/juan+dela+cruz.svg" />
                        </div>
                    </div>
                </div>

                {/* content */}
                <div className="flex-grow ">
                    { children }
                </div>

                {/* footer */}
                <div>Footer</div>
            </div>
        </div>
    )
}