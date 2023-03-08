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
          <a href="/" className="btn">
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
      <div className="tag">The third edition</div>
      <h1>Welcome</h1>
      <h1>To EidFest</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
        necessitatibus sapiente officiis voluptatem saepe quaerat vero ex magni
        incidunt tempore dolor inventore non, atque fuga reprehenderit
        dignissimos qui recusandae itaque.
      </p>
      <a href="/" className="btn main">
        Get Tickets
      </a>
      <a href="/" className="quick">
        <img src={whatsapp} alt="" />
      </a>
    </div>
  );
}

export default Hero;
