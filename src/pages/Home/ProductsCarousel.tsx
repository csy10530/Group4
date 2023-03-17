import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import perfumeSampler from "../../assets/products/perfume_sampler.webp";
import lancome from "../../assets/products/lancome.webp";
import mac from "../../assets/products/mac.webp";
import michaelKorsWomen from "../../assets/products/michael_kors_women_monique_knit.webp";
import polo from "../../assets/products/polo.webp";
import laurenRalphFaux from "../../assets/products/lauren_ralph_women's_faux.webp";
import createdForMacys from "../../assets/products/created_for_macys_sampler_set.webp";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
}

const ProductsCarousel:React.FC<{}> = () => {
    return (
        <Carousel
            responsive={responsive}
            slidesToSlide={2}
        >
            <div className="productCard">
                <div>
                    <img src={perfumeSampler}/>
                </div>
                <div className="productDetail">
                    <a className="productInfo">
                        <div className="productBrand">
                            Created For Macy's
                        </div>
                        <div className="productDescription">
                            <strong>NEW!</strong>
                            20-Pc. Macy's Favorites Cologne Sampler Set, Created for Macy's
                        </div>
                    </a>
                    <div className="price">
                        $25.00
                    </div>
                </div>
            </div>

            <div className="productCard">
                <div>
                    <img src={lancome}/>
                </div>
                <div className="productDetail">
                    <a className="productInfo">
                        <div className="productBrand">
                            Lancome
                        </div>
                        <div className="productDescription">
                            11 Pc. Lancôme Beauty Box Featuring 8 Full Size Favorites for $75 with any Lancôme Purchase of $42. A $542 Value!
                        </div>
                    </a>
                    <div className="price">
                        $48.50
                    </div>
                </div>
            </div>

            <div className="productCard">
                <div>
                    <img src={mac}/>
                </div>
                <div className="productDetail">
                    <a className="productInfo">
                        <div className="productBrand">
                            MAC
                        </div>
                        <div className="productDescription">
                            <strong>NEW!</strong>
                            3-Pc. Three Cheers! Lipstick Set, Created for Macy's
                        </div>
                    </a>
                    <div className="price">
                        $25.00
                    </div>
                </div>
            </div>

            <div className="productCard">
                <div>
                    <img src={createdForMacys}/>
                </div>
                <div className="productDetail">
                    <a className="productInfo">
                        <div className="productBrand">
                            Created For Macy's
                        </div>
                        <div className="productDescription">
                            <strong>NEW!</strong>
                            20-Pc. Macy's Favorites Perfume Sampler Set, Created for Macy's
                        </div>
                    </a>
                    <div className="price">
                        $25.00
                    </div>
                </div>
            </div>

            <div className="productCard">
                <div>
                    <img src={laurenRalphFaux}/>
                </div>
                <div className="productDetail">
                    <a className="productInfo">
                        <div className="productBrand">
                            Lauren Ralph Lauren
                        </div>
                        <div className="productDescription">
                            Women's Faux-Suede-Trim Quilted Coat, Created for Macy's
                        </div>
                    </a>
                    <div className="price">
                        $113.99
                    </div>
                </div>
            </div>

            <div className="productCard">
                <div>
                    <img src={polo}/>
                </div>
                <div className="productDetail">
                    <a className="productInfo">
                        <div className="productBrand">
                            Polo Ralph Lauren
                        </div>
                        <div className="productDescription">
                            Men's Waffle Knit Thermal
                        </div>
                    </a>
                    <div className="price">
                        $29.99
                    </div>
                </div>
            </div>

            <div className="productCard">
                <div>
                    <img src={michaelKorsWomen}/>
                </div>
                <div className="productDetail">
                    <a className="productInfo">
                        <div className="productBrand">
                            Michael Kors
                        </div>
                        <div className="productDescription">
                            Women's Monique Knit Trainer Lace-Up Retro Running Sneakers
                        </div>
                    </a>
                    <div className="price">
                        $74.25
                    </div>
                </div>
            </div>
        </Carousel>
    )
}

export default ProductsCarousel;