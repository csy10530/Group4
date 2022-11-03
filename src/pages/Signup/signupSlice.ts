import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export interface SignupState {
    status: boolean;
    mockUsers: Array<any>;
}

const initialState: SignupState = {
    status: false,
    mockUsers: [{
        firstName: "test1",
        lastName: "user1",
        password: "testuser1",
        email: "test1@email.com"
    }, {
        firstName: "test2",
        lastName: "user2",
        password: "testuser2",
        email: "test2@email.com"
    }, {
        firstName: "test3",
        lastName: "user3",
        password: "testuser3",
        email: "test3@email.com"
    }, {
        firstName: "test4",
        lastName: "user4",
        password: "testuser4",
        email: "test4@email.com"
    }, {
        firstName: "test5",
        lastName: "user5",
        password: "testuser5",
        email: "test5@email.com"
    }]
};

export const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        register: (state, action: PayloadAction<any>) => {
            let userExists = false;
            for (let i = 0; i < state.mockUsers.length; i++) {
                if (state.mockUsers[i].email === action.payload.email) {
                    userExists = true;
                }
            }
            if (!userExists) {
                state.status = true;
                state.mockUsers.push(action.payload);
            }
        }
    }
});

export const {register} = signupSlice.actions;
export const selectMockUsers = (state: RootState) => state.signup.mockUsers;
export default signupSlice.reducer;