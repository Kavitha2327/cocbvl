import "./Events.css";
import WeeklyEvents from "./WeeklyEvents";

export default function Events() {
  const events = [
    {
      title: "Youth Night",
      date: "January 1st, 2026 6:30 PM",
      place: "Church of Christ – Biccavolu",
      img: "/images/y.png",
    },
    {
      title: "Youth Rally",
      date: "January 13,14,15, 2025",
      place: "Skinner's Garden, Singampally",
      img: "/images/3.jpeg",
    },
  ];

  return (
    <section id="events" className="events-section">
      <h2 className="events-title">Upcoming Events</h2>
      <div />

      <div className="events-grid">
        {events.map((e, i) => (
          <div className="event-card" key={i}>
            <div className="event-img">
              <img src={e.img} alt={e.title} />
            </div>

            <div className="event-body">
              <h3>{e.title}</h3>
              <p className="event-date">📅 {e.date}</p>
              <p className="event-place">📍 {e.place}</p>
            </div>
          </div>
        ))}
      </div>

      <WeeklyEvents />
    </section>
  );
}
