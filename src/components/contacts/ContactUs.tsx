import React from 'react';
import '../contacts/contact.scss';

const ContactUs: React.FC = () => {
  return (
    <section className="contact-us-wrapper" id="contact">
      <div className="contact-us">
        <div className="top-title">
          <h2>Contact us anytime</h2>
          <p>
            We are here to answer your questions and provide the best support for your
            business.
          </p>
        </div>

        <form acceptCharset="UTF-8" className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
