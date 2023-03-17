import React, {useReducer, useEffect, useState} from 'react';

import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button"
import {FormLabel} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import Navigation from "../../components/Navigation/Navigation";

const Profile = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <Navigation loginStatus={true} currentUser={"test"} handleLogout={() => {}} handleCartOpen={() => {}}/>
            <Grid>
                <Grid className="profileContainer">
                    <Grid md={6}>
                        <form>
                            <FormGroup id="firstname">
                                <FormLabel>Firstname</FormLabel>
                                <FormControl>
                                    <TextField placeholder={"Enter Firstname"}/>
                                </FormControl>
                            </FormGroup>

                            <FormGroup id="lastname">
                                <FormLabel>Lastname</FormLabel>
                                <FormControl>
                                    <TextField placeholder={"Enter Lastname"}/>
                                </FormControl>
                            </FormGroup>

                            <FormGroup id="email">
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <TextField placeholder={"Enter Email"}/>
                                </FormControl>
                            </FormGroup>

                            <FormGroup id="password">
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <TextField placeholder={"Enter Password"}/>
                                </FormControl>
                            </FormGroup>

                            <FormGroup id="confirmPassword">
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <TextField placeholder={"Confirm Password"}/>
                                </FormControl>
                            </FormGroup>

                            <FormGroup id="pic">
                                <FormLabel>Change Profile Picture</FormLabel>
                                <input
                                    id="custom-file"
                                    type="image/png"
                                />
                            </FormGroup>

                            <Button type="submit">
                                Update
                            </Button>
                        </form>
                    </Grid>
                    <Grid
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img src={""} className="profilePic" />
                    </Grid>
                </Grid>
            </Grid>
        </>

    )
}

export default Profile;