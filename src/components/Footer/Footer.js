import React from "react";
import logo from "../../assets/footerlogo.png";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="image-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="container">
        <span className="heading">Contact Us</span>
        <div className="details">
          <span>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </span>
          <span>example2020@gmail.com</span>
          <span>(904) 443-0343</span>
        </div>
      </div>
      <div className="container">
        <span className="heading">More</span>
        <div className="details">
          <span>About Us</span>
          <span>Products</span>
          <span>Career</span>
          <span>container Us</span>
        </div>
      </div>
      <div className="container">
          <span className="heading">Social Links</span>
          <div className="links">
            <AiFillInstagram />
            <AiOutlineTwitter />
            <AiFillFacebook />
          </div>
        <span className="copyright">© 2022 Food Truck Example</span>
        </div>
    </div>
  );
}

export default Footer;
