import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice";
import homeReducer from "../pages/Home/homeSlice";
import signupReducer from "../pages/Signup/signupSlice";
import loginReducer from "../pages/Login/loginSlice";
import cartReducer from "../pages/ShoppingCart/shoppingCartSlice";
import uploadProductReducer from "../pages/UploadProduct/uploadProductSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        signup: signupReducer,
        login: loginReducer,
        home: homeReducer,
        cart: cartReducer,
        uploadProduct: uploadProductReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
