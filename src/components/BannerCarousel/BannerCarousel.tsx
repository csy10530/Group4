import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const bannerData = [
    "https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50",
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
}

const BannerCarousel:React.FC<{}> = () => {
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
        >
            {bannerData.map((item, idx) => (
                <img key={idx} src={item} alt="" />
            ))}
        </Carousel>
    )
}

export default BannerCarousel