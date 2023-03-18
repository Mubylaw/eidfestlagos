function Contact({
  email,
  setEmail,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  no,
  setNo,
  message,
  setMessage,
  err,
  succ,
  view,
  handleSubmit,
}) {
  return (
    <div className="contact" id="contact">
      <div className="tag">Get in Touch</div>
      <h1>Contact Us</h1>
      <p>
        Got questions about our epic EidFest? Don't be shy, drop us a message
        faster than you can say Eid Mubarak. Trust us, it'll be more fun than
        trying to spot the moon.
      </p>
      <div className="form">
        {err && <div className="err alert">{err}</div>}
        {succ && <div className="succ alert">{succ}</div>}
        <div className="group">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Ex: Muhammad"
              id="fname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="fname">First Name</label>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Ex: Yusuf"
              id="lname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lname">Last Name</label>
          </div>
        </div>
        <div className="group">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Ex: muhammad@example.com"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Ex: 07081741484"
              id="no"
              value={no}
              onChange={(e) => setNo(e.target.value)}
            />
            <label htmlFor="no">Phone Number</label>
          </div>
        </div>
        <div className="input-wrapper text">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <label htmlFor="message">Message</label>
        </div>
        {view ? (
          <div className="btn">Loading...</div>
        ) : (
          <a href="/" className="btn" onClick={handleSubmit}>
            Send Message
          </a>
        )}
      </div>
    </div>
  );
}

export default Contact;
