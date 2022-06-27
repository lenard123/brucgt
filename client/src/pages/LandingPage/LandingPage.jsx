import Marquee from "react-fast-marquee";
import { FacebookFilled, InstagramFilled, ShoppingCartOutlined } from '@ant-design/icons';
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
                <video src="https://brucgt.com/images/home.mp4" width="100%" loop autoPlay muted />
            </section>

            <section className="relative page-height">
                <video  className="page-height object-cover" src="https://brucgt.com/images/vid15.mp4" width="100%" loop autoPlay muted />

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

            <section className="py-4">
                <div className="bg-white p-8 flex flex-col gap-4">
                    <h4 className="text-3xl text-center">BEST SELLER CATEGORIES</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3  gap-8 flex-grow">
                        <div className="bg-pink-500 bess-seller-category-card">
                            <img className="h-full w-full object-contain absolute inset-0" src="https://brucgt.com/images/IMG2.png" />
                            <span className="bess-seller-category-card-text">TSHIRT - RED</span>
                        </div>
                        <div className="bg-blue-500 bess-seller-category-card">
                            <img className="h-full w-full object-contain absolute inset-0" src="https://brucgt.com/images/IMG4.png" />
                            <span className="bess-seller-category-card-text">TSHIRT - BLACK</span>
                        </div>
                        <div className="bg-green-500 bess-seller-category-card">
                            <img className="h-full w-full object-contain absolute inset-0" src="https://brucgt.com/images/IMG3.png" />
                            <span className="bess-seller-category-card-text">POLO SHIRT - SKY BLUE</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="mt-8">
                <div className="bg-white p-4 pt-16">
                    <div className="max-w-screen-xl flex flex-col sm:flex-row text-center gap-6 justify-around">
                        <div className="flex flex-col items-center">
                            <img className="w-[70px] h-auto" src="/images/deliver.png" />
                            <span className="text-xs font-bold mt-4">FASTER DELIVERY GUARANTEE.</span>
                            <span className="text-xs mt-4">Your order will be delivered soon as you order.</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-[70px] h-auto" src="/images/quality.png" />
                            <span className="text-xs font-bold mt-4 flex-grow">TRUSTED BRAND FOR YEARS. </span>
                            <span clasName="text-xs mt-4">The product brand become a trusted for years.</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-[70px] h-auto" src="/images/brand.png" />
                            <span className="text-xs font-bold mt-4">PROVIDE THE BEST QUALITY PRODUCT.</span>
                            <span className="text-xs mt-4">The best quality product are here. The best quality you expect. </span>
                        </div>
                    </div>
                </div>
                <div className="bg-primary py-8 px-4">
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
                </div>
            </footer>

        </>
    )
}