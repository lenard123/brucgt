import FormItem from "@/components/FormItem/FormItem";
import { Button, Card, Divider, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import Banner from "@/components/Banner/Banner";
import loginRules from "./loginRules";
import useLoginHandler from "./useLoginHandler";

const { Title } = Typography

export default function Login() {

    const { handleSubmit, isLoading, validationErrors } = useLoginHandler()

    return (
        <>
            <Banner title='Please Login Below'/>
            <main className="bru-container mt-4">
                <Card className="max-w-md mx-auto">
                    <Title level={4}>Login to your account</Title>
                    <Divider />
                    <Form onFinish={handleSubmit} layout="vertical">
                        <FormItem 
                            name='email' 
                            label='Email' 
                            className="mb-4"
                            rules={loginRules.email}
                            error={validationErrors}
                            >
                            <Input size="large"/>
                        </FormItem>

                        <FormItem 
                            name='password' 
                            label='Password' 
                            className="mb-4"
                            rules={loginRules.password}
                            error={validationErrors}
                            >
                            <Input type='password' size="large"/>
                        </FormItem>

                        <div className="flex justify-between">
                            <Link to='/forgot-password'>Forgot Password?</Link>
                            <Button loading={isLoading} type="primary" htmlType="submit" size='large' className='rounded float-right'>Submit</Button>
                        </div>
                    </Form>
                </Card>                

                <div className="text-center mt-2">Don't have an account? Register <Link to='/register'>here</Link></div>

            </main>
        </>
    )
}
