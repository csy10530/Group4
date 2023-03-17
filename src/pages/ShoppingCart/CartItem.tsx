import React, {useEffect, useState} from "react";
import "./ShoppingCart.scss";
import {useAppDispatch} from "../../app/hooks";
import Button from "@mui/material/Button";
import {Product, removeFromCart, addAmount, reduceAmount} from "./shoppingCartSlice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./ShoppingCart.scss";



//test
//delete later
import michael_kors from "../../assets/products/test/michael_kors.webp";
import estee_lauder_limited_edition from "../../assets/products/test/estee_lauder_limited_edition.webp";
import perfume_sampler from "../../assets/products/test/perfume_sampler.webp";
import polo from "../../assets/products/test/polo.webp";

interface ItemProps {
    item: Product;
}

const images = [
    {"michael_kors.webp": michael_kors},
    {"estee_lauder_limited_edition.webp": estee_lauder_limited_edition},
    {"perfume_sampler.webp": perfume_sampler},
    {"polo.webp": polo}
];

const CartItem: React.FC<ItemProps> = ({item}) => {
    const dispatch = useAppDispatch();

    const handleAddAmount = () => {
        dispatch(addAmount(item))
    }

    const handleReduceAmount = () => {
        if (item.amount > 1) {
            dispatch(reduceAmount(item));
        } else {
            dispatch(removeFromCart(item));
        }
    }

    // to be deleted
    const [img, setImg] = useState<any>(null);
    useEffect(() => {
        for (let i of images) {

            console.log(i)
            // @ts-ignore
            if (i.hasOwnProperty(item.image)) {
                // @ts-ignore
                setImg(i[item.image]);
            }
        }
    }, [])

    return (
        <div className={"cartItemWrapper"}>
            <div>
                <h3>{item.name}</h3>

                <div className={"cartItemInfo"}>
                    <p>Price: ${item.price}</p>
                    <p>Total Price: ${(item.price * item.amount).toFixed(2)}</p>
                </div>

                <div className={"cartItemButtonGroup"} >
                    <Button size={"small"} onClick={handleReduceAmount} disableElevation>
                        <RemoveIcon fontSize={"small"}/>
                    </Button>

                    <p>{item.amount}</p>

                    <Button size={"small"} onClick={handleAddAmount} disableElevation>
                        <AddIcon fontSize={"small"}/>
                    </Button>

                    <Button size={"small"} onClick={() => dispatch(removeFromCart(item))} disableElevation>
                        <DeleteOutlineIcon fontSize={"small"}/>
                    </Button>

                </div>
            </div>

            <img src={img} alt={item.name} />
        </div>
    );
}

export default CartItem;