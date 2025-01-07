import "./Contact.css";
import contact1 from "../assets/images/officeimage1.jpg";
import office from "../assets/images/contactimage1.jpg";
export const Contact = () => {
    return (
      <div className="contact-page">
      {/* Section 1: Contact Us */}
      <section className="contact-section">
        <div className="content">
          <h2>Contact Us</h2>
          <p>We d love to hear from you! You can reach us via the following channels:</p>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-item">
              <h3>Our Address</h3>
              <p>123 Main Street, Suite 400, Cityville, Country 56789</p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+1 (800) 123-4567</p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <p>info@yourcompany.com</p>
            </div>
          </div>
        </div>

        {/* Contact Image */}
        <div className="image-container">
          <img src={contact1} alt="Contact Us" />
        </div>
      </section>

      {/* Section 2: Office Hours */}
      <section className="hours-section">
        <div className="image-container">
          <img src={office} alt="Office Hours" />
        </div>
        <div className="content">
          <h2>Office Hours</h2>
          <p>Our team is available to assist you during the following hours:</p>
          <ul>
            <li><strong>Monday to Friday:</strong> 9:00 AM - 6:00 PM</li>
            <li><strong>Saturday:</strong> 10:00 AM - 2:00 PM</li>
            <li><strong>Sunday:</strong> Closed</li>
          </ul>
        </div>
      </section>
    </div>
    );
  };