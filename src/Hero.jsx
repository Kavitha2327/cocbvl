import React, { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const images = ["/images/1.jpeg", "/images/2.jpeg", "/images/3.jpeg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="band-wrapper">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div className="carousel-slide" key={i}>
            <img src={img} alt={`slide-${i}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
