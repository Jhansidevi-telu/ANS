import React from "react";
import card1 from "../assets/close-up-appetizing-ramadan-meal.jpg";
import card2 from "../assets/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import g5 from "../assets/g5.jpg";
import Header from "../Header/Header";
import "../Header/Header.css";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="carousel-header-container">
        <div className="header-wrapper">
          <Header />
        </div>
        {/*Carousel*/}
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <img src={card1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={card2} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/*About*/}
        <div class="container-xxl py-5">
          <div class="container">
            <div class="row g-5 algin-items-center">
              <div class="col-lg-6">
                <div class="row g-3">
                  <div class="col-6 text-start">
                    <img
                      class="img-gluid rounded w-100 wow zoomIn"
                      src={g5}
                      alt="grid-1"
                    />
                  </div>
                  <div class="col-6 text-start">
                    <img
                      class="img-gluid rounded w-75 wow zoomIn"
                      style={{ marginTop: "25%" }}
                      src={g5}
                      alt="grid-1"
                    />
                  </div>
                  <div class="col-6 text-end">
                    <img
                      class="img-gluid rounded w-75 wow zoomIn"
                      src={g5}
                      alt="grid-1"
                    />
                  </div>
                  <div class="col-6 text-start">
                    <img
                      class="img-gluid rounded w-100 wow zoomIn"
                      src={g5}
                      alt="grid-1"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <h4 class="  section-title text-color ff-secondary text-start  fw-normal">
                  About Us
                </h4>
                <h1 class="section-title mb-4">
                  Welcome to Anusha Catering & Suppliers
                </h1>
                <p class=" contentFont mb-4">
                  Catering is the art of providing food and bevarge services to
                  a group of people for an event, occasion, or gathering. The
                  success of any event depends on the quality of food and
                  beverage served, and the overall experience it offers to the
                  guests. Catering services must be tailored to meet the
                  specific needs of each event, and a good catering.
                </p>
                <p class=" contentFont mb-4">
                  We provide high-quality, customizable catering options to suit
                  any event, from intimate gatherings to large scale
                  celebrations. We also supply essential event quipment like
                  tent houses, lighting and more to ensure every occasion is
                  perfectly excuted. We serve to make every event not just
                  successful but truly memorable for our clients.
                </p>
                <div class="row g-4 mb-4">
                  <div class="col-sm-6">
                    <div class="d-flex algin-items-center border-color px-3" >
                      <h1 class="flex-shrink-0 dispaly-5 text-color mb-0 ">
                        5
                      </h1>
                      <div class="ps-4">
                        <p class="mb-0 contentFont">Years of</p>
                        <h6 class="text-uppercase mb-0 contentFont">Experience</h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="d-flex algin-items-center border-color px-3">
                      <h1 class="flex-shrink-0 dispaly-5 text-color mb-0">
                        50+
                      </h1>
                      <div class="ps-4">
                        <p class="mb-0 contentFont">Popular</p>
                        <h6 class="text-uppercase mb-0 contentFont">Dishes</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="" class="btn button-color text-white fs-6 py-3 px-5 mt-2 contentFont">
                  {" "}
                  Read More{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Organized */}
        <div className="bg-body-tertiary py-5">
          <h1 className="text-center mb-4">We Serve</h1>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                  <img src={g5} className="card-img-top" alt="Service 1" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Service Title 1</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                  <img src={g5} className="card-img-top" alt="Service 2" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Service Title 2</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                  <img src={g5} className="card-img-top" alt="Service 3" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Service Title 3</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                  <img src={g5} className="card-img-top" alt="Service 4" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Service Title 4</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Services*/}
        <div class="container-xxl py-5">
          <div class="container">
            <div class="row g-4">
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item border rounded pt-3">
                  <div class="p-4">
                    <h5>Master Chefs</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nam, minima.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item border rounded pt-3">
                  <div class="p-4">
                    <h5>Quality Food</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nam, minima.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item border rounded pt-3">
                  <div class="p-4">
                    <h5>Online Order</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nam, minima.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item border rounded pt-3">
                  <div class="p-4">
                    <h5>24/7 Service</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nam, minima.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Testimonials*/}
        <div className="container-xxl p-0">
          <div className="container">
            <div className="section__container">
              <div className="text-center wow fadeInUp">
                <h5 className="section-title ff-secondary text-center text-warning fw-normal">
                  Testimonials
                </h5>
                <h1 className="mb-5">What our customers say about us</h1>
              </div>

              <div
                id="testimonialCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000" // Slide every 3 seconds
                data-bs-pause="hover" // Pause on hover
              >
                <div className="carousel-inner">
                  {/* First group of 3 testimonials */}
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card">
                          <span>
                            <i className="ri-double-quotes-l"></i>
                          </span>
                          <p>
                            The food here is absolutely amazing! The flavors
                            were authentic. I'll definitely be coming back.
                          </p>
                          <span className="text-center">
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                          </span>
                          <hr />
                          <p className="name text-center">Sarah Thompson</p>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card">
                          <span>
                            <i className="ri-double-quotes-l"></i>
                          </span>
                          <p>
                            The service at this restaurant is outstanding. I was
                            treated like royalty. Highly recommend it!
                          </p>
                          <span className="text-center">
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                          </span>
                          <hr />
                          <p className="name text-center">John Williams</p>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card">
                          <span>
                            <i className="ri-double-quotes-l"></i>
                          </span>
                          <p>
                            I love how quickly the food was served, and the
                            taste was simply delightful. Perfect for a family
                            night out!
                          </p>
                          <span className="text-center">
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                          </span>
                          <hr />
                          <p className="name text-center">Emily Johnson</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second group of 3 testimonials */}
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card">
                          <span>
                            <i className="ri-double-quotes-l"></i>
                          </span>
                          <p>
                            The ambiance is lovely and the food is top-notch.
                            Highly recommended!
                          </p>
                          <span className="text-center">
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                          </span>
                          <hr />
                          <p className="name text-center">Michael Brown</p>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card">
                          <span>
                            <i className="ri-double-quotes-l"></i>
                          </span>
                          <p>
                            A fantastic dining experience. Every dish was
                            delicious!
                          </p>
                          <span className="text-center">
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                          </span>
                          <hr />
                          <p className="name text-center">Alice Smith</p>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card">
                          <span>
                            <i className="ri-double-quotes-l"></i>
                          </span>
                          <p>
                            An unforgettable experience! Can't wait to return.
                          </p>
                          <span className="text-center">
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                            <i className="ri-star-fill fs-4"></i>
                          </span>
                          <hr />
                          <p className="name text-center">David Lee</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#testimonialCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#testimonialCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="container-xxl p-0 mt-4">
          <div className="container">
            <div className="text-center wow fadeInUp mb-3">
              <h5 className="section-title ff-secondary text-center text-warning fw-normal">
                Contact Us
              </h5>
            </div>
            <div className="row">
              {/* Column for the Google Map */}
              <div className="col-lg-6 col-sm-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.7305905916432!2d83.34257537421958!3d17.804354390661263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11439a67374d7327%3A0x46ea10d91ee0640d!2sAnusha%20Caterers%20%26%20Lighting%20Suppliers!5e0!3m2!1sen!2sin!4v1728241149958!5m2!1sen!2sin"
                  height="100%"
                  width="100%"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Column for the contact form */}
              <div className="col-lg-6 col-sm-12">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-warning">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*Footer*/}
        <div className="container-xxl bg-dark text-light py-1 mt-4">
          <div className="row align-items-center ">
            <div className="col-md-6 align-items-center justify-content-center mt-2">
              <p>
                &copy; 2024 Anusha Catering & Suppliers. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end text-center">
              <a
                href="https://www.facebook.com"
                className="text-light mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-light mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-light mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                className="text-light mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
