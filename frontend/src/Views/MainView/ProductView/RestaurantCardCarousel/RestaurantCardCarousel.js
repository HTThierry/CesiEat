import React from 'react';
import "./RestaurantCardCarousel.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";


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

function RestaurantCardCarousel({ restaurants }) {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow slidesToShow={4}/>,
        prevArrow: <PrevArrow slidesToShow={4}/>,
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                {restaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.id} details={restaurant}/>
                ))}
            </Slider>
            <hr/>
        </div>
    );
}

export default RestaurantCardCarousel;
