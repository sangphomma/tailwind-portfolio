import React from "react";
import FrontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import designImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";

function Services() {
  return (
    <section id="service">
      <div className="container lg:tp-5">
        <div className="text-center">
          <h2 className="text-headingColors font-[800] text-[2.4rem] mb-5">
            What do i help ?
          </h2>
          <p
            className="lg:max-w-[600px] lg:mx-auto leading-7
          font-[500] text-[16px] text-headingColors"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            perspiciatis sequi maiores labore sunt eius, culpa esse ipsum
            voluptates delectus earum perferendis enim ducimus distinctio
            nesciunt nulla praesentium, voluptas facilis.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold ">
              {/** vertical line runing thrugh middle page */}
              <div
                className="hidden absolute w-1 sm:block
              transform -translate-x-1/2
               bg-indigo-400 h-full left-1/2"
              ></div>
              {/** ======left card ================= */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8 ">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group
                       hover:bg-primaryColors cursor-pointer ease-in duration-150 "
                      >
                        <h3
                          className="text-primaryColors font-[700] mb-3
                         group-hover:text-white group-hover:font-[500] text-2xl"
                        >
                          Frontend Developer
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColors
                         group-hover:text-white group-hover:font-[500] leading-7"
                        >
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Voluptas dolorem ab repellendus
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-primaryColors rounded-full
                  w-10 h-10 absolute left-1/2 transform 
                  -translate-x-1/2 -translate-y-4 sm:translate-y-0
                  flex items-center justify-center
                   border-white border-4"
                  >
                    <figure>
                      <img src={FrontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/** ======right card ================= */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8 ">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group
                       hover:bg-primaryColors cursor-pointer ease-in duration-150 "
                      >
                        <h3
                          className="text-primaryColors font-[700] mb-3
                         group-hover:text-white group-hover:font-[500] text-2xl"
                        >
                          Backend Server Side
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColors
                         group-hover:text-white group-hover:font-[500] leading-7"
                        >
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Voluptas dolorem ab repellendus
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-primaryColors rounded-full
                  w-10 h-10 absolute left-1/2 transform 
                  -translate-x-1/2 -translate-y-4 sm:translate-y-0
                  flex items-center justify-center
                   border-white border-4"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/** ======end right card ================= */}

              {/** ======left card ================= */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8 ">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group
                       hover:bg-primaryColors cursor-pointer ease-in duration-150 "
                      >
                        <h3
                          className="text-primaryColors font-[700] mb-3
                         group-hover:text-white group-hover:font-[500] text-2xl"
                        >
                          UX/UI Design
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColors
                         group-hover:text-white group-hover:font-[500] leading-7"
                        >
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Voluptas dolorem ab repellendus
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-primaryColors rounded-full
                  w-10 h-10 absolute left-1/2 transform 
                  -translate-x-1/2 -translate-y-4 sm:translate-y-0
                  flex items-center justify-center
                   border-white border-4"
                  >
                    <figure>
                      <img src={designImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/** ======right card ================= */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8 ">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group
                       hover:bg-primaryColors cursor-pointer ease-in duration-150 "
                      >
                        <h3
                          className="text-primaryColors font-[700] mb-3
                         group-hover:text-white group-hover:font-[500] text-2xl"
                        >
                          Application Desktop
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColors
                         group-hover:text-white group-hover:font-[500] leading-7"
                        >
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Voluptas dolorem ab repellendus
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-primaryColors rounded-full
                  w-10 h-10 absolute left-1/2 transform 
                  -translate-x-1/2 -translate-y-4 sm:translate-y-0
                  flex items-center justify-center
                   border-white border-4"
                  >
                    <figure>
                      <img src={appsImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/** ======end right card ================= */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
