import { Button, Card, Divider, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const { Title } = Typography
const { Item } = Form

export default function Login() {
    return (
        <>
            <Banner title='Please Login Below'/>
            <main className="bru-container mt-4">
                <Card className="max-w-md mx-auto">
                    <Title level={4}>Login to your account</Title>
                    <Divider />
                    <Form layout="vertical">
                        <Item label='Email' className="mb-4">
                            <Input size="large"/>
                        </Item>
                        <Item label='Password' className="mb-4">
                            <Input type='password' size="large"/>
                        </Item>

                        <div className="flex justify-between">
                            <Link to='/forgot-password'>Forgot Password?</Link>
                            <Button type="primary" htmlType="submit" size='large' className='rounded float-right'>Submit</Button>
                        </div>
                    </Form>
                </Card>                
            </main>
        </>
    )
}
