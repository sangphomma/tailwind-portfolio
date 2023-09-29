import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColors font-[700] text-3xl mb-8">
          Get in touch
        </h2>

        <div className="md:flex justify-between items-center">
          {/** -----------------------google map add here */}
          <div className="w-full h-[300px] md:w-1/2 sm:h-[450px] ">
            <iframe
              title="google maps"
              className="w-full h-full border-0 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.396975636424!2d100.60784387593432!3d13.994459991627465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e281d077962851%3A0x7974a06456cca4e2!2z4Lij4Lix4LiH4Liq4Li04LiV4LmA4Lil4LiE4LmE4LiL4LiE4LmM4LiE4Lit4LiZ4LmC4LiU4Lih4Li04LmA4LiZ4Li14Lii4Lih!5e0!3m2!1sen!2sth!4v1695953237936!5m2!1sen!2sth"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/** -----------------------contact form here */}
          <div
            className="w-full bt-8 
        lg:flex items-center bg-indigo-100
        px-4 lg:px-8 py-8
        md:mt-0 md:w-1/2 sm:h-[450px] "
          >
            <form className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Put your name"
                  className="w-full p-3 fucus:outline-none rounded-md"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Put your email"
                  className="w-full p-3 fucus:outline-none rounded-md"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 fucus:outline-none rounded-md"
                />
              </div>
              <div className="mb-5">
                <textarea
                  row={3}
                  type="text"
                  placeholder="Type your message "
                  className="w-full p-3 fucus:outline-none rounded-md"
                />
              </div>
              <button
                className="w-full p-3 focus:outline-none
              hover:bg-headingColors ease-in duration-300
               bg-primaryColors font-[500] text-xl rounded-xl text-white"
              >
                Submit your message
              </button>
            </form>
          </div>
          {/** -----------------------end contact form here */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
