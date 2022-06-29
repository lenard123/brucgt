import { Button, Card, Divider, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const { Title } = Typography
const { Item } = Form
const { Password } = Input

export default function Register() {
    return (
        <>
            <Banner title='Register' />


            <main className="bru-container mt-4">
                <Card className="max-w-md mx-auto">
                    <Title level={4}> Register A New Account </Title>
                    <Divider />

                    <Form layout="vertical">
                        <Item label='Fullname' className='mb-4'>
                            <Input size="large" />
                        </Item>

                        <Item label='Email' className='mb-4'>
                            <Input type='email' size="large" />
                        </Item>

                        <Item label='Password' className='mb-4'>
                            <Password size="large" />
                        </Item>

                        <Item label='Confirm Password' className='mb-4'>
                            <Password size="large" />
                        </Item>

                        <Button type="primary" htmlType="submit" size='large' className='rounded float-right'>Register</Button>

                    </Form>

                </Card>

                <div className="text-center mt-2">Already have an account? Click <Link to='/login'>here</Link></div>

            </main>

        </>
    )
}