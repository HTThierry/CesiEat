import React from 'react';
import "./VignetteCarousel.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import Vignette from "../Vignette/Vignette";


const NextArrow = (props) => {
    const { className, style, onClick, currentSlide, slideCount, slidesToShow } = props;
    const remainingSlides = slideCount - currentSlide - slidesToShow;
    const isEnabled = remainingSlides >= 1;
    return (
        <FaArrowRightLong
            className={className}
            style={{
                ...style,
                color: isEnabled ? '#000' : '#ccc',
                cursor: isEnabled ? 'pointer' : 'default',
                display: 'block'
            }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick, currentSlide } = props;
    const isEnabled = currentSlide > 0;
    return (
        <FaArrowLeftLong
            className={className}
            style={{
                ...style,
                color: isEnabled ? '#000' : '#ccc',
                cursor: isEnabled ? 'pointer' : 'default',
                display: 'block'
            }}
            onClick={onClick}
        />
    );
};

function VignetteCarousel({ restaurants }) {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow slidesToShow={3}/>,
        prevArrow: <PrevArrow slidesToShow={3}/>,
        center: true,
        centerPadding: '30px',
    };

    return (
        <div className="vignette-carousel">
            <Slider {...settings}>
                {restaurants.map(restaurant => (
                    <Vignette key={restaurant.id} details={restaurant}/>
                ))}
            </Slider>
        </div>
    );
}

export default VignetteCarousel;
