import Marquee from "react-fast-marquee";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import logo from '@/assets/logo.png';

export default function LandingPage()
{
    return (
        <>
            <div className="bg-black text-white text-[20px]">
                <Marquee gradient={false}>
                    WELCOME! AVAIL OUR BEST PROMOS, UNLIMITED VOUCHERS AND MORE. SO WHAT ARE YOU WAITING FOR. <span className="text-red-500">SHOP NOW!!!!</span>
                </Marquee>
            </div>

            <nav className="bg-emerald-300  flex h-16 px-4 sticky top-0">
                <div className="container max-w-screen-xl mx-auto self-center flex justify-between gap-4">

                    <div className="flex gap-4">
                        <Link to='/' className="flex items-center gap-1">
                            <img className="h-8 w-8" src={logo} />
                            <span className="font-semibold text-3xl">BRUCGT</span>
                        </Link>

                        <div className="hidden sm:flex flex-grow justify-center gap-6 items-center font-light text-lg">
                            <Link to='/'>Home</Link>
                            <Link to='/shop'>Shop</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/contact'>Contact Us</Link>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <a>
                            <ShoppingCartOutlined className="text-2xl leading-none" />
                        </a>
                    </div>

                </div>
            </nav>

            <div className="h-[200vh]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos aut sequi quia, fugiat mollitia eveniet voluptates excepturi voluptatum rerum ad doloremque id, amet eius tempore iusto, aspernatur animi fuga.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos aut sequi quia, fugiat mollitia eveniet voluptates excepturi voluptatum rerum ad doloremque id, amet eius tempore iusto, aspernatur animi fuga.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos aut sequi quia, fugiat mollitia eveniet voluptates excepturi voluptatum rerum ad doloremque id, amet eius tempore iusto, aspernatur animi fuga.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos aut sequi quia, fugiat mollitia eveniet voluptates excepturi voluptatum rerum ad doloremque id, amet eius tempore iusto, aspernatur animi fuga.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos aut sequi quia, fugiat mollitia eveniet voluptates excepturi voluptatum rerum ad doloremque id, amet eius tempore iusto, aspernatur animi fuga.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos aut sequi quia, fugiat mollitia eveniet voluptates excepturi voluptatum rerum ad doloremque id, amet eius tempore iusto, aspernatur animi fuga.
            </div>
        </>
    )
}