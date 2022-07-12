import { AdminContainer, AdminHeader, FormItem } from "@/components";
import useAttributes from "@/queries/useAttributes";
import { Table } from "antd";
import { Link } from "react-router-dom";
import CreateAttribute from "./CreateAttribute";


const { Column } = Table

export default function Attributes() {

    const { isLoading, data } = useAttributes()

    return (
        <AdminContainer>
            <AdminHeader title='Attributes'></AdminHeader>

            <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-white rounded shadow">
                    <div className="p-4 border-b border-gray-200">
                        <span className="font-semibold text-gray-800">All Attributes</span>
                    </div>
                    <div className="p-4">

                        <Table loading={isLoading} dataSource={data}>
                            <Column width={150} title='Name' dataIndex='name' />
                            <Column 
                                title='Values' 
                                render={(_, record) => (
                                    <span>No Values</span>
                                )}
                            />
                            <Column
                                width={1}
                                title='Actions'
                                render={(_, record) => (
                                    <div className="flex-shrink-0 flex gap-2">

                                        <Link to={`/admin_area/attributes/${record.id}`} className="circle-icon-btn circle-icon-btn-blue">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </Link>

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

                <CreateAttribute />

            </div>

        </AdminContainer>
    )
}