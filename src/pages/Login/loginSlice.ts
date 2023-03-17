import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import axios from "axios";

interface LoginState {
    username: string;
    password: string;
    isButtonDisabled: boolean;
    helperText: string;
    isError: boolean;
    status: string;
}

const initialState: LoginState = {
    username: '',
    password: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false,
    status: "pending"
};

interface UserInfo {
    username: string;
    password: string;
}

export const loginUser = createAsyncThunk("users/login",
    async (userInfo: UserInfo, thunkAPI) => {
        /*const loginData = new FormData();
        loginData.append("username", userInfo.username);
        loginData.append("password", userInfo.password);*/

        const res = await axios.post("http://localhost:4000/api/login", {
            email: userInfo.username,
            password: userInfo.password
        });

        console.log(res);
        return res;
    }
)

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<any>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<any>) => {
            state.password = action.payload;
        },
        setIsButtonDisabled: (state, action: PayloadAction<any>) => {
            state.isButtonDisabled = action.payload;
        },
        loginSuccess: (state, action: PayloadAction<any>) => {
            state.helperText = action.payload;
            state.isError = false;
        },
        loginFailed: (state, action: PayloadAction<any>) => {
            state.helperText = action.payload;
            state.isError = true;
        },
        setIsError: (state, action: PayloadAction<any>) => {
            state.isError = action.payload
        },
        userLogout: (state, action: PayloadAction<any>) => {
            state.username = "";
            state.password = "";
            state.helperText = "";
            state.status = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log(action.payload);
                state.status = "success"
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log(action);
                state.status = "failed";
            })
    }
});

export const {
    setUsername,
    setPassword,
    setIsButtonDisabled,
    loginSuccess,
    loginFailed,
    setIsError,
    userLogout
} = loginSlice.actions;

export const selectUsername = (state: RootState) => state.login.username;
export const selectPassword = (state: RootState) => state.login.password;
export const selectIsButtonDisabled = (state: RootState) => state.login.isButtonDisabled;
export const selectHelperText = (state: RootState) => state.login.helperText;
export const selectIsError = (state: RootState) => state.login.isError;
export const selectLoginStatus = (state: RootState) => state.login.status;

export default loginSlice.reducer;
