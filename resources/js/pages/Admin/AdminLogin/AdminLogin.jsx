import FormItem from "@/components/FormItem/FormItem";
import { useAdminLogin } from "@/services/Auth";
import { getValidationErrors } from "@/utils";
import { Button, Form, Input, Typography } from "antd";
import { useState } from "react";
import rules from './adminLoginValidation'

const { Title } = Typography

export default function AdminLogin() {

    const { mutate, isLoading, error } = useAdminLogin()

    const validationError = getValidationErrors(error)

    const handleSubmit = (data) => {
        mutate(data)
    }

    return (
        <div className="pt-20">
            <div className="bg-white min-w-[300px] max-w-[400px] mx-auto py-5 px-8 shadow">
                <Title level={2} className="text-center">Login</Title>
                <Form onFinish={handleSubmit} className="mt-4" layout="vertical">
                    <FormItem error={validationError} rules={rules.email} className="mb-4" name='email' label='Email'>
                        <Input type="email" size="large" />
                    </FormItem>
                    <FormItem  error={validationError} rules={rules.password} className="mb-4" name='password' label='Password'>
                        <Input.Password size="large" />
                    </FormItem>

                    <Button htmlType="submit" loading={isLoading} className="mb-8" type="primary" size="large" block>Login</Button>

                </Form>
            </div>
        </div>
    )
}