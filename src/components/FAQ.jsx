import footer from "../assets/footer.svg";

function FAQ() {
  return (
    <div className="faq" id="faq">
      <img src={footer} alt="" />
      <img src={footer} alt="" />
      <div className="tag">What to know</div>
      <h1>Frequently Asked Questions</h1>
      <p>
        We are so excited to celebrate this joyous occasion with our community.
        To help you prepare for the festivities, we have put together this FAQ
        section to answer some common questions.
      </p>
      <div className="accordion">
        <div className="header">How can I participate at EidFest</div>
        <div className="ans">
          Participation at EidFest can be by attendee, vendor or sponsorship as
          an organization.
        </div>
      </div>
      <div className="accordion">
        <div className="header">Who can attend EidFest</div>
        <div className="ans">
          Families, couples, young individuals and kids can attend EidFest.
          Anyone can.
        </div>
      </div>
      <div className="accordion">
        <div className="header">
          What are other activities to enjoy at EidFest
        </div>
        <div className="ans">
          EidTreat, EidRadio, EidStage, keids Arena, Eid Market, EidFun, Open
          Mic, Games sphere, Art Exhibition, Live Contests, EidFlex and more!
        </div>
      </div>
    </div>
  );
}

export default FAQ;
