import { FormItem } from "@/components";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Switch } from "antd";


export default function CreateCategory() {
    return (
        <div className="sm:px-4">
            <div className="mt-6 bg-white max-w-screen-sm mx-auto shadow-lg rounded">
                <div className="p-4 border-b border-gray-200">
                    <span className="font-semibold text-lg text-gray-800">Category Information</span>
                </div>
                <div className="p-4">
                    <Form
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                    >
                        <FormItem name='name' label='Product Category Title'>
                            <Input />
                        </FormItem>
                        <FormItem name='image' label='Banner'>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </FormItem>
                        <Form.Item name='is_featured' label='Featured' valuePropName="checked">
                            <Switch />
                        </Form.Item>

                        <FormItem wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        </div>
    )
}