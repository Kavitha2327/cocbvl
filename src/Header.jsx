import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Banner Section */}
      <div className="banner-wrapper">
        <img
          src="/images/banner copy.jpg"
          alt="Church of Christ Biccavolu Banner"
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
          {/* <nav className="nav">
            <a href="#about">About Us</a>
            <a href="#events">Events</a>
            <a href="#prayer">Prayer Requests</a>
            <a href="#gallery">Gallery</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact Us</a>
          </nav> */}

          <nav className={`nav ${open ? "show" : ""}`}>
            <a href="#about" onClick={() => setOpen(false)}>
              About Us
            </a>
            <a href="#events" onClick={() => setOpen(false)}>
              Events
            </a>
            <a href="#prayer" onClick={() => setOpen(false)}>
              Prayer Requests
            </a>
            <a href="#gallery" onClick={() => setOpen(false)}>
              Gallery
            </a>
            <a href="#services" onClick={() => setOpen(false)}>
              Services
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact Us
            </a>
          </nav>

          {/* Button */}
          <div className="cta">
            <button className="start-btn">Login</button>
          </div>
          {/* Hamburger Menu for Mobile */}
          <div className="hamburger" onClick={() => setOpen(prev => !prev)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
}
