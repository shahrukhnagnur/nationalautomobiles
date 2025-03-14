import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./footer";
import WhatsappIcon from "./whatsappicon";
import Parts from "./parts";


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/whatsappicon" element={<WhatsappIcon />} />
          <Route path="/parts" element={<Parts />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
};

export default App;
