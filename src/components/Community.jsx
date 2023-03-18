function Community({ email, setEmail, err, succ, handleComSubmit, view }) {
  return (
    <div className="community" id="community">
      <h1>Join Our Community</h1>
      <p>
        We welcome fun-loving individuals who want to grow in their faith and
        contribute to a supportive network.
      </p>
      {err && <div className="err alert">{err}</div>}
      {succ && <div className="succ alert">{succ}</div>}
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Ex: muhammad@example.com"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
        <label htmlFor="email">Email</label>
      </div>
      {view ? (
        <div className="btn">Loading...</div>
      ) : (
        <a href="/" className="btn" onClick={handleComSubmit}>
          Join
        </a>
      )}
    </div>
  );
}

export default Community;
