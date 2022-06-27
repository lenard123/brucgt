import Marquee from "react-fast-marquee";

export default function LandingPage()
{
    return (
        <div>
            <div className="bg-black text-white text-[20px]">
                <Marquee gradient={false}>
                    WELCOME! AVAIL OUR BEST PROMOS, UNLIMITED VOUCHERS AND MORE. SO WHAT ARE YOU WAITING FOR. <span className="text-red-500">SHOP NOW!!!!</span>
                </Marquee>
            </div>
        </div>
    )
}