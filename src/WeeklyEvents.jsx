import "./WeeklyEvents.css";

export default function WeeklyEvents() {
  const weekly = [
    {
      title: "Sunday School",
      time: "Sunday · 8:00 AM",
      place: "Bikkavolu",
    },
    {
      title: "Sunday Worship",
      time: "Sunday · 10:00 AM",
      place: "Bikkavolu",
    },
    {
      title: "Youth Fellowship",
      time: "Sunday · 7:00 PM",
      place: "Bikkavolu",
    },
    {
      title: "Sister's Fellowship",
      time: "Tuesday · 2:00 PM",
      place: "Bikkavolu",
    },
    {
      title: "Wednesday Bible Study",
      time: "Wednesday · 7:00 PM",
      place: "Bikkavolu",
    },
    {
      title: "Sunday School",
      time: "Sunday · 9:00 AM",
      place: "Anaparthi",
    },
    {
      title: "Sunday Worship",
      time: "Sunday · 7:00 AM",
      place: "Anaparthi",
    },
    {
      title: "Sister's Fellowship",
      time: "Tuesday · 7:00 PM",
      place: "Anaparthi",
    },
    {
      title: "Sunday School",
      time: "Sunday · 9:00 AM",
      place: "Singampalli",
    },
    {
      title: "Sunday Worship",
      time: "Sunday · 10:00 AM",
      place: "Singampalli",
    },
    {
      title: "Sister's Fellowship",
      time: "Tuesday · 7:00 PM",
      place: "Singampalli",
    },
  ];

  return (
    <section id="weekly-events" className="weekly-minimal">
      <h2 className="title">Weekly Gatherings</h2>

      <div className="weekly-list">
        {weekly.map((e, i) => (
          <div className="weekly-item" key={i}>
            <b>
              <span className="weekly-title">{e.title}</span>
            </b>
            <span className="weekly-time">{e.time}</span>
            <span className="weekly-place">{e.place}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
