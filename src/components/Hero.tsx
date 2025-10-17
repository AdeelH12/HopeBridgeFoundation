import heroImage from "../assets/images/hero.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <img src={heroImage} alt="Nature and volunteers" className="hero-image" />

      <div className="hero-content">
        <h1>Welcome To HopeBridge Foundation</h1>
        <h2>Planting a Greener Future, One Tree at a Time</h2>
        <div className="hero-buttons">
          <button className="btn-donate">Donate Now</button>
          <button className="btn-join">Join a Project</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
