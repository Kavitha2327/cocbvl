import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img
            src="../public/images/logo.jpeg"
            alt="Family Church Logo"
            className="logo-img"
          />
          <span className="logo-text">
            <strong>CHURCH </strong>OF CHRIST
          </span>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <a href="#">About Us</a>
          <a href="#">Watch</a>
          <a href="#">Get Connected</a>
          <a href="#">Events</a>
          <a href="#">More</a>
        </nav>

        {/* Button */}
        <div className="cta">
          <button className="start-btn">Login</button>
        </div>
      </div>
    </header>
  );
}
