import React from "react";
import "./Hero.css";
import PhotoCarousel from "./Carousel";

export default function Hero() {
  return (
    <>
      <section className="hero-section">
        <h1 className="hero-title">CHURCH OF CHRIST</h1>
        <p className="hero-subtitle">Bikkavolu</p>
       

        <div className="hero-buttons">
          <button className="btn outline">ABOUT US</button>
          <button className="btn outline">UPCOMING EVENTS</button>
        </div>
      </section>
      <section className="band-wrapper">
        <div className="photo-row">
          <div className="photo-card">
            <img src="/images/1.jpeg" alt="Poster 1" />
          </div>
          <div className="photo-card">
            <img src="/images/2.jpeg" alt="Poster 2" />
          </div>
          <div className="photo-card">
            <img src="/images/3.jpeg" alt="Poster 3" />
          </div>
        </div>
      </section>
      {/* <PhotoCarousel /> */}
    </>
  );
}
