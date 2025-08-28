import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import g4 from "../assets/4X5.jpg";
import img90 from "../assets/3x5 copy.jpg";
import Google from "../assets/Google_Play_Store_badge_EN.svg.webp";
import imageSrc from "../assets/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai.jpg";
import Header from "../Header/Header";
import "../Header/Header.css";
import "./Home.css";
import SliderDown from "../Header/Slider";
import ScrollToTop from "../scrolltop/ScrollToTop";

const Home = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const [result, setResult] = useState("");

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data object
    const formData = {
      access_key: "6b9a067f-cf6d-4caf-aaa5-b4ed0b0d3041",
      name,
      phone,
      message,
    };

    // Convert form data to JSON format
    const json = JSON.stringify(formData);

    // Show a waiting message
    setResult("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const resultJson = await response.json();

      if (response.status === 200) {
        setResult(resultJson.message);
        setSubmitted(true);
      } else {
        setResult(resultJson.message);
        setSubmitted(false);
      }
    } catch (error) {
      setResult("Something went wrong!");
      console.log(error);
    }

    // Clear form fields after successful submission
    if (formRef.current) {
      formRef.current.reset();
    }
    setTimeout(() => {
      setResult("");
    }, 3000);
  };
  console.log(submitted);
  useEffect(() => {
    // Smooth scroll to the about section if the URL has a hash
    if (window.location.hash) {
      const element = document.getElementById(
        window.location.hash.substring(1)
      );
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <>
      <div className="carousel-header-container">
        <div className="header-wrapper">
          <Header />
        </div>
        {/*Banner Section*/}
        <div className="image-container position-relative d-flex align-items-center justify-content-center text-center">
          <img
            src={imageSrc}
            alt="Banner"
            className="d-block w-100 banner-image"
          />

          {/* Black overlay layer */}
          <div className="image-overlay"></div>

          <div className="image-text-overlay">
            <div className="welcome-text">Enjoy our</div>
            <div className="welcome-text1">Delicious Meal</div>
            <button
              type="button"
              className="btn1"
              onClick={() => navigate("/menu")}
            >
              View Our Menu
            </button>
          </div>
        </div>

        {/*About*/}
        <div id="about" class="container-xxl py-5">
          <div class="container">
            <div class="row g-5 algin-items-center">
              <div class="col-lg-6">
                <div class="row g-3">
                  <div class="col-6 text-start">
                    <img
                      class="img-gluid rounded w-100 wow zoomIn"
                      src={g4}
                      alt="grid-1"
                    />
                  </div>
                  <div class="col-6 text-start">
                    <img
                      class="img-gluid rounded w-75 wow zoomIn"
                      style={{ marginTop: "25%" }}
                      src={img90}
                      alt="grid-1"
                    />
                  </div>
                  <div class="col-6 text-end">
                    <img
                      class="img-gluid rounded w-75 wow zoomIn"
                      style={{ marginTop: "-25%" }}
                      src={img90}
                      alt="grid-1"
                    />
                  </div>
                  <div class="col-6 text-start">
                    <img
                      class="img-gluid rounded w-100 wow zoomIn"
                      src={g4}
                      alt="grid-1"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <h4 class="  section-title text-color ff-secondary text-start  fw-normal">
                  About Us
                </h4>
                <h1 class="section-title mb-3">
                  Welcome to Bhimavaram Delicious Biryanis
                </h1>
                <p class=" contentFont mb-4">
                  Bhimavaram Delicious Biryanis is a popular restaurant located
                  in Tagarapuvalasa, Visakhapatnam, known for serving a wide
                  variety of mouth-watering dishes. From authentic Andhra-style
                  biryanis to crispy starters, sizzling tandoori specials,
                  flavorful noodles, and fried rice — we have something for
                  everyone. Our dishes are prepared with fresh ingredients and
                  traditional recipes to ensure rich taste and quality in every
                  bite. You can order your favorite meals easily through Zomato
                  and Swiggy, or directly from our own mobile app – Bhimavaram
                  Delicious Biryanis App – for quicker service and exclusive
                  deals. Whether you're dining at home with family or planning a
                  gathering with friends, our food is perfect for every
                  occasion. We take pride in fast delivery, hygienic
                  preparation, and customer satisfaction. Experience the true
                  flavors of Bhimavaram right here in Visakhapatnam.
                </p>

                <div class="row g-4 mb-4">
                  <div class="col-sm-6">
                    <div class="d-flex algin-items-center border-color px-3">
                      <h1 class="flex-shrink-0 dispaly-5 text-color mb-0 section-title">
                        5
                      </h1>
                      <div class="ps-4">
                        <p class="mb-0 contentFont">Years of</p>
                        <h6 class="text-uppercase mb-0 contentFont">
                          Experience
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="d-flex algin-items-center border-color px-3">
                      <h1 class="flex-shrink-0 dispaly-5 text-color mb-0 section-title">
                        50+
                      </h1>
                      <div class="ps-4">
                        <p class="mb-0 contentFont">Popular</p>
                        <h6 class="text-uppercase mb-0 contentFont">Dishes</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Services*/}
        <div id="services" className="container-xxl py-1 pb-5">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div
                className="col-lg-3 col-sm-6 d-flex justify-content-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-card1">
                  <div className="text-center">
                    <div className="card-content">
                      <h5 className="section-title">
                        Master Chefs at Your Service
                      </h5>
                      <p className="contentFont">
                        Our team of world-class chefs brings passion and
                        creativity to the table, crafting gourmet meals that
                        delight every palate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-sm-6 d-flex justify-content-center wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="service-card1">
                  <div className="text-center">
                    <div className="card-content">
                      <h5 className="section-title">
                        Fresh & Quality Ingredients
                      </h5>
                      <p className="contentFont">
                        We source the finest, freshest ingredients to ensure
                        every dish bursts with flavor, guaranteeing an
                        unforgettable culinary experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-sm-6 d-flex justify-content-center wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-card1">
                  <div className="text-center">
                    <div className="card-content">
                      <h5 className="section-title">Online Order</h5>
                      <p className="contentFont">
                        From quick individual meals to large family feasts, we
                        tailor every order to match your cravings — ensuring
                        hot, delicious food delivered fresh to your doorstep.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-sm-6 d-flex justify-content-center wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="service-card1">
                  <div className="text-center">
                    <div className="card-content">
                      <h5 className="section-title">Round-the-Clock Support</h5>
                      <p className="contentFont">
                        Our dedicated team is available 24/7 to provide seamless
                        support, ensuring your event runs smoothly from start to
                        finish.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Testimonials*/}
        <div class="container-xxl py-5">
          <div class="container">
            <h1 className="text-center mb-4 section-title text-color">
              Our Customer's Feedback
            </h1>
            <SliderDown />
          </div>
        </div>

        {/* App */}
        <div
          className="container-fluid bg-brown text-white"
          style={{ height: "auto", padding: "20px 0" }}
        >
          <div className="row w-100 align-items-center">
            {/* Left Text */}
            <div className="col-md-6 col-12 text-start px-4 mb-3 mb-md-0 resto">
              <h3 className="mb-2">Order the food on</h3>
              <h3 className="mb-0">Bhimavaram Delicious Biryanis</h3>
            </div>

            {/* Right Image */}
            <div className="col-md-6 col-12 d-flex justify-content-center justify-content-md-end px-4">
              <img
                src={Google} // Replace with your actual image import
                alt="Delicious Biryani"
                className="google"
              />
            </div>
          </div>
        </div>

        {/* Contact Form*/}
        <div className="container-xxl bg-light py-2 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.280709502134!2d83.41410017463855!3d17.91905658727255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3959493083c79d%3A0x3d639e2bb4df0e1!2sDelicious%20Biryani&#39;s!5e0!3m2!1sen!2sin!4v1750441597130!5m2!1sen!2sin"
                  height="450"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location of Bhimavaram Delicious Biryanis on Google Maps"
                ></iframe>
              </div>

              <div className="col-lg-6 col-sm-12">
                <div className="contact-form-container">
                  <h4 className="section-title">Contact Us</h4>
                  <form
                    ref={formRef}
                    className="contact-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        aria-label="Your Name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Your Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        aria-label="Your Phone Number"
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
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        aria-label="Message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </form>
                  {result && (
                    <div className="alert alert-success mt-3">{result}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop />
      </div>
    </>
  );
};

export default Home;
