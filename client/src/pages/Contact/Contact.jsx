import { Button, Card, Form, Input, Typography } from "antd";
import Banner from "../../components/Banner/Banner";
import { MailFilled, PhoneFilled } from '@ant-design/icons';

const { Title } = Typography
const { Item } = Form
const { TextArea } = Input

export default function Contact() {
    return (
        <>
            <Banner title='CONTACT US' />
            <main className="bru-container max-w-screen-lg py-8 grid md:grid-cols-2 gap-8">
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
                    <div className="mt-4 flex flex-col gap-4">
                        <div className="border border-solid border-gray-300 flex items-center rounded-lg gap-4 overflow-hidden">
                            <div className="bg-blue-500 w-12 text-2xl flex flex-col items-center justify-center h-12 text-white">
                                <PhoneFilled />
                            </div>
                            <div className="font-semibold text-lg"> (02) 88015025 </div>
                        </div>

                        <div className="border border-solid border-gray-300 flex items-center rounded-lg gap-4 overflow-hidden">
                            <div className="bg-blue-500 w-12 text-2xl flex flex-col items-center justify-center h-12 text-white">
                                <MailFilled />
                            </div>
                            <div className="font-semibold text-lg">info@brucgt.com</div>
                        </div>

                        <div className="font-semibold text-lg text-gray-700">Open hours: 8:00-5:00 Monday to Satuday</div>
                    </div>
                </Card>
            </main>
        </>
    )
}