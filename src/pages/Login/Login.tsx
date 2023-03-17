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
import {RootState} from "../../app/store";
import {
    loginUser,
    selectHelperText,
    selectIsButtonDisabled,
    selectIsError,
    selectPassword, selectLoginStatus,
    selectUsername
} from "./loginSlice";
import {setUsername, setPassword, setIsButtonDisabled, loginSuccess, loginFailed, setIsError} from "./loginSlice";

const Login = () => {
    const loginUsername: string = useAppSelector(selectUsername);
    const loginPassword: string = useAppSelector(selectPassword);
    const loginIsButtonDisabled: boolean = useAppSelector(selectIsButtonDisabled);
    const loginHelperText: string = useAppSelector(selectHelperText);
    const loginIsError: boolean = useAppSelector(selectIsError);
    const loginStatus: string = useAppSelector(selectLoginStatus);

    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const theme = createTheme();

    useEffect(() => {
        if (loginUsername.trim() && loginPassword.trim()) {
            dispatch(setIsButtonDisabled(false));
        } else {
            dispatch(setIsButtonDisabled(true));
        }
    }, [loginUsername, loginPassword]);

    useEffect(() => {
        if (loginUsername.trim() && loginPassword.trim()) {
            if (loginStatus === "success") {
                dispatch(loginSuccess('Login Successfully'));
                dispatch(setCurrentUser(loginUsername));
                navigate("/");
            } else if (loginStatus === "failed") {
                dispatch(loginFailed("Incorrect username or password"));
            }
        }
    }, [loginStatus])

    const handleLogin = () => {
        dispatch(loginUser({username: loginUsername, password: loginPassword}))
    };

    const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
        (event) => {
            dispatch(setUsername(event.target.value));
        };

    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
        (event) => {
            dispatch(setPassword(event.target.value));
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
                            error={loginIsError}
                            fullWidth
                            id="username"
                            type="email"
                            label="Username"
                            placeholder="Username"
                            margin="normal"
                            onChange={handleUsernameChange}
                        />
                        <TextField
                            error={loginIsError}
                            fullWidth
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="Password"
                            margin="normal"
                            helperText={loginHelperText}
                            onChange={handlePasswordChange}
                        />
                    </div>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"

                        onClick={handleLogin}
                        disabled={loginIsButtonDisabled}
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