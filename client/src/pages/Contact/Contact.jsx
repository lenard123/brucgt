import { Button, Card, Form, Input, Typography } from "antd";
import Banner from "../../components/Banner/Banner";

const { Title } = Typography
const { Item } = Form
const { TextArea } = Input

export default function Contact() {
    return (
        <>
            <Banner title='CONTACT US' />
            <main className="bru-container max-w-screen-lg py-8 grid grid-cols-2 gap-8">
                <Card title={<Title level={4}>Get In Touch With Us!</Title>}>
                    <p>Fill out the form below for any inquiries. </p>

                    <Form layout='vertical'>
                        <Item label='Name' className="mb-4">
                            <Input 
                                size='large'
                                className='rounded'
                            />
                        </Item>

                        <Item label='Email' className="mb-4">
                            <Input 
                                type='email'
                                size='large'
                                className='rounded'
                            />
                        </Item>

                        <Item label='Message' className="mb-4">
                            <TextArea className="rounded"/>
                        </Item>

                        <Button type="primary" htmlType="submit" size='large' className='rounded float-right'>Submit</Button>
                    </Form>

                </Card>
                <Card title={<Title level={4}>Contact Us</Title>}>
                    <p>There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you the most.</p>
                </Card>
            </main>
        </>
    )
}