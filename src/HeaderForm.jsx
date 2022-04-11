import React from "react";
import Slider from "react-slick";

export default function HeaderForm() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="header">
      <Slider {...settings}>
        <img src="src/images/headerimage1.png" 
            className="header__image"
            alt="header image 1" />
        <img src="src/images/headerimage2.jpg" 
            className="header__image"
            alt="header image 2" />
      </Slider>
      <div className="header__form-wrapper">
        <form className="header__form">
            <div className="header__form-inputs">
                <div className="header__form-buy dropdown">
                    <div>Buy</div>
                    <img src="src/images/header-form/down-arrow.svg"
                        className="header__form-arrow"
                        alt="down arrow" />
                </div>
                <div className="header__form-residential dropdown">
                    <div>Residential</div>
                    <img src="src/images/header-form/down-arrow.svg"
                        className="header__form-arrow"
                        alt="down arrow" />
                </div>
                <div className="header__form-area dropdown">
                    <div>Type Area or Suburb Name</div>
                </div>
            </div>
            <div className="header__form-buttons">
                <div>
                    <button className="button button--secondary header__form-button">
                        <img src="src/images/header-form/hash-icon.svg" />
                        Web Ref. Number Search
                    </button>
                </div>
                <div className="header__form-search-buttons">
                    <div className="header__form-num-property">
                        124 Properties
                    </div>
                    <button className="button button--secondary header__form-button">
                        <img src="src/images/header-form/down-arrow-2.svg" />
                        More Search Options
                    </button>
                    <button className="button button--primary header__form-button search-button">
                        <img src="src/images/header-form/search.svg" />
                        SEARCH
                    </button>
                </div>
            </div>
        </form>

      </div>
    </div>
  );
}
