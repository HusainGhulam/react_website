import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
  }
};
export const ContactFormReact = () => {
  return (
    <div className="main-container">
      <Form method="POST" action="/contactus" className="login-form">
        <h2 className="form-title">Contact Us Form</h2>
        <div className="input-group">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your user name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="datofbirt">Date of Birth</label>
          <input
            type="text"
            name="date"
            id="date"
            placeholder="Enter your date"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            type="message"
            name="message"
            id="message"
            placeholder="Enter your message"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </Form>
    </div>
  );
};
