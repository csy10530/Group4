import React, { useReducer, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';

import {selectMockUsers} from "../Signup/signupSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setCurrentUser} from "../Home/homeSlice";
import {useNavigate} from "react-router-dom";
import {createTheme} from "@mui/material";

/*const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`
        },
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: '#212121',
            color: '#fff'
        },
        card: {
            marginTop: theme.spacing(10)
        }
    })
);*/

//state type

type State = {
    username: string
    password:  string
    isButtonDisabled: boolean
    helperText: string
    isError: boolean
};

const initialState:State = {
    username: '',
    password: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false
};

type Action = { type: 'setUsername', payload: string }
    | { type: 'setPassword', payload: string }
    | { type: 'setIsButtonDisabled', payload: boolean }
    | { type: 'loginSuccess', payload: string }
    | { type: 'loginFailed', payload: string }
    | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setUsername':
            return {
                ...state,
                username: action.payload
            };
        case 'setPassword':
            return {
                ...state,
                password: action.payload
            };
        case 'setIsButtonDisabled':
            return {
                ...state,
                isButtonDisabled: action.payload
            };
        case 'loginSuccess':
            return {
                ...state,
                helperText: action.payload,
                isError: false
            };
        case 'loginFailed':
            return {
                ...state,
                helperText: action.payload,
                isError: true
            };
        case 'setIsError':
            return {
                ...state,
                isError: action.payload
            };
    }
}

const Login = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const mockUsers: Array<any> = useAppSelector(selectMockUsers);

    const homeDispatch = useAppDispatch();

    const navigate = useNavigate();
    const theme = createTheme();

    useEffect(() => {
        if (state.username.trim() && state.password.trim()) {
            dispatch({
                type: 'setIsButtonDisabled',
                payload: false
            });
        } else {
            dispatch({
                type: 'setIsButtonDisabled',
                payload: true
            });
        }
    }, [state.username, state.password]);

    const handleLogin = () => {
        let userExists = false;
        for (let i = 0; i < mockUsers.length; i++) {
            if (mockUsers[i].email === state.username && mockUsers[i].password === state.password) {
                userExists = true;
            }
        }

        if (userExists) {
            dispatch({
                type: 'loginSuccess',
                payload: 'Login Successfully'
            });
            homeDispatch(setCurrentUser(state.username));
            navigate("/");
        } else {
            dispatch({
                type: 'loginFailed',
                payload: 'Incorrect username or password'
            });
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.keyCode === 13 || event.which === 13) {
            state.isButtonDisabled || handleLogin();
        }
    };

    const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
        (event) => {
            dispatch({
                type: 'setUsername',
                payload: event.target.value
            });
        };

    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
        (event) => {
            dispatch({
                type: 'setPassword',
                payload: event.target.value
            });
        }
    return (
        <form  noValidate autoComplete="off" style={{display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`}}>
            <Card sx={{
                marginTop: theme.spacing(10)
            }}>
                <CardHeader  title="Login" sx={{
                    textAlign: 'center',
                    background: '#212121',
                    color: '#fff'
                }}/>
                <CardContent>
                    <div>
                        <TextField
                            error={state.isError}
                            fullWidth
                            id="username"
                            type="email"
                            label="Username"
                            placeholder="Username"
                            margin="normal"
                            onChange={handleUsernameChange}
                            onKeyPress={handleKeyPress}
                        />
                        <TextField
                            error={state.isError}
                            fullWidth
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="Password"
                            margin="normal"
                            helperText={state.helperText}
                            onChange={handlePasswordChange}
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"

                        onClick={handleLogin}
                        disabled={state.isButtonDisabled}
                        sx={{
                            marginTop: theme.spacing(2),
                            flexGrow: 1
                        }}
                    >
                        Login
                    </Button>
                </CardActions>
            </Card>
        </form>
    );
}

export default Login;