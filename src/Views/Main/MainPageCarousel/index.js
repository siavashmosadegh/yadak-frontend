import { Box } from '@chakra-ui/layout';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../Assets/images/1.jpg";
import img2 from "../../../Assets/images/2.jpg";

const MainPageCarousel = () => {
    return (
        <Carousel>
            <div style={{width: "auto",height: "500px"}}>
                <img src={img1} />
                <p>avali</p>
            </div>

            <div style={{width: "auto",height: "500px"}}>
                <img src={img2} />
                <p>dovvomi</p>
            </div>
        </Carousel>
    );
}

export default MainPageCarousel;