import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
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
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Medium screens (tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Small screens (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false, // Hide arrows on mobile for a clean UI
        },
      },
    ],
  };

  return (
    <div className="container">
      <h2>Customer Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="card-wrapper">
            <div className="card">
              <span>
                <i className="ri-double-quotes-l text-warning"></i>
              </span>
              <p>{review.text}</p>
              <span className="text-center">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill fs-4"></i>
                ))}
              </span>
              <hr />
              <p className="name text-center">{review.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderDown;
