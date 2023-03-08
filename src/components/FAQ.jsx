import footer from "../assets/footer.svg";

function FAQ() {
  return (
    <div className="faq" id="faq">
      <img src={footer} alt="" />
      <img src={footer} alt="" />
      <div className="tag">What to know</div>
      <h1>Frequently Asked Questions</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
        praesentium sunt recusandae repellat doloribus tempora.
      </p>
      <div className="accordion">
        <div className="header">How do I volunteer for EidFest</div>
        <div className="ans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          praesentium sunt recusandae repellat doloribus tempora.
        </div>
      </div>
      <div className="accordion">
        <div className="header">How do I volunteer for EidFest</div>
        <div className="ans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          praesentium sunt recusandae repellat doloribus tempora.
        </div>
      </div>
      <div className="accordion">
        <div className="header">How do I volunteer for EidFest</div>
        <div className="ans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          praesentium sunt recusandae repellat doloribus tempora.
        </div>
      </div>
    </div>
  );
}

export default FAQ;
