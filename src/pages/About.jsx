import "./About.css";
//import image1 from "../../assets/images/image1.jpg"; // Replace with your actual image paths
//import image2 from "../../assets/images/image2.jpg";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
export const About = () => {
  return (
    <div className="about-page">
      {/* Section 1: Our Values */}
      <section className="values-section">
        <div className="content">
          <h2>Our Values</h2>
          <p>At Lorem Ipsum, our core values are:</p>
          <ul>
            <li><strong>Lorem Ipsum</strong> - Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.</li>
            <li><strong>Lorem Ipsum</strong> - Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.</li>
          </ul>
        </div>
        <div className="image-container">
          <img src={image2} alt="Our Values" />
        </div>
      </section>

      {/* Section 2: Who Are We */}
      <section className="who-we-are-section">
        <div className="image-container">
          <img src={image1} alt="Who We Are" />
        </div>
        <div className="content">
          <h2>Lorem Ipsum</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)..</p>
          <p>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
        </div>
      </section>
    </div>
  );
};
