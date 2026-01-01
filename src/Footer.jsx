import "./Footer.css";

export default function Footer() {
  return (
    <section id="contact" className="contact-footer-banner">
      <div className="contact-footer-overlay">

        {/* CONTACT CARD */}
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
              📞 +91 9989922844
            </p>

            <p>
              <strong>G Chakravarthi</strong><br />
              📞 +91 8106920239
            </p>
          </div>
        </div>

        {/* GET CONNECTED */}
        <div className="connect-section">
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

            <a href="https://www.youtube.com/@cocbikkavolu" target="_blank" className="social-card">
              <span className="icon">▶</span>
              <span className="label">YOUTUBE</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
