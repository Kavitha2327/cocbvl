import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <Header />

      <Hero />

      <Footer />
      {/* <Footer2 />
      <Footer3 /> */}
    </div>
  );
}
