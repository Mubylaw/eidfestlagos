function Gallery() {
  return (
    <div className="gallery" id="gallery">
      <div className="tag">Our Gallery</div>
      <h1>The Eidfest Experience</h1>
      <p>
        EidFest features EidTreat, EidRadio, EidStage, keids Arena, Eid Market,
        EidFun, Open Mic, Games sphere, Art Exhibition, Live Contests, EidFlex
        and more!
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
      <a
        href="https://drive.google.com/drive/folders/1ZFBt121pS-eAlzC_mBa3ejhDcagj4W5V"
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        View Gallery
      </a>
    </div>
  );
}

export default Gallery;
