import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export interface Product {
    name: string;
    price: number;
    amount: number;
    description?: string;
    image?: string;
}

type ShoppingCartState = {
    items: Array<Product>
}

const initialState: ShoppingCartState = {
    items: []
}


const shoppingCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            for (let item of state.items) {
                if (item.name === action.payload.name) {
                    return;
                }
            }
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items =
                state.items.filter(item => item.name !== action.payload.name)
        },
        addAmount: (state, action) => {
            state.items = state.items.map(item => {
                if (item.name === action.payload.name) {
                    return {...item, amount: item.amount + 1}
                } else {
                    return item;
                }
            });
        },
        reduceAmount: (state, action) => {
            state.items = state.items.map(item => {
                if (item.name === action.payload.name) {
                    return {...item, amount: item.amount - 1}
                } else {
                    return item;
                }
            });
        }
    }
});

export const {addToCart, removeFromCart, addAmount, reduceAmount} = shoppingCartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart.items;
export default shoppingCartSlice.reducer;