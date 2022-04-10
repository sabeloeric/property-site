import React from 'react'
import PropertyCard from './PropertyCard';
import Slider from "react-slick";

export default function PropertySlider() {
    const NextArrow = ({ onClick }) => {
        return (
          <div className="slick-arrow slick-arrow--next">
            <img
              onClick={onClick}
              className="slick-arrow__image"
              src="src/images/arrow-right.svg"
              alt="next-arrow"
            />
          </div>
        );
      };
    const PrevArrow = ({ onClick }) => {
        return (
          <div className="slick-arrow slick-arrow--previous">
            <img
              onClick={onClick}
              className="slick-arrow__image"
              src="src/images/arrow-left.svg"
              alt="next-arrow"
            />
          </div>
        );
      };
      const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };
    return (
        <div className='property-slider'>
            <h2 className='property-slider__title'>
                Featured Properties
            </h2>
            <Slider {...settings}>
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </Slider>
        </div>
    )
}
