import React, { useState } from "react";
import "./Gallery.css";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.webp";
import bannerImg from "../assets/gallery-banner.jpg"; // Import your banner image here

const Gallery = () => {
  const data = [
    { id: 1, imgSrc: image1 },
    { id: 2, imgSrc: image2 },
    { id: 3, imgSrc: image3 },
    { id: 4, imgSrc: image4 },
    { id: 5, imgSrc: image1 },
    { id: 6, imgSrc: image5 },
    { id: 7, imgSrc: image2 },
    { id: 8, imgSrc: image5 },
    { id: 9, imgSrc: image2 },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setModel(true);
    setTempImgSrc(imgSrc);
  };

  const closeModal = () => {
    setModel(false);
  };

  return (
    <>
      {/* Banner section */}
      <div className="banner">
        <img src={bannerImg} alt="Gallery Banner" className="banner-img" />
        <h1 className="banner-text">Welcome to the Image Gallery</h1>
      </div>

      <div className={model ? "model open" : "model"} onClick={closeModal}>
        <img
          src={tempimgSrc}
          alt="Enlarged View"
          onClick={(e) => e.stopPropagation()} // Prevent the modal from closing when clicking on the image
        />
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
      </div>

      <div className="gallery">
        {data.map((item, index) => (
          <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
            <img src={item.imgSrc} style={{ width: "100%" }} alt="Gallery Item" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
