import {AppBar, Stack, Toolbar, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {Link as RouterLink} from "react-router-dom";
import React from "react";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import NavLinks from "./NavLinks";

interface NavProps {
    loginStatus: boolean,
    currentUser: string,
    handleLogout: React.MouseEventHandler<HTMLButtonElement>
}

const NavigationBar: React.FC<NavProps> = ({loginStatus, currentUser, handleLogout}) => {
    return (
        <AppBar position={"static"} color="transparent">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Home
                </Typography>

                <Stack direction="row" spacing={2}>
                    <form onSubmit={event => event.preventDefault()}>
                        <TextField
                            autoComplete="on"
                            placeholder="Search"
                            variant="outlined"
                            size="small"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton
                                        type="submit"
                                    >
                                        <SearchIcon style={{fill: "white"}}/>
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                    </form>

                    {!loginStatus &&
                        <Button
                            component={RouterLink}
                            to="/Signup"
                            color="inherit"
                            sx={{textTransform: "none"}}
                        >
                            Signup
                        </Button>}

                    {loginStatus && currentUser ?
                        <Button
                            color="inherit"
                            onClick={handleLogout}
                            sx={{textTransform: "none"}}
                        >
                            {currentUser}
                        </Button> :
                        <Button
                            component={RouterLink}
                            to="/Login"
                            color="inherit"
                            sx={{textTransform: "none"}}
                        >
                            Login
                        </Button>}
                </Stack>
            </Toolbar>

            <NavLinks />
        </AppBar>
    )
}

export default NavigationBar;