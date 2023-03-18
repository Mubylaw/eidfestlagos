import { useEffect, useState } from "react";
import eidfest from "../assets/logo.svg";
import whatsapp from "../assets/whatsapp.svg";
import toggle from "../assets/toggle.svg";

function Hero() {
  const [active, setActive] = useState(false);

  const handleNav = () => {
    setActive(false);
  };

  return (
    <div className="hero">
      <div className="nav">
        <div className="top">
          <img src={eidfest} alt="EidFest Logo" />
        </div>
        <div className="mid">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#gallery" className="nav-link">
            EidFest Experience
          </a>
          <a href="#feature" className="nav-link">
            Feature
          </a>
          <a href="#faq" className="nav-link">
            FAQ
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
        <div className="bottom">
          <a
            href="https://selar.co/presaletickets"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Get Tickets
          </a>
          <img src={toggle} alt="" onClick={() => setActive(!active)} />
        </div>
      </div>
      <div className={`mob-nav ${active ? "" : "out"}`}>
        <a href="/" className="nav-link" onClick={handleNav}>
          Home
        </a>
        <a href="#about" className="nav-link" onClick={handleNav}>
          About
        </a>
        <a href="#gallery" className="nav-link" onClick={handleNav}>
          EidFest Experience
        </a>
        <a href="#feature" className="nav-link" onClick={handleNav}>
          Feature
        </a>
        <a href="#faq" className="nav-link" onClick={handleNav}>
          FAQ
        </a>
        <a href="#contact" className="nav-link" onClick={handleNav}>
          Contact
        </a>
      </div>
      <div className="tag">The fourth edition</div>
      <h1>Welcome</h1>
      <h1>To EidFest</h1>
      <p>
        An open space that delivers top-tier fun for Muslims to eat, drink,
        play, network and have a relaxing out-of-home experience in the spirit
        of the festive celebration
      </p>
      <a
        href="https://selar.co/presaletickets"
        target="_blank"
        rel="noreferrer"
        className="btn main"
      >
        Get Tickets
      </a>
      <a
        href="https://chat.whatsapp.com/JlliRj6VoVW0aZtO2OFhTt"
        className="quick"
      >
        <img src={whatsapp} alt="" />
      </a>
    </div>
  );
}

export default Hero;
