import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-block">
      <h2>Contact Our Church</h2>

      <div className="contact-content">
        <div className="contact-left">
          <h3>Church of Christ – Biccaavolu</h3>
          <p>
            Near Main Road, Biccaavolu<br />
            East Godavari, Andhra Pradesh – 533343
          </p>

          <p>
            📞 Church Office: +91 98765 43210<br />
            ✉ Email: churchofchristbiccaavolu@gmail.com
          </p>
        </div>

        <div className="contact-right">
          <h3>Pastors</h3>

          <p>
            <strong>Bro. Samuel Rao</strong><br />
            Senior Pastor – 📞 +91 91234 56789
          </p>

          <p>
            <strong>Bro. Daniel Kumar</strong><br />
            Associate Pastor – 📞 +91 99887 66554
          </p>
        </div>
      </div>
    </section>
  );
}
