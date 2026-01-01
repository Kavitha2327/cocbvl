import About from "./About";
import Contact from "./Preachers";
import Events from "./Events";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Hero from "./Hero";
import "./HomePage.css";
import PrayersReq from "./PrayerReq";
import PreachersSection from "./Preachers";
import ServicesSection from "./ServicesSection";

export default function HomePage() {
  return (
    <div className="page-wrapper" >
      <Header />

      <Hero />

      <section id="about">
        <About />
      </section>

      <section id="events">
       <Events />
      </section>

      <section id="prayer">
       <PrayersReq />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="contact">
        <PreachersSection />
      </section>

      <Footer />
      
    </div>
  );
}
