import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      {/* Banner Section */}
      <div className="banner-wrapper">
        <img
          src="/images/banner1.jpg"
          alt="Church of Christ Biccaavolu Banner"
          className="banner-img"
        />
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <img
              src="/images/logo.jpeg"
              alt="Family Church Logo"
              className="logo-img"
            />
            <span className="logo-text">
              <strong>CHURCH </strong>OF CHRIST
            </span>
          </div>

          {/* Navigation */}
          <nav className="nav">
            <a href="#about">About Us</a>
            <a href="#events">Events</a>
            <a href="#prayer">Prayer Requests</a>
            <a href="#gallery">Gallery</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact Us</a>
          </nav>

          {/* Button */}
          <div className="cta">
            <button className="start-btn">Login</button>
          </div>
        </div>
      </header>
    </>
  );
}
