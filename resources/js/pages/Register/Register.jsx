import { Button, Card, Divider, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import FormItem from "../../components/FormItem/FormItem";
import rules from './registerValidation'
import useRegistrationHandler from "./useRegistrationHandler";

const { Title } = Typography
const { Password } = Input

export default function Register() {

    const { handleSubmit, isLoading, validationErrors } = useRegistrationHandler()

    return (
        <>
            <Banner title='Register' />

            <main className="bru-container mt-4">
                <Card className="max-w-md mx-auto">
                    <Title level={4}> Register A New Account </Title>
                    <Divider />
                    <Form scrollToFirstError layout="vertical" onFinish={handleSubmit}>
                        <FormItem
                            label='Fullname' 
                            className='mb-4'
                            name='name'
                            hasFeedback
                            rules={rules.name}
                            error={validationErrors}
                            >
                            <Input size="large" />
                        </FormItem>

                        <FormItem 
                            label='Email' 
                            className='mb-4'
                            name='email'
                            hasFeedback
                            rules={rules.email}
                            error={validationErrors}
                            >
                            <Input type='email' size="large" />
                        </FormItem>

                        <FormItem 
                            label='Password' 
                            className='mb-4'
                            name='password'
                            hasFeedback
                            rules={rules.password}
                            error={validationErrors}
                            >
                            <Password size="large" />
                        </FormItem>

                        <FormItem 
                            label='Confirm Password' 
                            className='mb-4'
                            name='password_confirmation'
                            hasFeedback
                            rules={rules.password_confirmation}
                            error={validationErrors}
                            >
                            <Password size="large" />
                        </FormItem>

                        <Button loading={isLoading} type="primary" htmlType="submit" size='large' className='rounded float-right'>Register</Button>

                    </Form>

                </Card>

                <div className="text-center mt-2">Already have an account? Click <Link to='/login'>here</Link></div>

            </main>

        </>
    )
}