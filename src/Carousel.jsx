import { useState } from "react";
import "./Carousel.css";

const images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section className="carousel-section">
      <button className="carousel-arrow left" onClick={prev}>
        ‹
      </button>

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div className="carousel-slide" key={i}>
              <img src={src} alt={`slide-${i}`} />
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-arrow right" onClick={next}>
        ›
      </button>
    </section>
  );
}
