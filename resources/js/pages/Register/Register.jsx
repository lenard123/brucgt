import { Button, Card, Divider, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import rules from './registerValidation'
import useRegistrationHandler from "./useRegistrationHandler";

const { Title } = Typography
const { Item } = Form
const { Password } = Input

export default function Register() {

    const form = Form.useForm()
    const { handleSubmit, isLoading } = useRegistrationHandler()

    return (
        <>
            <Banner title='Register' />

            <main className="bru-container mt-4">
                <Card className="max-w-md mx-auto">
                    <Title level={4}> Register A New Account </Title>
                    <Divider />

                    <Form form={form} layout="vertical" onFinish={handleSubmit}>
                        <Item 
                            label='Fullname' 
                            className='mb-4'
                            name='name'
                            hasFeedback
                            rules={rules.name}
                            >
                            <Input size="large" />
                        </Item>

                        <Item 
                            label='Email' 
                            className='mb-4'
                            name='email'
                            hasFeedback
                            rules={rules.email}
                            >
                            <Input type='email' size="large" />
                        </Item>

                        <Item 
                            label='Password' 
                            className='mb-4'
                            name='password'
                            hasFeedback
                            rules={rules.password}
                            >
                            <Password size="large" />
                        </Item>

                        <Item 
                            label='Confirm Password' 
                            className='mb-4'
                            name='password_confirmation'
                            hasFeedback
                            rules={rules.password_confirmation}
                            >
                            <Password size="large" />
                        </Item>

                        <Button loading={isLoading} type="primary" htmlType="submit" size='large' className='rounded float-right'>Register</Button>

                    </Form>

                </Card>

                <div className="text-center mt-2">Already have an account? Click <Link to='/login'>here</Link></div>

            </main>

        </>
    )
}