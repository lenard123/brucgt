import { createCategory } from "@/apis/categoryApi";
import { AdminContainer, AdminHeader, FormItem, UploadButton } from "@/components";
import useCategories from "@/queries/useCategories";
import { getValidationErrors, showSuccessMessage } from "@/utils";
import { Button, Form, Input, Switch, Upload, } from "antd";
import { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";

export default function CreateCategory() {

    const navigate = useNavigate()
    const { pushCategory } = useCategories()
    const { mutate, isLoading, error } = useMutation(createCategory, {
        onSuccess(category) {
            showSuccessMessage('Category added Successfully')
            pushCategory(category)
            navigate('../categories')
        }
    })

    const validationErrors = getValidationErrors(error)

    const handleSubmit = function ({name, is_featured}, image) {
        const formData = new FormData()
        formData.append('name', name || '')
        formData.append('is_featured', is_featured ? 1 : 0)
        if (image)
            formData.append('image', image)
        mutate(formData)
    }

    const [file, setFile] = useState(null)

    const handleFileChanged = ({ file, fileList}) => {
        if (fileList.length === 0) setFile(null)
        else setFile(file)
    }

    return (
        <AdminContainer>

            <AdminHeader title='Add New Category'>
                <Link to="../categories">
                    <Button className="rounded">Back to Category List</Button>
                </Link>
            </AdminHeader>

            <div className="mt-6 bg-white shadow rounded">
                <div className="p-4 border-b border-gray-200">
                    <span className="font-semibold text-lg text-gray-800">Category Information</span>
                </div>
                <div className="p-4 max-w-screen-sm mx-auto">
                    <Form
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        size='large'
                        onFinish={(data) => handleSubmit(data, file)}
                    >
                        <FormItem required error={validationErrors} name='name' label='Product Category Title'>
                            <Input />
                        </FormItem>
                        <Form.Item label='Banner'>
                            <Upload 
                                accept='image/*'
                                beforeUpload={() => false}
                                maxCount={1}
                                listType='picture'
                                className="block"
                                onChange={handleFileChanged}
                                >
                                <UploadButton>{file === null ? 'Choose Image' : '1 Image selected'}</UploadButton>
                            </Upload>
                        </Form.Item>
                        <Form.Item name='is_featured' label='Featured' valuePropName="checked">
                            <Switch />
                        </Form.Item>

                        <div className="flex justify-end">
                            <Button loading={isLoading} className="rounded" type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>

        </AdminContainer>
    )
}