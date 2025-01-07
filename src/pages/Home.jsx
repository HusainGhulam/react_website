export const Home = () => {
    return (
      <div className="App">
      <Banner />
      <Section
        title="Section 1"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imgSrc="https://picsum.photos/500/300"
        imgAlt="Placeholder Image 1"
      />
      <Section
        title="Section 2"
        text="Quisque vitae dolor nec metus consequat volutpat."
        imgSrc="https://picsum.photos/500/300"
        imgAlt="Placeholder Image 2"
      />
      <Section
        title="Section 3"
        text="Sed sit amet sapien id arcu feugiat varius."
        imgSrc="https://picsum.photos/500/300"
        imgAlt="Placeholder Image 3"
      />
    </div>
    );
  };

  const Banner = () => {
    return (
      <div className="banner">
        <h1>Welcome to Our Homepage!</h1>
        <p>Explore our services and get to know more about us.</p>
      </div>
    );
  };
  
  const Section = ({ title, text, imgSrc, imgAlt }) => {
    return (
      <div className="section">
        <div className="section-left">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="section-right">
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    );
  };