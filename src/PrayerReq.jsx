import "./PrayerRequest.css";

export default function PrayerRequest() {
  return (
    <section className="prayer-section">
      <div className="prayer-wrapper">

        <div className="prayer-text">
          <h2>Submit a Prayer Request</h2>
          <p>
            We believe in the power of prayer. Share your request with us and our
            prayer team will faithfully stand with you in prayer.
          </p>

          <blockquote>
            “Call to Me and I will answer you.” — Jeremiah 33:3
          </blockquote>
        </div>

        <form className="prayer-form">
          <input type="text" placeholder="Your Name (Optional)" />
          <input type="email" placeholder="Email (Optional)" />
          <textarea placeholder="Write your prayer request here..." rows="6"></textarea>
          <button type="submit">Send Prayer Request</button>
        </form>

      </div>
    </section>
  );
}
