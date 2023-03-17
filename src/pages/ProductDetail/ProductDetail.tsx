import React, {useState} from "react";
import NavigationBar from "../../components/Navigation/Navigation";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {logout, selectCurrentUser, selectStatus} from "../Home/homeSlice";
import {userLogout} from "../Login/loginSlice";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./ProductDetail.scss"

import {AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar} from "react-icons/ai";

import michael_kors from "../../assets/products/test/michael_kors.webp";
import estee_lauder_limited_edition from "../../assets/products/test/estee_lauder_limited_edition.webp";
import perfume_sampler from "../../assets/products/test/perfume_sampler.webp";
import polo from "../../assets/products/test/polo.webp";
import {addToCart} from "../ShoppingCart/shoppingCartSlice";
import ProductsCarousel from "../Home/ProductsCarousel";
import ShowcaseProduct from "./ShowcaseProduct";

const images = [michael_kors, estee_lauder_limited_edition, perfume_sampler, polo];

const ProductDetail: React.FC<{}> = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const currentUser = useAppSelector(selectCurrentUser);
    const loginStatus = useAppSelector(selectStatus);

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(userLogout("pending"));
    }

    const handleCartClose = () => {
        setCartOpen(false);
    }

    const handleCartOpen = () => {
        setCartOpen(true);
    }

    const minusQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div>
            <NavigationBar loginStatus={loginStatus} currentUser={currentUser} handleLogout={handleLogout}
                           handleCartOpen={handleCartOpen}/>
            <ShoppingCart cartOpen={cartOpen} handleCartClose={handleCartClose}/>

            <div className={"product-detail-container"}>
                <div>
                    <div className={"image-container"}>
                        <img className={"product-detail-image"} src={images[index]}/>
                    </div>

                    <div className={"small-images-container"}>
                        {images.map((image, i) => {
                            return (
                                <img
                                    className={i === index ? "small-image selected-image" : "small-image"}
                                    src={image}
                                    key={i}
                                    onMouseEnter={() => setIndex(i)}
                                />
                            )
                        })}
                    </div>
                </div>

                <div className={"product-detail-desc"}>
                    <h1>Product Name</h1>
                    <div className={"reviews"}>
                        <div>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar/>
                        </div>

                        <p>
                            (20)
                        </p>
                    </div>
                    <h4>Details: </h4>
                    <p>
                        This is product description This is product description This is product description
                        This is product description This is product description This is product description
                    </p>
                    <p className={"price"}>$100.00</p>
                    <div className={"quantity"}>
                        <h3>Quantity: </h3>
                        <p className={"quantity-desc"}>
                                <span className={"minus"} onClick={minusQuantity}>
                                    <AiOutlineMinus/>
                                </span>
                            <span className={"num"}>
                                    {quantity}
                                </span>
                            <span className={"plus"} onClick={() => setQuantity(quantity + 1)}>
                                    <AiOutlinePlus/>
                                </span>
                        </p>
                    </div>

                    <div className={"buttons"}>
                        <button type={"button"} className={"add-to-cart"} onClick={() => dispatch(addToCart({
                            name: "Product",
                            price: 100,
                            amount: quantity,
                            description: "Product Detail",
                            image: "polo.webp",
                        }))}
                        >
                            Add to Cart
                        </button>
                        <button type={"button"} className={"buy-now"}>
                            Buy Now
                        </button>
                    </div>
                </div>

            </div>
            <div className={"maylike-products-wrapper"}>
                <h2>You My Also Like</h2>
                <div className={"marquee"}>
                    <div className={"maylike-products-container track"}>
                        {images.map(image => {
                            return <ShowcaseProduct name={"product"} price={1} amount={1} image={image} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail