import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {register, selectMockUsers} from "./signupSlice";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';

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
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,15})/,
            "Must between 5 to 15 characters, one uppercase, one lowercase, one number and one special character")
        .required("Required"),
    email: yup.string().email("Invalid email").required("Required")
});

export const Signup: React.FC<{}> = () => {
    const mockUsers = useAppSelector(selectMockUsers);
    const dispatch = useAppDispatch();

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
            dispatch(register(values));
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                />

                <TextField
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                />

                <TextField
                    id="password"
                    name="password"
                    label="password"
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
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />

                <Button color="primary" variant="contained" type="submit">
                    Create Account
                </Button>

                <div>{mockUsers.map(user => {
                    return <div>
                        <span>{user.firstName} </span>
                        <span>{user.lastName} </span>
                        <span>{user.password} </span>
                        <span>{user.email} </span>
                    </div>
                })}</div>
            </form>
        </div>
    );
};