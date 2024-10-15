import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import image1 from "../images/IMG-20241011-WA0010.jpg";
import image2 from "../images/IMG-20241011-WA0009.jpg";
import image3 from "../images/IMG-20241011-WA0007.jpg";
import image4 from "../images/IMG-20241011-WA0006.jpg";
import image5 from "../images/IMG-20241011-WA0005.jpg";
import image6 from "../images/IMG-20241011-WA0004.jpg";
import image7 from "../images/FB_IMG_1728618423015.jpg";
import image8 from "../images/FB_IMG_1728618428267.jpg";
import image9 from "../images/IMG-20241011-WA0011.jpg";
import image10 from "../images/IMG-20241011-WA0012.jpg";
import image11 from "../images/IMG-20241011-WA0014.jpg";
import image12 from "../images/IMG-20241011-WA0017.jpg";
import image13 from "../images/IMG-20241011-WA0022.jpg";
import image14 from "../images/IMG-20241011-WA0023.jpg";
import image15 from "../images/IMG-20241011-WA0024.jpg";
import image16 from "../images/IMG-20241011-WA0031.jpg";
import image17 from "../images/IMG-20241011-WA0032.jpg";
import image18 from "../images/IMG-20241011-WA0034.jpg";
import image19 from "../images/IMG-20241011-WA0036.jpg";
import image20 from "../images/IMG-20241011-WA0038.jpg";
import image21 from "../images/IMG-20241011-WA0041.jpg";
import image22 from "../images/IMG-20241011-WA0044.jpg";
import singleVideo from "../gallery/VID-20240707-WA0316.mp4";
import ScrollToTop from "../scrolltop/ScrollToTop";

const Gallery = () => {
  const data = [
    { id: 1, imgSrc: image1 },
    { id: 2, imgSrc: image2 },
    { id: 3, imgSrc: image3 },
    { id: 4, imgSrc: image4 },
    { id: 5, imgSrc: image5 },
    { id: 6, imgSrc: image6 },
    { id: 7, imgSrc: image7 },
    { id: 8, imgSrc: image8 },
    { id: 9, imgSrc: image9 },
    { id: 10, imgSrc: image10 },
    { id: 11, imgSrc: image11 },
    { id: 12, imgSrc: image12 },
    { id: 13, imgSrc: image13 },
    { id: 14, imgSrc: image14 },
    { id: 15, imgSrc: image15 },
    { id: 16, imgSrc: image16 },
    { id: 17, imgSrc: image17 },
    { id: 18, imgSrc: image18 },
    { id: 19, imgSrc: image19 },
    { id: 20, imgSrc: image20 },
    { id: 21, imgSrc: image21 },
    { id: 22, imgSrc: image22 },
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
            <img
              src={item.imgSrc}
              style={{ width: "100%" }}
              alt="Gallery Item"
            />
          </div>
        ))}
      </div>
      <ScrollToTop />
    </>
  );
};

export default Gallery;
