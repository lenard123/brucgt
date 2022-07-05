import { HomeFilled, HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useState } from "react"


export default function Dashboard() {

    const [visible, setVisible] = useState(true)

    return (
        <>
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
                        className="absolute top-0 lg:hidden right-0 h-16 flex items-center px-4"
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
                        <p class="p-3 mt-3 text-xs uppercase text-gray-400 mb-0">Home</p>
                        <a
                            className="flex hover:bg-gray-700 text-gray-300 py-2" href="#">
                            <span className="inline-flex justify-center items-center w-12 h-6 flex-none">
                                <HomeFilled />
                            </span>
                            <span className="flex-grow">Dashboard</span>
                        </a>

                        <p class="p-3 mt-3 text-xs uppercase text-gray-400 mb-0">General</p>


                        <a
                            className="flex hover:bg-gray-700 text-gray-300 py-2" href="#">
                            <span className="inline-flex justify-center items-center w-12 h-6 flex-none">
                                <HomeFilled />
                            </span>
                            <span className="flex-grow">Categories</span>
                        </a>

                        <a
                            className="flex hover:bg-gray-700 text-gray-300 py-2" href="#">
                            <span className="inline-flex justify-center items-center w-12 h-6 flex-none">
                                <HomeFilled />
                            </span>
                            <span className="flex-grow">Products</span>
                        </a>

                        <a
                            className="flex hover:bg-gray-700 text-gray-300 py-2" href="#">
                            <span className="inline-flex justify-center items-center w-12 h-6 flex-none">
                                <HomeFilled />
                            </span>
                            <span className="flex-grow">Orders</span>
                        </a>


                        <a
                            className="flex hover:bg-gray-700 text-gray-300 py-2" href="#">
                            <span className="inline-flex justify-center items-center w-12 h-6 flex-none">
                                <HomeFilled />
                            </span>
                            <span className="flex-grow">Customers</span>
                        </a>
                    </nav>

                </div>

                <div className="flex-grow min-h-screen flex flex-col">
                    {/* header */}
                    <div className="h-16 bg-white shadow">
                        <div className="flex items-center">
                            
                        </div>
                    </div>

                    {/* content */}
                    <div className="flex-grow ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vitae possimus mollitia veritatis aut? Quo debitis aspernatur vel similique error ullam perspiciatis placeat aut amet. Ullam eius pariatur laborum blanditiis.
                    </div>

                    {/* footer */}
                    <div>Footer</div>
                </div>
            </div>
        </>
    )
}