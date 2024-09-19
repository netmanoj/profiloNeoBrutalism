import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-form">
        <h2 className="text-3xl text-center mb-6 font-bold">Contact Me</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col space-y-4"
          netlify
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human:
              <input name="bot-field" />
            </label>
          </p>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border-black border-2 p-2 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border-black border-2 p-2 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="border-black border-2 p-2 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] rounded-md"
          />
          <button
            type="submit"
            className="h-12 border-black border-2 p-2 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Animated Shapes */}
      <div className="shape crystal1"></div>
      <div className="shape crystal2"></div>
      <div className="shape crystal3"></div>
      <div className="shape crystal4"></div>
      <div className="shape crystal5"></div>
      <div className="shape circle1"></div>
      <div className="shape circle2"></div>
      <div className="shape triangle1"></div>
      <div className="shape triangle2"></div>
      <div className="shape triangle3"></div>
      <div className="shape triangle4"></div>
      <div className="shape triangle5"></div>
    </section>
  );
};

export default Contact;
