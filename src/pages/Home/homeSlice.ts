import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export interface AccountState {
    status: boolean;
    currentUser: string;
    accountType: "customer" | "merchant" | "admin"
}

const initialState: AccountState = {
    status: false,
    currentUser: "",
    accountType: "customer"
};

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<any>) => {
            state.status = true;
            state.currentUser = action.payload;
        },
        logout: (state) => {
            state.status = false;
            state.currentUser = "";
        }
    }
});

export const {setCurrentUser, logout} = homeSlice.actions;
export const selectCurrentUser = (state: RootState) => state.home.currentUser;
export const selectStatus = (state: RootState) => state.home.status;
export default homeSlice.reducer;