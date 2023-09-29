import homeImg from "../../assets/homeImg.png";
import logo from "../../assets/logo.png";
import vector from "../../assets/Vector1.png";
import "./Home.css";
import React from "react";

function Home() {
  return (
    <div className="home-container">
      <div className="left-container">
        <img src={logo} alt="logo" />
        <div className="text-container">
          <div className="heading">
            <span>Discover the</span>
            <span>
              <span className="mark">Best</span> Food
            </span>
            <span>and Drinks</span>
          </div>
          <div className="sub-heading">
            <span>Naturally made Healthcare Products for the </span>
            <span>better care & support of your body.</span>
          </div>
          <button className="l-btn">Explore Now!</button>
        </div>
      </div>
      <div className="right-container">
        <div className="image-container">
          <button className="r-btn">Get In Touch</button>
          <img src={homeImg} alt="home-img" />
          <img src={vector} alt="vector" />
        </div>
      </div>
    </div>
  );
}

export default Home;
