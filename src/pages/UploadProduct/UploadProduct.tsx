import React, {useState} from "react";
import NavigationBar from "../../components/Navigation/Navigation";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {logout, selectCurrentUser, selectStatus} from "../Home/homeSlice";
import {userLogout} from "../Login/loginSlice";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {createProduct, uploadProduct} from "./uploadProductSlice";
import {createTheme, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import "./UploadProduct.scss"

const ProductSchema = yup.object().shape({
    name: yup.string()
        .min(2, "Too short")
        .max(50, "Too Long")
        .required("Required"),
    price: yup.number()
        .min(0.01)
        .required("Required"),
    description: yup.string()
        .min(5, "Too short")
        .max(300, "Too long")
        .required("Required"),
});

const UploadProduct: React.FC<{}> = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [productImage, setProductImage] = useState<any>();
    const [previewImage, setPreviewImage] = useState<any>();

    const currentUser = useAppSelector(selectCurrentUser);
    const loginStatus = useAppSelector(selectStatus);

    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const theme = createTheme();

    const formik = useFormik({
        initialValues: {
            name: "",
            price: 0,
            amount: 1,
            description: "",
            image: "",
        },
        validationSchema: ProductSchema,
        onSubmit: (values) => {
            //console.log(values);
            dispatch(createProduct({
                name: values.name,
                price: values.price,
                amount: 1,
                description: values.description,
                image: productImage.name
            }));
            navigate("/");
        },
    });

    const handleLogout = () => {
        dispatch(logout());
        dispatch(userLogout("pending"));
    }

    const handleCartClose = () => {
        setCartOpen(false);
    }

    const handleCartOpen = () => {
        setCartOpen(true);
    }

    return (
        <>
            <NavigationBar loginStatus={loginStatus} currentUser={currentUser} handleLogout={handleLogout}
                           handleCartOpen={handleCartOpen}/>
            <ShoppingCart cartOpen={cartOpen} handleCartClose={handleCartClose}/>

            <Box className="container">
                <Typography variant={"h3"} style={{
                    margin: `${theme.spacing(5)} auto`
                }}>
                    Upload Product
                </Typography>
                <form onSubmit={formik.handleSubmit}
                      style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          width: 400,
                          margin: `${theme.spacing(0)} auto`
                      }}>
                    <TextField
                        id="name"
                        name="name"
                        label="Product Name"
                        margin="normal"
                        fullWidth
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        id="price"
                        name="price"
                        label="Price ($)"
                        margin="normal"
                        fullWidth
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        error={formik.touched.price && Boolean(formik.errors.price)}
                        helperText={formik.touched.price && formik.errors.price &&
                            "Please enter a valid number, must be greater than 0.01"}
                    />
                    <TextField
                        id="description"
                        name="description"
                        label="Product Description"
                        margin="normal"
                        fullWidth
                        multiline
                        rows={5}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                    />


                    <Box>
                        <label htmlFor={"imageInput"}>
                            <input
                                id={"imageInput"}
                                name={"imageInput"}
                                type={"file"}
                                accept={"image/*"}
                                hidden
                                onChange={e => {
                                    if (e.target.files) {
                                        setProductImage(e.target.files[0]);
                                        setPreviewImage(URL.createObjectURL(e.target.files[0]));
                                    }
                                }}
                            />
                            <Button
                                component={"span"}
                            >
                                Choose Image
                            </Button>
                        </label>
                        <br/>

                        <div>
                            {productImage ? productImage.name : null}
                        </div>


                        <div>
                            {previewImage &&
                                <div>
                                    <img src={previewImage} alt={productImage.name} />
                                </div>
                            }
                        </div>
                    </Box>


                    <Button type={"submit"}>Submit</Button>
                </form>
            </Box>
        </>
    )
}

export default UploadProduct;