import React from "react";
import { Link } from "@mui/material";
import './Women.scss'

const Women: React.FC<{}> = () => {
    return (
        <div className="link-wrap">
            <div className="link-item">
                <div className="sub-title">WOMEN'S CLOTHING</div>
                <Link>All Women's Clothing</Link>
                <Link>New Arrivals</Link>
                <Link>Activewear</Link>
                <Link>Bras, Underwear & Lingerie</Link>
                <Link>Cashmere</Link>
                <Link>Coats & Jackets</Link>
                <Link>Dresses</Link>
                <Link>Hoodies & Sweatshirts</Link>
                <Link>Jeans</Link>
                <Link>Jumpsuits & Rompers</Link>
                <Link>Pajamas & Robes</Link>
                <Link>Pants & Capris</Link>
                <Link>Skirts</Link>
                <Link>Suits & Suit Separates</Link>
                <Link>Sweaters</Link>
                <Link>Tights, Socks, & Hosiery</Link>
                <Link>Tops</Link>
            </div>

            <div >
                <div className="link-item">
                    <div className="sub-title">JUNIORS</div>
                    <Link>All Juniors' Clothing</Link>
                    <Link>Coats & Jackets</Link>
                    <Link>Dresses</Link>
                    <Link>Jeans</Link>
                    <Link>Sweaters</Link>
                    <Link>Tops</Link>
                </div>

                <div className="link-item">
                    <div className="sub-title">PLUS SIZES</div>
                    <Link>All Plus Size Clothing</Link>
                    <Link>Coats & Jackets</Link>
                    <Link>Dresses</Link>
                    <Link>Sweaters</Link>
                    <Link>Tops</Link>
                </div>

                <div className="link-item">
                    <div className="sub-title">MORE SIZES</div>
                    <Link>Petites</Link>
                    <Link>Maternity</Link>
                </div>
            </div>

            <div className="link-item">
                <div className="sub-title">WOMEN'S BRANDS</div>
                <Link>All Women's Brands</Link>
                <Link>Calvin Klein</Link>
                <Link>CeCe</Link>
                <Link>INC International Concepts</Link>
                <Link>Lauren Ralph Lauren</Link>
                <Link>Levi's</Link>
                <Link>MICHAEL Michael Kors</Link>
                <Link>Tommy Hilfiger</Link>
            </div>

            <div>
                <div className="link-item">
                    <div className="sub-title">WOMEN'S GIFTS</div>
                    <Link>Holiday Gift Finder</Link>
                    <Link>Gifts Under $25</Link>
                    <Link>Gifts Under $50</Link>
                </div>

                <div className="link-item">
                    <div className="sub-title">DISCOVER</div>
                    <Link>Evening</Link>
                    <Link>Coat Trends</Link>
                    <Link>Dress Trends</Link>
                    <Link>Own Your Style</Link>
                    <Link>Vacation</Link>
                    <Link>Wedding</Link>
                </div>
            </div>
        </div>
    )
}

export default Women;