import "./WeeklyEvents.css";

export default function WeeklyEvents() {
  const weekly = [
    {
      title: "Sunday Worship",
      time: "Every Sunday · 10:00 AM",
      place: "Church of Christ, Biccaavolu",
    },
    {
      title: "Youth Fellowship",
      time: "Every Sunday · 7:00 PM",
      place: "Church of Christ, Biccaavolu",
    },
    {
      title: "Women Fellowship",
      time: "Every Tuesday · 2:00 PM",
      place: "Church of Christ, Biccaavolu",
    },
    {
      title: "Wednesday Bible Study",
      time: "Every Wednesday · 6:30 PM",
      place: "Church of Christ, Biccaavolu",
    },
    {
      title: "Men Meeting",
      time: "Last Saturday · 7:00 PM",
      place: "Church of Christ, Biccaavolu",
    },
  ];

  return (
    <section id="weekly-events" className="weekly-minimal">
      <h2 className="title" >Weekly Gatherings</h2>

      <div className="weekly-list">
        {weekly.map((e, i) => (
          <div className="weekly-item" key={i}>
            <b><span className="weekly-title">{e.title}</span></b>
            <span className="weekly-time">{e.time}</span>
            {/* <span className="weekly-place">{e.place}</span> */}
          </div>
        ))}
      </div>
    </section>
  );
}
