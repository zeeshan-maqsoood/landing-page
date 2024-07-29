import React, { useState } from "react";
import "./App.css";
import Logo from "../src/images/logo.png";
import rightImage from "../src/images/pexels-vjapratama-935789.jpg";
import { IoMdMenu } from "react-icons/io";

const HomePage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="container">
        <div className="navContainer">
          <nav className="nav">
            <div className="logo">
              <img src={Logo} width={"100px"} height={"40px"} alt="" />
            </div>
            <div className="list">
              <ul className="links">
                <li className="menu">Home</li>
                <li className="menu">About</li>
                <li className="menu">Services</li>
                <li className="menu">Learn</li>
              </ul>
            </div>
            <div className="btn">
              <button className="logout">Gift Finder</button>
            </div>

            <div className="icondiv" onClick={toggleMenu}>
              <IoMdMenu className="icon" />
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="menuMobile">
                <ul className="menuMobileLinks">
                  <li className="menuMobileItem">Home</li>
                  <li className="menuMobileItem">About</li>
                  <li className="menuMobileItem">Services</li>
                  <li className="menuMobileItem">Learn</li>
                </ul>
              </div>
            )}
          </nav>
        </div>
        {/* left side */}
        <div className="layout-container">
          <div className="left-side">
            <h1 style={{ maxWidth: "378px", fontSize: "56px" }}>
              Find a gift for your wife and girlfriend
            </h1>
            <p style={{ maxWidth: "60%", lineHeight: "28px" }}>
              Struggling to find a gift for your wife or girlfriend? No Problem
            </p>
            <div>
              <button className="button">Find Gift Now</button>
            </div>
          </div>

          <div className="right-side">
            <img src={rightImage} alt="Your Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
