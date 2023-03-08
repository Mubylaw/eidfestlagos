function Gallery() {
  return (
    <div className="gallery" id="gallery">
      <div className="tag">Our Gallery</div>
      <h1>The Eidfest Experience</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
        praesentium sunt recusandae repellat doloribus tempora.
      </p>
      <div className="img">
        <div className="side">
          <img src="/assets/Rectangle%207.png" alt="" />
          <img src="/assets/Rectangle%208.png" alt="" />
        </div>
        <div className="side">
          <img src="/assets/Rectangle%209.png" alt="" />
          <img src="/assets/Rectangle%2010.png" alt="" />
          <img src="/assets/Rectangle%2011.png" alt="" />
        </div>
      </div>
      <a className="btn">View Gallery</a>
    </div>
  );
}

export default Gallery;
