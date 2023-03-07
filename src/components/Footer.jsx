import eidfest from "../assets/logo.svg";
import footerLogo from "../assets/footer.svg";
import foowhat from "../assets/foowhat.svg";
import twitter from "../assets/twitter.svg";
import email from "../assets/email.svg";
import insta from "../assets/insta.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={footerLogo} className="bg" alt="" />
        <img src={eidfest} alt="" />
      </div>
      <div className="mid">
        <div className="header">Quick Links</div>
        <a href="/" className="foo-link">
          Home
        </a>
        <a href="/" className="foo-link">
          About
        </a>
        <a href="/" className="foo-link">
          Eidfest Experience
        </a>
        <a href="/" className="foo-link">
          Feature
        </a>
        <a href="/" className="foo-link">
          FAQ
        </a>
      </div>
      <div className="mid">
        <div className="header">Contact</div>
        <div className="foo-link">08114047305</div>
        <div className="foo-link">eidfestlagos@gmail.com</div>
        <div className="foo-link">
          Lighthouse estate, Off Orchid Hotel Road, Lekki, Lagos
        </div>
      </div>
      <div className="mid social">
        <div className="header">Social Links</div>
        <div className="media">
          <a href="/">
            <img src={foowhat} alt="" />
          </a>
          <a href="/">
            <img src={twitter} alt="" />
          </a>
          <a href="/">
            <img src={email} alt="" />
          </a>
          <a href="/">
            <img src={insta} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
