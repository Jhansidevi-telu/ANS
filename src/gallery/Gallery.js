import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.webp";
import singleVideo from "../assets/20756701-hd_1920_1080_25fps.mp4"; // Update this with your video file path

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
  
  const videoRef = useRef(null);

  const getImg = (imgSrc) => {
    setModel(true);
    setTempImgSrc(imgSrc);
  };

  const closeModal = () => {
    setModel(false);
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.play();
    }
  }, []);

  return (
    <>
      {/* Banner section with the single video */}
      <div className="banner">
        <video className="banner-video" ref={videoRef} autoPlay muted loop>
          <source src={singleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
