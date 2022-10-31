import React from 'react';

import {useAppDispatch, useAppSelector} from "../../app/hooks"
import {Link as RouterLink} from "react-router-dom";
import {logout, selectCurrentUser, selectStatus} from "./homeSlice";
import {AppBar, Stack, Toolbar, Typography} from "@mui/material";
import Button from "@mui/material/Button";

const Home: React.FC<{}> = () => {
    const currentUser = useAppSelector(selectCurrentUser);
    const loginStatus = useAppSelector(selectStatus);

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Home
                </Typography>
                <Stack direction="row" spacing={2}>
                    {!loginStatus && <Button component={RouterLink} to="/Signup" color="inherit"
                                             sx={{textTransform: "none"}}>Signup</Button>}
                    {loginStatus && currentUser ?
                        <Button color="inherit" onClick={handleLogout}
                                sx={{textTransform: "none"}}>{currentUser}</Button> :
                        <Button component={RouterLink} to="/Login" color="inherit"
                                sx={{textTransform: "none"}}>Login</Button>}
                </Stack>

            </Toolbar>

        </AppBar>
    )
}

export default Home;