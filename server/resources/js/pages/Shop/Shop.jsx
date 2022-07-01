import { Cascader, Input, Pagination, Select } from "antd";
import Banner from "../../components/Banner/Banner";
import ProductCard from "../../components/ProductCard/ProductCard";

const { Option } = Select

const SelectCategory = function() {
    return (
        <Select style={{ minWidth: '120px' }} defaultValue={-1}>
            <Option value={-1}>All Categories</Option>
            <Option value={1}>T Shirt</Option>
            <Option value={2}>Polo Shirt</Option>
            <Option value={3}>Wet Shirt</Option>
            <Option value={4}>Clothing</Option>
            <Option value={5}>Bag</Option>
        </Select>
    )
}

export default function Shop() {
    const _products = [
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
    const products = [..._products, ..._products]

    return (
        <>
            <Banner title='Shop' />
            <main className="bru-container py-8">
                <div className="max-w-screen-lg mx-auto">
                    <Input.Search
                        size="large"
                        placeholder="Search products..."
                        addonBefore={<SelectCategory />}
                    />
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1px] bg-slate-300 mt-8">
                    {products.map((product, i) => (
                        <ProductCard product={product} key={i} />
                    ))}
                </div>

                <div className="py-8 flex justify-center">
                    <Pagination size="small" total={50} />
                </div>

            </main>
        </>
    )
}