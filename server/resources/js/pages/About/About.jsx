import { Card, Divider, Typography } from "antd";
import Banner from "../../components/Banner/Banner";


export default function About() {
    return (
        <main className="flex flex-col gap-4">
            <Banner title='ABOUT US' />

            <div className="bru-container max-w-screen-lg text-center">
                <Card className="shadow">
                    <img className="w-16 h-16" src="/images/logo.png" />
                    <Typography.Title level={3}>Who are we?</Typography.Title>

                    <p className="text-lg whitespace-pre-wrap mt-4">
                        "BRU Consumer Goods Trading provides best credentials for wants,<br />
                        needs, and supplying demand into one place that gives consumer<br />
                        satisfaction."
                    </p>
                </Card>
            </div>

            <div className="bru-container max-w-screen-lg text-center grid sm:grid-cols-2 gap-4">
                <Card className="flex-shrink-0 shadow">
                    <Typography.Title level={3}>Mission</Typography.Title>
                    <p className="text-lg">"To be your trusted partner by giving friendly price without compromising the satisfaction, quality of our product, and the core values of our company to our customer. Conveniency is our priority." </p>
                </Card>
                <Card className="shadow">
                    <Typography.Title level={3}>Vision</Typography.Title>
                    <p className="text-lg">"To be the leading international company who serves its purpose along with the best credentials that will earn the loyalty of customers"</p>
                </Card>
            </div>

            <div className="bru-container max-w-screen-lg text-center">
                <Card className="shadow">
                    <Typography.Title level={3}>Core Values</Typography.Title>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
                        <div>
                            <img className="w-1/2 h-auto" src="/images/trustworthy.jpg" />
                            <div className="mt-4 text-lg font-semibold">TRUSTWORTHINESS</div>
                        </div>
                        <div>
                            <img className="w-1/2 h-auto" src="/images/response.png" />
                            <div className="mt-4 text-lg font-semibold">RESPONSIBLE</div>
                        </div>
                        <div>
                            <img className="w-1/2 h-auto" src="/images/integrity.png" />
                            <div className="mt-4 text-lg font-semibold">INTEGRITY</div>
                        </div>
                        <div>
                            <img className="w-1/2 h-auto" src="/images/team.png" />
                            <div className="mt-4 text-lg font-semibold">TEAMWORK</div>
                        </div>
                    </div>
                </Card>
            </div>

        </main>
    )
}