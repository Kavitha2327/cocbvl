import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-banner">
      <div className="contact-overlay">
        <h2>Contact Our Church</h2>

        <div className="contact-card">
          <div className="contact-left">
            <h3>Church of Christ – Biccaavolu</h3>
            <p>
              Near Main Road, Biccaavolu<br />
              East Godavari, Andhra Pradesh – 533343
            </p>

            <p>
              📞 Church Office<br />
              ✉ churchofchristbiccaavolu@gmail.com
            </p>
          </div>

          <div className="contact-right">
            <h3>Contact Information</h3>

            <p>
              <strong>M John Dean</strong><br />
              📞 +91 91234 56789
            </p>

            <p>
              <strong>G Chakravarthi</strong><br />
              📞 +91 99887 66554
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
