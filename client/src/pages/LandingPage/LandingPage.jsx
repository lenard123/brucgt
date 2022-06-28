import Marquee from "react-fast-marquee";
import { FacebookFilled, InstagramFilled, MenuOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import logo from '@/assets/logo.png';
import { Button, Carousel, Image, Input } from 'antd';
import { useMemo, useState } from "react";

export default function LandingPage() {

    const [previewVisible, setPreviewVisible] = useState(false)
    const [currentPreview, setCurrentPreview] = useState()
    const images = [3, 5, 6, 1].map((i) => `https://brucgt.com/images/banner${i}.png`)


    return (
        <>
            <header className="bg-gray-900 text-white text-sm font-light p-2">
                <div className="container mx-auto max-w-screen-xl flex">
                    {/* Left */}
                    <div className="flex gap-4">
                        <a href="tel:(02) 88015025" className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span>(02) 88015025</span>
                        </a>

                        <a href="mailto:info@brucgt.com" className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span>info@brucgt.com</span>
                        </a>

                    </div>
                    {/* Right */}
                    <div className="flex gap-4">

                    </div>
                </div>
            </header>
            <nav className="bg-white p-2 px-4 shadow sticky top-0 z-10">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="flex items-center justify-start md:justify-between gap-4">

                        <a className="xl:hidden"><MenuOutlined /></a>

                        <a className="flex flex-col flex-grow xl:flex-grow-0 flex-shrink-0">
                            <div className="flex items-center gap-2">
                                <img className="h-6 w-6" src={logo} />
                                <span className="text-2xl font-bold">BRUCGT</span>
                            </div>
                            <span className="hidden md:block text-primary font-semibold">BRU Consumer Goods Trading</span>
                        </a>
                        <div className="hidden xl:flex justify-center text-lg  font-light gap-4">
                            <a href="#">Home</a>
                            <a href="#">Categories</a>
                            <a href="#">Shop</a>
                            <a href="#">About</a>
                            <a href="#">Contact Us</a>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                            <Input.Search
                                className="rounded-lg"
                                placeholder="Search Products"
                                onSearch={() => { }}
                                enterButton
                                size="large"
                            />

                            <div className="flex flex-shrink-0 gap-2 items-center">
                                <Button icon={<ShoppingCartOutlined />} shape='circle' size='large' />
                                <div className="flex flex-col text-xs">
                                    <span className="font-semibold">My Cart</span>
                                    <span>0 items - 0.00PHP</span>
                                </div>
                            </div>

                        </div>

                        <div className="flex md:hidden text-xl gap-4 text-slate-700">
                            <a><SearchOutlined /></a>
                            <a><ShoppingCartOutlined /></a>
                        </div>
                    </div>

                </div>
            </nav>

            <section>
                <Carousel>
                    {images.map((url, i) => (
                        <div>
                            <Image
                                key={i}
                                className="object-cover w-screen h-screen"
                                style={{ height: 'min(75vw, 75vh)' }}
                                src={url}
                                preview={false}
                            />
                        </div>
                    ))}
                </Carousel>
            </section>

            <div className="bg-white p-4 -mt-1">
                <div className="max-w-screen-xl flex flex-col sm:flex-row text-left sm:text-center text-xs gap-6 justify-around">
                    <div className="flex flex-row sm:flex-col items-center gap-4">
                        <img className="w-[70px] h-auto" src="/images/deliver.png" />
                        <div className="flex flex-col flex-grow">
                            <span className="flex-grow font-bold text-primary">FASTER DELIVERY GUARANTEE.</span>
                            <span className="">Your order will be delivered soon as you order.</span>
                        </div>
                    </div>

                    <div className="flex flex-row sm:flex-col items-center gap-4">
                        <img className="w-[70px] h-auto" src="/images/quality.png" />
                        <div className="flex flex-col flex-grow">
                            <span className="flex-grow font-bold text-primary">TRUSTED BRAND FOR YEARS. </span>
                            <span className="">The product brand become a trusted for years.</span>
                        </div>
                    </div>

                    <div className="flex flex-row sm:flex-col items-center gap-4">
                        <img className="w-[70px] h-auto" src="/images/brand.png" />
                        <div className="flex flex-col flex-grow">
                            <span className="flex-grow font-bold text-primary">PROVIDE THE BEST QUALITY PRODUCT.</span>
                            <span className="">The best quality product are here. The best quality you expect. </span>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
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
                <video className="page-height object-cover" xsrc="https://brucgt.com/images/vid15.mp4" width="100%" loop autoPlay muted />

                <div className="absolute inset-0 text-white py-8 px-4 sm:text-2xl flex flex-col justify-center items-center">
                    <div>BRU Consumer Goods Trading</div>
                    <div className="font-bold text-center">provides best credentials for wants, needs, and supplying demand into one place that gives consumer satisfaction</div>
                </div>

            </section>

            <section className="page-height">
                <Carousel>
                    {images.map((url, i) => (
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