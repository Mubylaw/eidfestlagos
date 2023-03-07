import eidfest from "../assets/logo.svg";

function Hero() {
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
          <a href="/" className="nav-link">
            About
          </a>
          <a href="/" className="nav-link">
            EidFest Experience
          </a>
          <a href="/" className="nav-link">
            Feature
          </a>
          <a href="/" className="nav-link">
            FAQ
          </a>
          <a href="/" className="nav-link">
            Contact
          </a>
        </div>
        <div className="bottom">
          <a href="/" className="btn">
            Get Tickets
          </a>
        </div>
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
    </div>
  );
}

export default Hero;
