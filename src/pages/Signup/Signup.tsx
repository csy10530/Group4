import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {useAppDispatch} from "../../app/hooks";
import {registerUser} from "./signupSlice";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import {useNavigate} from "react-router-dom";
import {setCurrentUser} from "../Home/homeSlice";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import {createTheme} from "@mui/material";

const SignupSchema = yup.object().shape({
    firstName: yup.string()
        .min(2, "Too short")
        .max(50, "Too Long")
        .required("Required"),
    lastName: yup.string()
        .min(2, "Too short")
        .max(50, "Too Long")
        .required("Required"),
    password: yup.string()
        .min(5, "Too short")
        .max(15, "Too long")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{5,15})/,
            "Must between 5 to 15 characters, one uppercase, one lowercase, one number and one special character")
        .required("Required"),
    email: yup.string().email("Invalid email").required("Required")
});

export const Signup: React.FC<{}> = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const theme = createTheme();

    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            dispatch(registerUser(values));
            dispatch(setCurrentUser(values.email));
            navigate("/");
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}
              style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  width: 400,
                  margin: `${theme.spacing(0)} auto`
        }}>
            <Card sx={{
                marginTop: theme.spacing(10)
            }}>
                <CardHeader title="Signup" sx={{
                    textAlign: 'center',
                    background: '#212121',
                    color: '#fff'
                }}/>
                <CardContent>
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        margin="normal"
                        fullWidth
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />

                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        margin="normal"
                        fullWidth
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />

                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        margin="normal"
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <IconButton
                                    onClick={() => {
                                        setShowPassword(!showPassword)
                                    }}
                                >
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }}
                    />

                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        margin="normal"
                        fullWidth
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </CardContent>

                <CardActions>
                    <Button
                        color="secondary"
                        size="large"
                        variant="contained"
                        type="submit"
                        sx={{
                            marginTop: theme.spacing(2),
                            flexGrow: 1
                    }}>
                        Create Account
                    </Button>
                </CardActions>
            </Card>

        </form>
    );
};