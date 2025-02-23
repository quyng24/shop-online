import { useEffect, useState } from "react";
import "./Product.scss";
import ProductItem from "./ProductItem";

function Product() {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
        .then(res => res.json())
        .then(data => setProduct(data.products))
    }, []);
    return (
        <>
            <div className="product container">
                {products.map(item => (
                    <ProductItem item={item} key={item.id} />
                ))}
            </div>
        </>
    )
}
export default Product;