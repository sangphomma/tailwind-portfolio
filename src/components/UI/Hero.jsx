import React from "react";
import heroImg from "../../assets/images/hero.svg";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/** -------hero left container */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColors font-[600] text-[16px]"
            >
              Hello welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColors text-[1.8rem] font-[800]
              sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I am Sirikorn Saengphomma <br /> Software developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColors text-white 
                font-[500] flex items-center gap-2 p-3 px-4 rounded-md
                hover:bg-smallTextColors ease-in duration-300"
                >
                  <i className="ri-mail-send-line"></i>Send me.
                </button>
              </a>
              <a
                className="text-[16px] text-smallTextColors font-[600] 
                border-b border-solid border-smallTextColors"
                href="#portfolio"
              >
                See portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 mt-14 text-headingColors font-[500] text-[15px] leading-7
                sm:pl-14 sm:pr-10"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              recusandae delectus ducimus. Nisi facilis est ab nulla sunt, enim
              accusantium!
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColors text-[15px] font-[600] ">
                Follow me:
              </span>

              <span className="">
                <a
                  href="#"
                  className="text-smallTextColors text-[18px] font-[600] "
                >
                  <i className="ri-youtube-line"></i>
                </a>
              </span>
              <span className="">
                <a
                  href="#"
                  className="text-smallTextColors text-[18px] font-[600] "
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span className="">
                <a
                  href="#"
                  className="text-smallTextColors text-[18px] font-[600] "
                >
                  <i className="ri-facebook-circle-fill"></i>
                </a>
              </span>
              <span className="">
                <a
                  href="#"
                  className="text-smallTextColors text-[18px] font-[600] "
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>
          {/** -------end hero left container */}
          {/** -------hero images container */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} />
            </figure>
          </div>
          {/** -------end hero images container */}
          {/** -------hero content right */}
          <div className="basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColors text-[32px] font-[700] ">
                <CountUp start={0} end={6} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColors text-[18px] font-[700] ">
                Year of experince
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColors text-[32px] font-[700] ">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColors text-[18px] font-[700] ">
                Success rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColors text-[32px] font-[700] ">
                <CountUp start={0} end={150} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColors text-[18px] font-[700] ">
                Happy clients
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColors text-[32px] font-[700] ">
                <CountUp start={0} end={249} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColors text-[18px] font-[700] ">
                Project Complete
              </h4>
            </div>
          </div>
          {/** -------end content right */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
