import React from "react";
import { Link, Toolbar } from "@mui/material";
import Women from "./Dropdowns/Women";
import './NavLinks.scss'

const navItems = ["Women", "Men", "Kids", "Beauty", "Shoes", "Furniture", "Gifts", "Trending", "Sale"];

const NavLinks: React.FC<{}> = () => {
    const [showNavItem, setShowNavItem] = React.useState<Boolean>(false)

    return (
        <div
            style={{ padding: '16px 24px', position: 'relative' }}
            onMouseEnter={() => {
                setShowNavItem(true)
            }}
            onMouseLeave={() => {
                setShowNavItem(false)
            }} >
            <div className="link-wrap">
                {navItems.map((content, idx) => {
                    return (
                        <Link
                            key={content + idx}
                            sx={{ color: content === "Sale" ? "red" : "black", cursor: "pointer" }}
                            underline="hover"
                        >
                            {content}
                        </Link>
                    )
                })}
            </div>
            {
                showNavItem ? <div className="popup" >
                    <Women />
                </div> : null
            }

        </div>
    )
}

export default NavLinks;