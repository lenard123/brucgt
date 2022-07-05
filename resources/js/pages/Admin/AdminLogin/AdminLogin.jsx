import FormItem from "@/components/FormItem/FormItem";
import { Button, Form, Input, Typography } from "antd";
import { useState } from "react";
import rules from './adminLoginValidation'

const { Title } = Typography

export default function AdminLogin() {

    return (
        <div className="pt-20">
            <div className="bg-white min-w-[300px] max-w-[400px] mx-auto py-5 px-8 shadow">
                <Title level={2} className="text-center">Login</Title>
                <Form className="mt-4" layout="vertical">
                    <FormItem rules={rules.email} className="mb-4" name='email' label='Email'>
                        <Input type="email" size="large" />
                    </FormItem>
                    <FormItem rules={rules.password} className="mb-4" name='password' label='Password'>
                        <Input.Password size="large" />
                    </FormItem>

                    <Button className="mb-8" type="primary" size="large" block>Login</Button>

                </Form>
            </div>
        </div>
    )
}