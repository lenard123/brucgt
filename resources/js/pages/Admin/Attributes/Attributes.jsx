import { AdminContainer, AdminHeader, FormItem } from "@/components";
import { Button, Form, Input, Table } from "antd";


const { Column } = Table

export default function Attributes() {
    return (
        <AdminContainer>
            <AdminHeader title='Attributes'></AdminHeader>

            <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-white rounded shadow">
                    <div className="p-4 border-b border-gray-200">
                        <span className="font-semibold text-gray-800">All Attributes</span>
                    </div>
                    <div className="p-4">

                        <Table>
                            <Column title='Name'/>
                            <Column title='Values'/>
                            <Column title='Actions'/>
                        </Table>

                    </div>
                </div>

                <div className="bg-white rounded shadow self-start">
                    <div className="p-4 border-b border-gray-200">
                        <span className="font-semibold text-gray-800">Add New Attribute</span>
                    </div>
                    <div className="p-4 py-6">
                        <Form layout="vertical" >
                            <FormItem name='name' label='Name'>
                                <Input size='large'/>
                            </FormItem>
                            <div className="flex justify-end">
                                <Button className="rounded" size="large" type="primary">Save</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </AdminContainer>
    )
}