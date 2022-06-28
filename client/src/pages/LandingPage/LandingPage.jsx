import { Carousel, Image, Typography } from 'antd';
import ProductCard from '../../components/ProductCard/ProductCard';

export default function LandingPage() {

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
            <section>
                <Carousel>
                    {images.map((url, i) => (
                        <div key={i}>
                            <Image
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
                        <ProductCard product={product} key={i} />
                    ))}
                </div>

            </section>

        </>
    )
}