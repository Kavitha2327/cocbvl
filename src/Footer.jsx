import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="connect-footer">
      <div className="overlay">
        <h2 className="footer-title">Get Connected</h2>
        <p className="footer-subtitle">
          Follow <strong>@churchofchristbvl</strong> to stay connected with
          Church of Christ Bikkavolu
        </p>

        <div className="social-links">
          <a href="https://www.instagram.com/coc_bikkavolu/" target="_blank" className="social-card">
            <span className="icon">📸</span>
            <span className="label">INSTAGRAM</span>
          </a>

          <a href="https://www.facebook.com/johndean.m" target="_blank" className="social-card">
            <span className="icon">f</span>
            <span className="label">FACEBOOK</span>
          </a>

          <a href="https://www.youtube.com/@cocbikkavolu" target="_blank"  className="social-card">
            <span className="icon">▶</span>
            <span className="label">YOUTUBE</span>
          </a>
        </div>
      </div>
    </section>
  );
}
