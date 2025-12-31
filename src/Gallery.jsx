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
    "/images/m/img9.jpeg",
    "/images/m/img10.jpeg",
    "/images/m/img11.jpeg",
    "/images/m/img12.jpeg",
    "/images/m/img13.jpeg",
    "/images/m/img14.jpeg",
    "/images/m/img15.jpeg",
    "/images/m/img16.jpeg",
    "/images/m/img17.jpeg",
    "/images/m/img18.jpeg",
    "/images/m/img19.jpeg",
    "/images/m/img20.jpeg",
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
