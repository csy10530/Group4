import {AppBar, Badge, Stack, Toolbar, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import React from "react";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import NavLinks from "./NavLinks";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useAppSelector} from "../../app/hooks";
import {selectCartItems} from "../../pages/ShoppingCart/shoppingCartSlice";

interface NavProps {
    loginStatus: boolean,
    currentUser: string,
    handleLogout: React.MouseEventHandler<HTMLButtonElement>,
    handleCartOpen: () => void;
}

const NavigationBar: React.FC<NavProps> = ({loginStatus, currentUser, handleLogout, handleCartOpen}) => {
    const cartItems = useAppSelector(selectCartItems);
    const navigate = useNavigate();

    return (
        <AppBar position={"static"} color="transparent">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}} onClick={() => navigate("/")}>
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

                    <Badge badgeContent={cartItems.length} color={"primary"}>
                        <ShoppingCartOutlinedIcon fontSize={"large"} onClick={handleCartOpen}/>
                    </Badge>

                    <Button
                        component={RouterLink}
                        to="/upload"
                        color="inherit"
                        sx={{textTransform: "none",
                            display: loginStatus ? "" : "none"
                        }}
                    >
                        Upload Product
                    </Button>

                    {!loginStatus &&
                        <Button
                            component={RouterLink}
                            to="/signup"
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
                            to="/login"
                            color="inherit"
                            sx={{textTransform: "none"}}
                        >
                            Login
                        </Button>}
                </Stack>
            </Toolbar>

            <NavLinks/>
        </AppBar>
    )
}

export default NavigationBar;