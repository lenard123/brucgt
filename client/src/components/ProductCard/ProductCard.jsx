import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";


export default function ProductCard({ product }) {
    return (
        <div className="bg-white hover:shadow-2xl hover:relative hover:z-[5] flex flex-col">
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
    )
}