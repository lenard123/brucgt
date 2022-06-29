import { FacebookFilled, InstagramFilled } from "@ant-design/icons";


export default function Footer() {
    return (
        <footer className="bg-primary py-4 mt-4 px-4 text-slate-200">
            <div className="max-w-screen-xl mx-auto flex justify-evenly gap-8">
                <div>
                    <div className="font-light text-4xl">BRUCGT</div>
                    <div>BRU Consumer Goods Trading</div>
                </div>

                <div>
                    <div className="font-bold">SITE LINKS</div>
                    <div className="mt-1 flex flex-col">
                        <a>About Us</a>
                        <a>Terms and Condition</a>
                    </div>
                </div>

                <div>
                    <div className="font-bold">FOLLOW US</div>
                    <div className="mt-1 flex flex-col">
                        <a className="flex items-center gap-1">
                            <FacebookFilled />
                            Facebook
                        </a>
                        <a className="flex items-center gap-1">
                            <InstagramFilled />
                            Instagram
                        </a>
                    </div>
                </div>

            </div>
            <div className="text-center mt-8">All Rights Reserved 2022 BRU Consumer Goods Trading</div>
        </footer>
    )
}