import Marquee from "react-fast-marquee";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import logo from '@/assets/logo.png';
import { Carousel, Image } from 'antd';
import { useMemo, useState } from "react";

export default function LandingPage() {

    const [previewVisible, setPreviewVisible] = useState(false)
    const [currentPreview, setCurrentPreview] = useState()
    const images = Array(6).fill(null).map((_, i) => `https://brucgt.com/images/banner${i+1}.png`)

    return (
        <>
            <div className="bg-black text-white text-[20px]">
                <Marquee gradient={false}>
                    WELCOME! AVAIL OUR BEST PROMOS, UNLIMITED VOUCHERS AND MORE. SO WHAT ARE YOU WAITING FOR. <span className="text-red-500">SHOP NOW!!!!</span>
                </Marquee>
            </div>

            <nav className="bg-emerald-300  flex h-16 px-4 sticky top-0 z-10 shadow-md">
                <div className="container max-w-screen-xl mx-auto self-center flex justify-between gap-4">

                    <div className="flex gap-4">
                        <Link to='/' className="flex items-center gap-1  text-blue-900">
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

            <section>
                <video data-src="https://brucgt.com/images/home.mp4" width="100%" loop autoPlay muted />
            </section>

            <section className="relative page-height">
                <video  className="page-height object-cover" data-src="https://brucgt.com/images/vid15.mp4" width="100%" loop autoPlay muted />

                <div className="absolute inset-0 text-white py-8 px-4 sm:text-2xl flex flex-col justify-center items-center">
                    <div>BRU Consumer Goods Trading</div>
                    <div className="font-bold text-center">provides best credentials for wants, needs, and supplying demand into one place that gives consumer satisfaction</div>
                </div>

            </section>

            <section className="page-height">
                <Carousel>
                    {images.map( (url, i) => (
                        <div>
                            <Image
                                key={i}
                                className="page-height object-cover w-screen" 
                                src={url}
                                preview={{ visible: false }}
                                onClick={() => {
                                    setPreviewVisible(true)
                                    setCurrentPreview(i)
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
 
                <div className='hidden'>
                    <Image.PreviewGroup preview={{ current: currentPreview, visible: previewVisible, onVisibleChange: vis => setPreviewVisible(vis) }}>
                        {
                            images.map(image => (
                                <Image src={image} key={image} />
                            ))
                        }
                    </Image.PreviewGroup>
                </div>
 
            </section>

        </>
    )
}