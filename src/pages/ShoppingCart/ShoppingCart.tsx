import React from "react";
import {Divider, Drawer} from "@mui/material";
import {useAppSelector} from "../../app/hooks";
import {selectCartItems} from "./shoppingCartSlice";
import "./ShoppingCart.scss";
import CartItem from "./CartItem";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';

interface CartStatus {
    cartOpen: boolean,
    handleCartClose: () => void;
}

const ShoppingCart: React.FC<CartStatus> = ({cartOpen, handleCartClose}) => {
    const cartItems = useAppSelector(selectCartItems);

    return (
        <Drawer className={"cart-drawer"} anchor={"right"} open={cartOpen} onClose={() => handleCartClose()}>
            <div className={"cartHeader"}>
                <IconButton onClick={handleCartClose}>
                    <CloseIcon />
                </IconButton>
            </div>
            <div className={"cartWrapper"}>
                <h2>Your Shopping Cart</h2>
                {cartItems.length === 0 ? <div>Cart is empty</div> : null}
                {cartItems && cartItems.map((item, idx) => {
                    return (
                        <>
                            <CartItem key={idx} item={item}/>
                            <Divider />
                        </>
                    );
                })}

            </div>
            {cartItems.length > 0 && <button className={"place-order-btn"}>Place Order</button>}
        </Drawer>
    )
}

export default ShoppingCart;