import React from 'react';

const Contact = () => {
  return (
    <section className="w-full py-12 bg-white border-black border-b-2 flex justify-center items-center">
      <div className="w-[352px] border-black border-2 rounded-md p-6 bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <h2 className="text-3xl text-center mb-6 font-bold">Contact Me</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />
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
    </section>
  );
};

export default Contact;
