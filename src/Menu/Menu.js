import React, { useState } from "react";
import "./Menu.css";

// import images from src/assets
import MenuImg1 from "../assets/Menu March 2025-01.jpg";
import MenuImg2 from "../assets/Menu March 2025-02.jpg";
import Header from "../Header/Header";

const images = [MenuImg1, MenuImg2];

function Menu() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div>
        <Header />
      <div className="menu-container">
        <div className="menu-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`menu-${index}`}
              className="menu-img"
              onClick={() => setFullscreenImage(img)}
            />
          ))}
        </div>

        {fullscreenImage && (
          <div className="fullscreen" onClick={() => setFullscreenImage(null)}>
            <img src={fullscreenImage} alt="fullscreen" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
