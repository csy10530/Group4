import React, {useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../app/hooks"
import {logout, selectCurrentUser, selectStatus} from "./homeSlice";
import {CssBaseline, Typography} from "@mui/material";
import NavigationBar from "../../components/Navigation/Navigation";
import BannerCarousel from "../../components/BannerCarousel/BannerCarousel";
import "./Home.scss";

import dealsBanner from "../../assets/deals_banner_1482716.webp";
import womenCoats from "../../assets/women's_coats.webp";
import womenBoots from "../../assets/women's_boots_&_shoes.webp";
import designerSuits from "../../assets/designer_suits_&_blazers.webp";
import luggage from "../../assets/luggage_from_samsonite.webp";
import fineJewelry from "../../assets/fine_jewelry.webp";
import handbags from "../../assets/handbags_&_wallets.webp";
import menCoats from "../../assets/men's_coats_&_jackets.webp";
import winterBlankets from "../../assets/winter_blankets.webp";
import blackFridayBanner from "../../assets/black_friday_banner.webp";
import ralphLauren from "../../assets/ralph_lauren.webp";
import ProductsCarousel from "./ProductsCarousel";
import Footer from "./Footer";
import {userLogout} from "../Login/loginSlice";

import ShoppingCart from "../ShoppingCart/ShoppingCart";
import {selectNewProducts} from "../UploadProduct/uploadProductSlice";
import NewProductCarousel from "../../components/NewProductCarousel/NewProductCarousel";

const Home: React.FC<{}> = () => {
    const [cartOpen, setCartOpen] = useState(false);

    const currentUser = useAppSelector(selectCurrentUser);
    const loginStatus = useAppSelector(selectStatus);
    const newProducts = useAppSelector(selectNewProducts);

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

    return (
        <React.Fragment>
            <CssBaseline/>
            <NavigationBar loginStatus={loginStatus} currentUser={currentUser} handleLogout={handleLogout}
                           handleCartOpen={handleCartOpen}/>

            <ShoppingCart cartOpen={cartOpen} handleCartClose={handleCartClose}/>

            <BannerCarousel/>

            {newProducts.length > 0 && loginStatus &&
                <div className={"newProductsContainer"}>
                    <Typography variant={"h4"}>
                        Your new products
                    </Typography>


                    <NewProductCarousel />
                </div>
            }

            <div id="dealsBannerContainer">
                <a>
                    <div>
                        <img src={dealsBanner}/>
                    </div>
                </a>
            </div>

            <div className="discountProductContainer">
                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={womenCoats}/>
                        </div>
                    </a>
                </div>

                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={womenBoots}/>
                        </div>
                    </a>
                </div>

                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={designerSuits}/>
                        </div>
                    </a>
                </div>

                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={luggage}/>
                        </div>
                    </a>
                </div>
            </div>

            <div className="discountProductContainer">
                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={fineJewelry}/>
                        </div>
                    </a>
                </div>
                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={menCoats}/>
                        </div>
                    </a>
                </div>
                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={handbags}/>
                        </div>
                    </a>
                </div>
                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={winterBlankets}/>
                        </div>
                    </a>
                </div>
            </div>

            <div id="blackFridayContainer">
                <a>
                    <div>
                        <img src={blackFridayBanner}/>
                    </div>
                </a>
            </div>

            <div id="ralphLaurenContainer">
                <a>
                    <div>
                        <img src={ralphLauren}/>
                    </div>
                </a>
            </div>

            <div id="selectedForYou">
                <div>
                    <h2>Selected for You</h2>
                </div>

                <ProductsCarousel/>
            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default Home;