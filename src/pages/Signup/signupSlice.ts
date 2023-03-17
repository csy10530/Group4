import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import axios from "axios";

export interface SignupState {
    status: boolean;
    users: Array<any>;
}

const initialState: SignupState = {
    status: false,
    users: []
};

interface UserRegisterInfo {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export const registerUser = createAsyncThunk("users/register",
    async (userInfo: UserRegisterInfo, thunkAPI) => {
        const api = axios.create({withCredentials: true});
        const res = await api.post("http://ec2-44-214-134-68.compute-1.amazonaws.com:4000/api/register", {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email,
            password: userInfo.password
        })
        console.log(res);
        return res.data;
    }
)

export const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        // deprecated
        mockRegister: (state, action: PayloadAction<any>) => {}
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            console.log(action.payload)
        })
    }
});

export const {mockRegister} = signupSlice.actions;
export const selectMockUsers = (state: RootState) => state.signup.users;
export default signupSlice.reducer;