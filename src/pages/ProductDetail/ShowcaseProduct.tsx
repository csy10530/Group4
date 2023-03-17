import React from "react";
import {Product} from "../ShoppingCart/shoppingCartSlice";
import "./ProductDetail.scss";

const ShowcaseProduct: React.FC<Product> = (product) => {
    return (
        <div className={"product-card"}>
            <img
                className={"product-image"}
                src={product.image}
                width={250}
                height={250}
            />
            <p className={"product-name"}>{product.name}</p>
            <p className={"product-price"}>${product.price}</p>
        </div>
    )
}

export default ShowcaseProduct;