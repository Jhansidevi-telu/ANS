import React, { useEffect, useState } from "react";
import g5 from "../images/IMG-20241011-WA0010.jpg";
import img1 from "../assets/2151182444.jpg";
import img2 from "../assets/img4.jpg";
import img3 from "../images/IMG-20241011-WA0024.jpg";
import videoSrc from "../assets/home-video.mp4";
import logoSrc from "../assets/ANSLogo.png";
import Header from "../Header/Header";
import "../Header/Header.css";
import "./Home.css";
import SliderDown from "../Header/Slider";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import ScrollToTop from "../scrolltop/ScrollToTop";

const Home = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setName("");
    setPhone("");
    setMessage("");
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
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
        <div className="video-container position-relative">
          <video className="d-block w-100 video-blur" autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="video-text-overlay">
            <img src={logoSrc} alt="Logo" className="logo-img" />
            <div className="welcome-text">
              Welcome to Anusha Catering and Suppliers
            </div>
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
                    <div class="d-flex algin-items-center border-color px-3">
                      <h1 class="flex-shrink-0 dispaly-5 text-color mb-0 ">
                        15
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
              </div>
            </div>
          </div>
        </div>
        {/*Services*/}
        <div
          id="services"
          className="container-xxl py-1 align-items-center pb-5"
        >
          <div className="container">
            {/* <h3 className="section-title mb-5 content-title ">
              Our Commitment to Excellence
            </h3> */}
            <div className="row g-4 justify-content-center">
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
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
                className="col-lg-3 col-sm-6 wow fadeInUp"
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
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-card1">
                  <div className="text-center">
                    <div className="card-content">
                      <h5 className="section-title">Tailored Event Planning</h5>
                      <p className="contentFont">
                        From intimate gatherings to large-scale events, we
                        tailor our services to meet your vision and ensure
                        flawless execution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
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
        {/* Organized */}
        <div className="bg-body-tertiary py-5">
          <h1 className="text-center mb-4 section-title text-color">
            Our Services
          </h1>
          <h3 className="text-center mb-4 contentFont">
            Explore our diverse offerings to create a seamless event experience
          </h3>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="service-card d-flex flex-column">
                  <img
                    src={img1}
                    className="card-img-top flex-fill"
                    alt="Service 1"
                  />
                  <div className="card-body text-center">
                    <h3 className="card-title section-title ">Catering</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="service-card d-flex flex-column">
                  <img
                    src={img2}
                    className="card-img-top flex-fill"
                    alt="Service 2"
                  />
                  <div className="card-body text-center">
                    <h3 className="card-title section-title">Suppliers</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="service-card d-flex flex-column">
                  <img
                    src={img3}
                    className="card-img-top flex-fill"
                    alt="Service 3"
                  />
                  <div className="card-body text-center">
                    <h3 className="card-title section-title ">Lighting</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="service-card d-flex flex-column">
                  <img
                    src={g5}
                    className="card-img-top flex-fill"
                    alt="Service 4"
                  />
                  <div className="card-body text-center">
                    <h3 className="card-title section-title">
                      Wedding Pavilion
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Testimonials*/}
        <div class="container-xxl py-5">
          <div class="container">
            <h1 className="text-center mb-4 section-title text-dark">
              Our Customer's Feedback
            </h1>
            <SliderDown />
          </div>
        </div>
        {/* Contact */}
        <div
          id="contact"
          className="container-fluid p-4 d-none d-md-block"
          style={{ backgroundColor: "#8ac027" }}
        >
          <div className="container d-flex justify-content-between align-items-center text-white">
            {/* Heading and Subheading Section */}
            <div>
              <h5 className="section-title ff-secondary fw-normal mb-1 fs-2">
                Get in Touch With Us Today!
              </h5>
            </div>

            {/* Contact Details Section */}
            <div className="d-flex">
              {/* Mobile Section */}
              <div className="d-flex flex-column align-items-center mr-4">
                <h6 className="fw-bold mb-1">
                  <FaPhoneAlt className="mr-2" /> Call
                </h6>
                <p className="mb-0">+123-456-7890</p>
              </div>

              {/* Divider */}
              <div
                className="divider mx-3"
                style={{
                  width: "2px",
                  height: "50px",
                  backgroundColor: "#fff",
                }}
              ></div>

              {/* Address Section */}
              <div className="d-flex flex-column align-items-center mr-4">
                <h6 className="fw-bold mb-1">
                  <FaMapMarkerAlt className="mr-2" /> Visit
                </h6>
                <p className="mb-0">123 Street Name, City, Country</p>
              </div>

              {/* Divider */}
              <div
                className="divider mx-3"
                style={{
                  width: "2px",
                  height: "50px",
                  backgroundColor: "#fff",
                }}
              ></div>

              {/* Email Section */}
              <div className="d-flex flex-column align-items-center mr-4">
                <h6 className="fw-bold mb-1">
                  <FaEnvelope className="mr-2" /> Email
                </h6>
                <p className="mb-0">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form*/}
        <div className="container-xxl bg-light py-2 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.7305905916432!2d83.34257537421958!3d17.804354390661263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11439a67374d7327%3A0x46ea10d91ee0640d!2sAnusha%20Caterers%20%26%20Lighting%20Suppliers!5e0!3m2!1sen!2sin!4v1728241149958!5m2!1sen!2sin"
                  height="450"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="contact-form-container">
                  <h4 className="section-title">Contact Us</h4>
                  <form className="contact-form" onSubmit={handleSubmit}>
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
                        type="tel" // Change type to 'tel'
                        className="form-control"
                        id="phone" // Update the id to 'phone'
                        placeholder="Enter your phone number" // Change placeholder text
                        value={phone} // Update state variable to store phone number
                        onChange={(e) => setPhone(e.target.value)} // Update state handling
                        required
                        aria-label="Your Phone Number" // Update aria-label
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
                    <button type="submit" className="btn ">
                      Send Message
                    </button>
                  </form>
                  {submitted && (
                    <div className="alert alert-success mt-3">
                      Message sent successfully!
                    </div>
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
