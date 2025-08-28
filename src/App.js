import React from "react";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Header/Footer/Footer";
import TermsAndConditions from "./Terms-Conditions/termsAndConditions";
import RefundPolicy from "./Refund/refundPolicy";
import Menu from "./Menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="/refundPolicy" element={<RefundPolicy />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
