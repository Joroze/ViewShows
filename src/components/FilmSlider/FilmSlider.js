import "./FilmSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import FilmItem from "components/FilmItem/FilmItem";

function FilmSlider({ title, items }) {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false
        }
      }
    ]
  };

  return (
    <div className="component-film-slider">
      <h2> {title} </h2>
      <Slider {...sliderSettings}>
        {items.map(function(item) {
          const image = item.images.image && item.images.image[0].src;
          return (
            <FilmItem
              key={item.id}
              permaLink={item.permaLink}
              imageSrc={image}
              title={item.title}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default FilmSlider;
