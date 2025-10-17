import treePlanting from "../assets/images/tree-planting.jpg";
import communityPark from "../assets/images/community-park.jpg";
import classRoom from "../assets/images/classroom.jpg";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner">
        <header className="projects-header">
          <h1>Our Projects</h1>
          <p>Creating a greener, healthier planet through action</p>
        </header>

        {/* Project 1 */}
        <div className="project-card">
          <img src={treePlanting} alt="Urban Tree Planting" />
          <div className="project-content">
            <h2>Urban Tree Planting</h2>
            <p>Greening Our Cities</p>
            <p>
              We organize tree planting events across urban neighborhoods to
              increase green spaces, improve air quality, and foster community
              engagement. Each tree planted is a step toward cleaner, healthier
              cities for everyone.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src={communityPark} alt="Community Park Restoration" />
          <div className="project-content">
            <h2>Community Park Restoration</h2>
            <p>Reviving Local Spaces</p>
            <p>
              Old parks and community gardens are given new life through clean-up
              drives, landscaping, and the installation of native plants. Our
              restoration projects provide safe, welcoming spaces for families
              and wildlife.
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src={classRoom} alt="Educational Workshops" />
          <div className="project-content">
            <h2>Educational Workshops</h2>
            <p>Inspiring the Next Generation</p>
            <p>
              We host workshops in schools and community centers to educate
              children and adults about environmental conservation, sustainable
              living, and the importance of biodiversity. Knowledge is the seed
              for lasting change.
            </p>
          </div>
        </div>

        <div className="projects-stats">
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
      </div>
    </section>
  );
}

export default Projects;
