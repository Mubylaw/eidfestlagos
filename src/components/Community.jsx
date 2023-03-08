function Community() {
  return (
    <div className="community" id="community">
      <h1>Join Our Community</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
        praesentium sunt recusandae repellat doloribus tempora.
      </p>
      <div className="input-wrapper">
        <input type="text" placeholder="Ex: muhammad@example.com" id="email" />
        <label htmlFor="email">Email</label>
      </div>
      <a href="/" className="btn">
        Join
      </a>
    </div>
  );
}

export default Community;
