function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="tag">Get in Touch</div>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
        praesentium sunt recusandae repellat doloribus tempora.
      </p>
      <div className="form">
        <div className="group">
          <div className="input-wrapper">
            <input type="text" placeholder="Ex: Muhammad" id="fname" />
            <label htmlFor="fname">First Name</label>
          </div>
          <div className="input-wrapper">
            <input type="text" placeholder="Ex: Yusuf" id="lname" />
            <label htmlFor="lname">Last Name</label>
          </div>
        </div>
        <div className="group">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Ex: muhammad@example.com"
              id="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-wrapper">
            <input type="text" placeholder="Ex: 07081741484" id="no" />
            <label htmlFor="no">Phone Number</label>
          </div>
        </div>
        <div className="input-wrapper text">
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <a href="/" className="btn">
          Send Message
        </a>
      </div>
    </div>
  );
}

export default Contact;
