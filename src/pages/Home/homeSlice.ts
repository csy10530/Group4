export interface LoginState {
    status: boolean;
    accountType: "customer" | "merchant" | "admin"
}

const initialState: LoginState = {
    status: false,
    accountType: "customer"
};