import "./ServicesSection.css";

export default function ServicesSection() {
  const services = [
    {
      title: "Bikkavolu Bible College",
      subtitle: "School of Biblical Education",
      desc: "Providing deep scriptural training to raise faithful ministers and leaders for the Kingdom of God.",
      logo: "/images/BBC.jpeg",
    },
    {
      title: "Skinner's Garden",
      subtitle: "Orphans & Widows Care Centre",
      desc: "A safe home offering love, care, education and trade skills to orphans and widows.",
      logo: "/images/skinners-logo.png",
    },
    {
      title: "Global Vision Residential School",
      subtitle: "Recognised by Govt. of A.P.",
      desc: "Nurturing young minds with quality education, discipline and Christ-centered values.",
      logo: "/images/globalvision-logo.png",
    },
    {
      title: "Vishakha Valley Bible College",
      subtitle: "Samatha Nagar, Gajuwaka",
      desc: "Equipping believers with biblical knowledge and leadership training for effective ministry.",
      logo: "/images/VVBC.jpeg",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our Ministries & Services</h2>
        <p>
          Through education, care, and biblical training, we serve the community
          and build lives rooted in Christ.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-logo">
              <img src={s.logo} alt={s.title} />
            </div>

            <h3>{s.title}</h3>
            <span>{s.subtitle}</span>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
