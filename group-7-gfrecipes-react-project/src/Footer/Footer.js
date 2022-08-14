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
    <div className="row">
      <div className="col-4">
        <div className="row">
          <div className="col">
            <p className="contact">Contact Us</p>
          </div>
          <div className="col">
            <p className="policy">Policies</p>
          </div>
        </div>
      </div>
      <div className="col-4">
        <p className="easyeats"> &copy;EasyEats</p>
      </div>
      <div className="col-4">
        <div className="row">
          <div className="col">
            <div className="pinterest">
              <a
                className="pinterest"
                href="https://www.pinterest.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="twitter">
              <a
                className="twitter"
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="insta">
              <a
                className="insta"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="facebook">
              <a
                className="facebook"
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="top">
              <FaArrowCircleUp className="scrollTop" onClick={scrollTop} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
