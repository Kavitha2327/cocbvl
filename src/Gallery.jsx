import "./Gallery.css";

export default function Gallery() {
  const images = [
    "/images/m/img1.jpeg",
    "/images/m/img2.jpeg",
    "/images/m/img3.jpeg",
    "/images/m/img4.jpeg",
    "/images/m/img5.jpeg",
    "/images/m/img6.jpeg",
    "/images/m/img7.jpeg",
    "/images/m/img8.jpeg",
  ];

  return (
    <section className="gallery-marquee">
      <div className="marquee-clip">
        <div className="marquee-track">
          {[...images, ...images].map((img, i) => (
            <img key={i} src={img} alt={`gallery-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
