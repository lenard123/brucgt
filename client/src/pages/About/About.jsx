import { Card, Divider, Typography } from "antd";


export default function About()
{
    return (
        <main className="flex flex-col gap-4">
            <div 
                className="bg-cover bg-center text-center py-10"
                style={{backgroundImage: 'url(/images/banner-ave.jpg)'}}
                >
                <span className="text-white text-3xl font-semibold">ABOUT US</span>
            </div>

            <div className="bru-container max-w-screen-lg text-center">
                <Card className="shadow">
                    <img className="w-18 h-16" src="/images/logo.png" />
                    <Typography.Title level={3}>Who are we?</Typography.Title>

                    <p className="text-lg whitespace-pre-wrap mt-4">
                        BRU Consumer Goods Trading provides best credentials for wants,<br/>
                        needs, and supplying demand into one place that gives consumer<br/>
                        satisfaction.
                    </p>
                </Card>
            </div>

            <div className="bru-container max-w-screen-lg text-center flex gap-4">
                <Card className="flex-grow">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsam magni beatae? Voluptatibus atque vitae, beatae ipsam necessitatibus quisquam, esse voluptas explicabo at, id nihil vel consequatur facilis itaque rerum.
                </Card>
                <Divider type="vertical"/>
                <Card className="flex-grow">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsam magni beatae? Voluptatibus atque vitae, beatae ipsam necessitatibus quisquam, esse voluptas explicabo at, id nihil vel consequatur facilis itaque rerum.
                </Card>
            </div>

        </main>
    )
}