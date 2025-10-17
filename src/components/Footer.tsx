import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2>HopeBridge Foundation</h2>
          <p>Planting a greener future, one tree at a time.</p>
        </div>

        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#getinvolved">Get Involved</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h5>Contact Us</h5>
          <p>Email: contact@hopebridge.org</p>
          <p>Phone: +44 1234 567890</p>
          <p>Follow us: @hopebridge</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 HopeBridge Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
