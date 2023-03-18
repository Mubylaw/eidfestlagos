import eidfest from "../assets/logo.svg";
import footerLogo from "../assets/footer.svg";
import foowhat from "../assets/foowhat.svg";
import twitter from "../assets/twitter.svg";
import email from "../assets/email.svg";
import insta from "../assets/insta.svg";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="logo">
        <img src={footerLogo} className="bg" alt="" />
        <img src={eidfest} alt="" />
      </div>
      <div className="mid">
        <div className="header">Quick Links</div>
        <a href="/" className="foo-link">
          Home
        </a>
        <a href="/about" className="foo-link">
          About
        </a>
        <a href="/gallery" className="foo-link">
          Eidfest Experience
        </a>
        <a href="/feature" className="foo-link">
          Feature
        </a>
        <a href="/faq" className="foo-link">
          FAQ
        </a>
      </div>
      <div className="mid">
        <div className="header">Contact</div>
        <a href="tel:+2348114047305" className="foo-link">
          08114047305
        </a>
        <div className="foo-link">eidfestlagos@gmail.com</div>
        <div className="foo-link">Lagos Nigeria</div>
      </div>
      <div className="mid social">
        <div className="header">Social Links</div>
        <div className="media">
          <a href="https://chat.whatsapp.com/JlliRj6VoVW0aZtO2OFhTt">
            <img src={foowhat} alt="" />
          </a>
          <a href="https://twitter.com/eidfestlagos_?s=21&t=fXkX8B4Of_7IlkjHBoTBDw">
            <img src={twitter} alt="" />
          </a>
          <a href="mailto:eidfestlagos@gmail.com?subject=As%20Salam%20Alaykum!">
            <img src={email} alt="" />
          </a>
          <a href="https://instagram.com/eidfestlagos?igshid=YmMyMTA2M2Y=">
            <img src={insta} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
