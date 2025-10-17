import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <h1>Get In Touch</h1>
        <p className="contact-lead">
          We’d love to hear from you! Whether you have questions, want to volunteer, or want to partner with us, reach out and we’ll get back to you as soon as possible.
        </p>

        <div className="contact-details">
          <h5>Contact Details</h5>
          <p>Email: contact@hopebridge.org</p>
          <p>Phone: +44 1234 567890</p>
          <p>Follow Us: @hopebridge</p>
        </div>

        <p className="contact-form-lead">
          Fill out the form below to send us a message directly. Please provide your name, email, and a brief message. We’ll respond within 48 hours.
        </p>

        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your Name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="Your Email" required />
          </label>
          <label>
            Message
            <textarea placeholder="Your Message" rows={5} required></textarea>
          </label>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
