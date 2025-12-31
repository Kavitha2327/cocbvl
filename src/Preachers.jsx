import "./PreacherSection.css";

export default function PreachersSection() {
  const preachers = [
    {
      name: "M. Samuel Raj",
      role: "Founder",
      img: "/images/1.jpeg",
      desc: "A visionary shepherd who laid the foundation of our church through faith, sacrifice, and unwavering obedience to God’s calling.",
      btn: "VIEW PROFILE",
    },
    {
      name: "M. John Dean",
      role: "Preacher & Youth Minister",
      img: "/images/2.jpeg",
      desc: "Passionately guiding the next generation to grow in Christ with clarity, compassion, and a heart for revival.",
      btn: "MEET HIM",
    },
    {
      name: "G. Chakravarthi",
      role: "Co-Preacher",
      img: "/images/3.jpeg",
      desc: "Faithfully supporting the ministry with powerful teaching, prayerful leadership, and a servant’s heart.",
      btn: "CONNECT",
    },
  ];

  return (
    <section className="preachers-section">
      <div className="preachers-intro">
        <h2>Meet Our Preachers</h2>
        <p>
          At the heart of our church is a team of devoted servants called by God
          to lead, teach, and care for His people. Each of our preachers carries
          a unique anointing and passion for building lives rooted in Christ.
        </p>
      </div>

      <div className="preachers-grid">
        {preachers.map((item, index) => (
          <div className="preacher-card" key={index}>
            <img src={item.img} alt={item.name} />
            <div className="overlay">
              <h3>{item.name}</h3>
              <span style={{"fontWeight":"500"}}>{item.role}</span>
              <p style={{"fontWeight":"500"}}>{item.desc}</p>
              {/* <button>{item.btn}</button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
