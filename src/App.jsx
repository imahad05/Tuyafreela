import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import {Routes, Route } from "react-router-dom";
import HowToWork from "./pages/HowToWork/HowToWork";
import ContactUs from "./pages/ContactUs/ContactUs";
import FAQs from "./pages/FAQs/FAQs";
import Login from "./pages/Login/Login";
import TermOfUses from "./pages/TermOfUses/TermOfUses";
import Register from "./pages/Register/Register";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <ScrollToTop />
      <Routes>
        //nav links
        <Route path="/" element={<Home />} />
        <Route path="/how-to-do-work" element={<HowToWork />} />
        // form links
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        // footer links
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/FAQ" element={<FAQs />} />
        <Route path="/term-of-uses" element={<TermOfUses />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
