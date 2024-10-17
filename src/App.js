import React from "react";
import Gallery from "./gallery/Gallery";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Header/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
