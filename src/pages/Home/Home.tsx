import React from 'react';

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { logout, selectCurrentUser, selectStatus } from "./homeSlice";
import { CssBaseline } from "@mui/material";
import NavigationBar from "../../components/Navigation";
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

const Home: React.FC<{}> = () => {
    const currentUser = useAppSelector(selectCurrentUser);
    const loginStatus = useAppSelector(selectStatus);

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <NavigationBar loginStatus={loginStatus} currentUser={currentUser} handleLogout={handleLogout} />
            <BannerCarousel />

            <div id="dealsBannerContainer">
                <a>
                    <div>
                        <img src={dealsBanner} />
                    </div>
                </a>
            </div>

            <div className="discountProductContainer">
                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={womenCoats} />
                        </div>
                    </a>
                </div>

                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={womenBoots} />
                        </div>
                    </a>
                </div>

                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={designerSuits} />
                        </div>
                    </a>
                </div>

                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={luggage} />
                        </div>
                    </a>
                </div>
            </div>

            <div className="discountProductContainer">
                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={fineJewelry} />
                        </div>
                    </a>
                </div>
                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={menCoats} />
                        </div>
                    </a>
                </div>
                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={handbags} />
                        </div>
                    </a>
                </div>
                <div className="discountProductCard">
                    <a>
                        <div>
                            <img src={winterBlankets} />
                        </div>
                    </a>
                </div>
            </div>

            <div id="blackFridayContainer">
                <a>
                    <div>
                        <img src={blackFridayBanner} />
                    </div>
                </a>
            </div>

            <div id="ralphLaurenContainer">
                <a>
                    <div>
                        <img src={ralphLauren} />
                    </div>
                </a>
            </div>

            <div id="selectedForYou">
                <div>
                    <p>Selected for You</p>
                </div>

                <ProductsCarousel />
            </div>

            <Footer />
        </React.Fragment>
    )
}

export default Home;