import "./GetInvolved.css";

function GetInvolved() {
  return (
    <section className="getinvolved-section" id="getinvolved">
      <div className="getinvolved-inner">
        <h1>Get Involved</h1>
        <p className="lead">
          Be part of the movement to create a greener, healthier planet. Your time, energy, and support can make a real difference.
          Together, we can bridge the gap between communities and nature.
        </p>
        <h3>Ways to Get Involved:</h3>
        <ol>
          <li>
            <h5>Volunteer</h5>
            <p>
              Join our tree planting events, park restorations, or community clean-ups. 
              Every helping hand counts in making our neighborhoods greener and more sustainable.
            </p>
          </li>
          <li>
            <h5>Donate</h5>
            <p>
              Support our projects financially to help us reach more communities, plant more trees, and organize educational programs. 
              Every contribution brings us closer to a sustainable future.
            </p>
          </li>
          <li>
            <h5>Attend Workshops & Events</h5>
            <p>
              Participate in our educational programs and community workshops. 
              Learn about environmental conservation, sustainable living, and biodiversity while making meaningful connections.
            </p>
          </li>
          <li>
            <h5>Partnerships</h5>
            <p>
              Collaborate with us as a local business, school, or organization. 
              Together, we can create larger environmental impact and inspire communities to take action.
            </p>
          </li>
        </ol>

        <div className="getinvolved-cta">
          <a className="btn btn-primary" href="/getinvolved">
            Sign Up to Volunteer
          </a>
          <a className="btn btn-secondary" href="/donate">
            Donate Now
          </a>
        </div>

        <div className="about-stats" aria-label="Impact statistics" style={{ marginTop: "40px" }}>
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

export default GetInvolved;
