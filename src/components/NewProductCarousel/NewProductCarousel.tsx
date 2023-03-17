import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import {useAppSelector} from "../../app/hooks";
import {selectNewProducts} from "../../pages/UploadProduct/uploadProductSlice";
import ProductCard from "../ProductCard/ProductCard";

import "./NewProductsCarousel.scss"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
}

const NewProductCarousel: React.FC<{}> = () => {
    const newProducts = useAppSelector(selectNewProducts);

    return (
        <Carousel
            responsive={responsive}
            slidesToSlide={2}
            className={"newProductsCarousel"}
        >
            {
                newProducts.map(product => {
                    return <ProductCard product={product} />
                })
            }
        </Carousel>
    )
}

export default NewProductCarousel;