import aboutBg from "../assets/aboutBg.svg";

function About() {
  return (
    <div className="about" id="about">
      <img src={aboutBg} alt="about" />
      <h1>About EidFest</h1>
      <p>
        EidFest Lagos is the ultimate EID festival and biggest experience in
        Lagos!
      </p>
      <p>
        EID el-Fitr is religiously celebrated by all Muslims around the world
        and by over 13 million Muslims in Lagos, Nigeria. They will gather in
        the spirit of love and unity of a common way of life and culture -Islam.
        This comes after fulfilling the 29/30 days of obligatory fasting in our
        holy month of Ramadan.
      </p>
      <p>
        Eidfest is a one-day event that aims to deliver a whole experience that
        celebrates and promotes peace, love, and unity within Muslims. Creating
        a space for Muslims to converge, bond, eat, drink, play, network, and
        have a fun-filled, relaxing out-of-home experience in the spirit of the
        festive celebration.
      </p>
    </div>
  );
}

export default About;
