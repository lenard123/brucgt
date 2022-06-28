import Marquee from "react-fast-marquee";
import { FacebookFilled, InstagramFilled, MenuOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import logo from '@/assets/logo.png';
import { Button, Carousel, Image, Input, Typography } from 'antd';
import { useMemo, useState } from "react";

export default function LandingPage() {

    const [previewVisible, setPreviewVisible] = useState(false)
    const [currentPreview, setCurrentPreview] = useState()
    const images = [3, 5, 6, 1].map((i) => `/images/banner${i}.png`)
    const products = [
        {
            thumbnail: 'https://brucgt.com/admin_area/product_images/IMG20220409182331-removebg-preview.png',
            name: 'PIQUE POLO - PINK POLO SHIRT (PREMIUM WEAR)',
            price: 330
        },
        {
            thumbnail: 'https://brucgt.com/admin_area/product_images/IMG20220409173228-removebg-preview.png',
            name: 'SPORT WEAR - BLUE TSHIRT(DRIFIT)',
            price: 245
        },
        {
            thumbnail: 'https://brucgt.com/admin_area/product_images/IMG20220409181812-removebg-preview.png',
            name: 'SPORT WEAR - GREEN TSHIRT(DRIFIT)',
            price: 245
        },
        {
            thumbnail: 'https://brucgt.com/admin_area/product_images/IMG20220409175338-removebg-preview.png',
            name: 'BASIC WEAR - RED TSHIRT',
            price: 210
        },
        {
            thumbnail: 'https://brucgt.com/admin_area/product_images/IMG20220409173711-removebg-preview.png',
            name: 'BASIC WEAR - YELLOW TSHIRT (JERSEY)',
            price: 210
        }
    ]


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
            <nav className="bg-white p-2 px-4 shadow sticky top-0 z-10 min-h-[4rem] flex items-center">
                <div className="container m-auto max-w-screen-xl">
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

            <section className="p-4 container mx-auto max-w-screen-xl">
                <Typography.Title>Featured Products</Typography.Title>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1px] bg-slate-300">
                    {products.map((product, i) => (
                        <div key={product.name} className="bg-white hover:shadow-2xl hover:relative hover:z-[5] flex flex-col">
                            <img height="300px" width="100%" src={product.thumbnail} />
                            <div className="flex flex-col p-4 gap-4 flex-grow">
                                <div className="font-light flex-grow">{product.name}</div>
                                <div className="flex justify-between">
                                    <div>₱{product.price}.00</div>
                                    <div>
                                        <Button type="primary" size="small" icon={<ShoppingCartOutlined />}>Add to Cart</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
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
                <div className="text-center mt-8">All Rights Reserved 2020 BRU Consumer Goods Trading</div>
            </footer>


        </>
    )
}