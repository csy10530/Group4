import React from "react";
import {Link, Stack, Toolbar} from "@mui/material";

import Women from "./Dropdowns/Women";

const navItems = ["Women", "Men", "Kids", "Beauty", "Shoes", "Furniture", "Gifts", "Trending", "Sale"];

const NavLinks: React.FC<{}> = () => {
    return (
        <Toolbar>
            <Stack direction="row" spacing={2}>
                {navItems.map((content, idx) => {
                    return (
                        <React.Fragment>
                            <Link
                                key={content + idx}
                                sx={{color: content === "Sale" ? "red" : "black", cursor: "pointer"}}
                                underline="hover"
                            >
                                {content}
                            </Link>

                            <Women />
                        </React.Fragment>
                    )
                })}
            </Stack>
        </Toolbar>
    )
}

export default NavLinks;