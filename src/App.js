import React from "react";
import Gallery from "./gallery/Gallery";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
    // <SliderDown/>
  );
}

export default App;
