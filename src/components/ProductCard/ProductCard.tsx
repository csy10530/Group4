import React, {useEffect, useState} from "react";
import {Card, CardMedia, Typography} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {addToCart, Product} from "../../pages/ShoppingCart/shoppingCartSlice";
import "./ProductCard.scss"

//test
//delete later
import michael_kors from "../../assets/products/test/michael_kors.webp";
import estee_lauder_limited_edition from "../../assets/products/test/estee_lauder_limited_edition.webp";
import perfume_sampler from "../../assets/products/test/perfume_sampler.webp";
import polo from "../../assets/products/test/polo.webp";
import {useNavigate} from "react-router-dom";

interface ItemProps {
    product: Product;
}

const images = [
    {"michael_kors.webp": michael_kors},
    {"estee_lauder_limited_edition.webp": estee_lauder_limited_edition},
    {"perfume_sampler.webp": perfume_sampler},
    {"polo.webp": polo}
];

const ProductCard: React.FC<ItemProps> = ({product}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (item: Product) => {
        dispatch(addToCart(item));
    }

    // to be deleted
    const [img, setImg] = useState<any>(null);
    useEffect(() => {
        for (let i of images) {

            //console.log(i)
            // @ts-ignore
            if (i.hasOwnProperty(product.image)) {
                // @ts-ignore
                setImg(i[product.image]);
            }
        }
    }, [])

    return (
        <Card className={"product-card-container"} sx={{maxWidth: 200}} variant={"outlined"}>
            <CardContent>
                <CardMedia component={"img"} height={"140"} image={img} onClick={() => navigate("/product")}/>
                <Typography variant={"h5"} component={"div"}>
                    {product.name}
                </Typography>
                <Typography>
                    ${product.price}
                </Typography>
                <Typography>
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard;