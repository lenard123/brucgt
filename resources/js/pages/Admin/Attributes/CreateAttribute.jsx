import { createAttribute } from "@/apis/attributeApi";
import { FormItem } from "@/components";
import { getValidationErrors, showSuccessMessage } from "@/utils";
import { Button, Form, Input } from "antd";
import { useMutation } from "react-query";


export default function CreateAttribute() {

    const [form] = Form.useForm()
    const { isLoading, mutate, error } = useMutation(createAttribute, {
        onSuccess(data) {
            showSuccessMessage('Attribute Added Successfully')
            form.resetFields()
        }
    })

    const validationErrors = getValidationErrors(error)

    const handleSubmit = function (data) {
        mutate(data.name)
    }

    return (
        <div className="bg-white rounded shadow self-start">
            <div className="p-4 border-b border-gray-200">
                <span className="font-semibold text-gray-800">Add New Attribute</span>
            </div>
            <div className="p-4 py-6">
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <FormItem error={validationErrors} name='name' rules={[{ required: true }]} label='Name'>
                        <Input size='large' />
                    </FormItem>
                    <div className="flex justify-end">
                        <Button loading={isLoading} className="rounded" size="large" type="primary">Save</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}