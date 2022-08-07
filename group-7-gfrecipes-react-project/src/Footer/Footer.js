import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaPinterestP,
  FaArrowCircleUp,
} from "react-icons/fa";
import "./Footer.css";
import "./Scroll-arrow.js";

//Scroll to Top Behaviour
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

//Features of the footer
const Footer = () => (
  <div className="footer">
    <p className="contact">Contact Us</p>
    <p className="policy">Policies</p>
    <p className="easyeats"> &copy;EasyEats</p>
    <div className="pinterest">
      <FaPinterestP />
    </div>
    <div className="twitter">
      <FaTwitter />
    </div>
    <div className="insta">
      <FaInstagram />
    </div>
    <div className="facebook">
      <FaFacebook />
    </div>

    <div className="top">
      <FaArrowCircleUp className="scrollTop" onClick={scrollTop} />
    </div>
  </div>
);

export default Footer;
