import { useState } from "react";
import "./Navbar.css";

function NavBar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home" onClick={() => setOpen(false)}>
          HopeBridge Foundation
        </a>
      </div>

      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>

        </li>
        <li>
          <a href="#getinvolved" onClick={() => setOpen(false)}>
            Get Involved
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </li>
        <li>
          <a
            href="#getinvolved"
            onClick={() => setOpen(false)}
            className="donate"
          >
            Donate
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
