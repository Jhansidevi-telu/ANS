import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Michael Brown",
    text: "The ambiance is lovely and the food is top-notch. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    text: "Great service and delicious food. Will come back again!",
    rating: 4,
  },
  {
    id: 3,
    name: "John Smith",
    text: "One of the best dining experiences I’ve had in a while.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Davis",
    text: "Good food but service could be improved.",
    rating: 3,
  },
  {
    id: 5,
    name: "Chris Thompson",
    text: "Amazing place! I loved the ambiance and the food.",
    rating: 5,
  },
];

const SliderDown = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {reviews.map((review, index) => {
          // Determine if the card is in the middle position
          const isMiddleCard = (currentSlide + 1) % reviews.length === index;
          return (
            <div
              key={review.id}
              className={`card-wrapper ${isMiddleCard ? "middle-card" : ""}`}
            >
              <div className="card">
                <span className="fs-3">
                  <FaQuoteLeft className="icon-color " /> 
                </span>
                <p>{review.text}</p>
                <span className="text-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill fs-5"></i>
                  ))}
                </span>
                <hr />
                <p className="name text-center ">{review.name}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderDown;
