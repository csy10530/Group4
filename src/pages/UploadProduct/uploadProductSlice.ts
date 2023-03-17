import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {Product} from "../ShoppingCart/shoppingCartSlice";
import axios from "axios";
import {registerUser} from "../Signup/signupSlice";

type UploadProductState = {
    newProducts: Array<Product>
}

const initialState: UploadProductState = {
    newProducts: []
};

interface ProductInfo {
    name: String;
    description: String;
    price: Number;
    image?: String;
    amount: Number
}

export const createProduct = createAsyncThunk("users/upload",
    async (product: ProductInfo, thunkAPI) => {
        const api = axios.create({withCredentials: true});
        const res = await api.post("http://localhost:4000/users/63b791f409cc0c3c455e3826/products", {
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image,
            amount: product.amount
        })
        console.log(res);
        return res.data;
    }
)

const uploadProductSlice = createSlice({
    name: "uploadProduct",
    initialState,
    reducers: {
        uploadProduct: (state, action) => {}
    },
    extraReducers: (builder) => {
        builder.addCase(createProduct.fulfilled, (state, action) => {
            console.log(action.payload);
            state.newProducts.push(action.payload)
        })
    }
});

export const {uploadProduct} = uploadProductSlice.actions;
export const selectNewProducts = (state: RootState) => state.uploadProduct.newProducts;
export default uploadProductSlice.reducer;