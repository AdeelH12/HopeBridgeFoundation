import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <header className="about-header">
          <h1 className="about-title">About Us</h1>
          <p className="about-lead">
            HopeBridge Foundation is dedicated to creating a greener, healthier
            planet through community action and environmental projects.
          </p>
        </header>

        <div className="about-body">
          <p>
            We believe that every small action can make a big difference. From
            planting trees to restoring local parks, our goal is to empower
            communities to take care of the environment and build a sustainable
            future.
          </p>

          <p>
            Through volunteer programs, educational initiatives, and
            collaborative projects, we connect people with nature and inspire
            positive change. Whether it’s organizing clean-up drives or
            planting new trees, every project helps bridge the gap between
            people and the planet.
          </p>

          <p>
            Climate change and environmental degradation affect us all. By
            joining HopeBridge Foundation, you become part of a movement that
            creates tangible impact for the environment and communities
            worldwide.
          </p>
        </div>

        <div className="about-stats" aria-label="Impact statistics">
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Trees Planted</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">200+</div>
            <div className="stat-label">Active Volunteers</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">15</div>
            <div className="stat-label">Community Projects</div>
          </div>
        </div>

        <div className="about-cta">
          <a className="btn btn-primary" href="/getinvolved">Join a Project</a>
          <a className="btn btn-secondary" href="/donate">Donate</a>
        </div>
      </div>
    </section>
  );
}

export default About;
