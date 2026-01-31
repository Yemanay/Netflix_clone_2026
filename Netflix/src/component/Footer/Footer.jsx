import React from "react";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="container">
        <ul>
          <ul className="social_links">
            <li>
              <TiSocialFacebookCircular />
            </li>
            <li>
              <FaInstagram />{" "}
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
          <li>Audio Description</li>
          <li>investor Relations</li>
          <li>Legal Notice</li>
          <li className="service_code">Service Code</li>
          <li>&copy;1997-2026 Netflix, inc.</li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookies References</li>
        </ul>
        <ul>
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Informations</li>
        </ul>
        <ul>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
