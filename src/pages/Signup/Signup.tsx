import React from 'react';
import {Field, Form, Formik} from 'formik';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {register, selectMockUsers} from "./signupSlice";

export const Signup: React.FC<{}> = () => {
    const mockUsers = useAppSelector(selectMockUsers);
    const dispatch = useAppDispatch();

    const validateEmail = (val: string) => {
        let err;
        if (!val) {
            err = "Please enter your email!";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)) {
            err = "Invalid email address.";
        }
        return err;
    }

    const validateFirstName = (val: string) => {
        if (!val) {
            return "Please enter your first name!"
        }
    }

    const validateLastName = (val: string) => {
        if (!val) {
            return "Please enter your last name!"
        }
    }

    const validatePassword = (val: string) => {
        if (!val) {
            return "Please enter your password!"
        }
    }

    return (
        <React.Fragment>
            <nav></nav>
            <div>
                <h1>Create account</h1>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        password: "",
                        confirmPassword: "",
                        email: ""
                    }}

                    onSubmit={values => {
                        dispatch(register(values));
                    }}>

                    {({errors, touched, values, isValidating}) => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field id="firstName" name="firstName" type="text" validate={validateFirstName}/>
                            {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}

                            <label htmlFor="lastName">Last Name</label>
                            <Field id="lastName" name="lastName" type="text" validate={validateLastName}/>
                            {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}

                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" type="password" validate={validatePassword}/>
                            {errors.password && touched.password && <div>{errors.password}</div>}

                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" type="email" validate={validateEmail}/>
                            {errors.email && touched.email && <div>{errors.email}</div>}

                            <button type="submit">Create Account</button>

                            {/*test*/}
                            <div>{mockUsers.map(user => {
                                return <div>
                                    <span>{user.firstName} </span>
                                    <span>{user.lastName} </span>
                                    <span>{user.password} </span>
                                    <span>{user.email} </span>
                                </div>
                            })}</div>
                        </Form>
                    )}
                </Formik>

            </div>
        </React.Fragment>
    )
}