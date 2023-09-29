import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12141e] pt-12">
      {/** ---------------Footer top    */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2
              className="text-3xl leading-10
           text-white font-[600] mb-5 md:text-[2rem]"
            >
              Do you want a beautiful product ?
            </h2>
            <a href="#contact">
              <button
                className="flex items-center
              hover:bg-headingColors ease-in duration-200 rounded-xl
               bg-primaryColors text-white py-2 px-4 gap-2"
              >
                <i className="ri-mail-volume-line"></i> Mail me.
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              rerum molestias inventore veniam est mollitia magnam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Vitae, eius!
              Voluptatem nihil modi ea optio?
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-xl ">
                Follow me.
              </span>

              {/** icon */}
              <span
                className="w-[35px] h-[35px] bg-[#2b2d33] 
              p-1 rounded-3xl cursor-pointer text-center"
              >
                <a href="" className="text-gray-300 font-[500] text-xl ">
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span
                className="w-[35px] h-[35px] bg-[#2b2d33] 
              p-1 rounded-3xl cursor-pointer text-center"
              >
                <a href="" className="text-gray-300 font-[500] text-xl ">
                  <i className="ri-youtube-line"></i>
                </a>
              </span>
              <span
                className="w-[35px] h-[35px] bg-[#2b2d33] 
              p-1 rounded-3xl cursor-pointer text-center"
              >
                <a href="" className="text-gray-300 font-[500] text-xl ">
                  <i className="ri-facebook-circle-fill"></i>
                </a>
              </span>
              <span
                className="w-[35px] h-[35px] bg-[#2b2d33] 
              p-1 rounded-3xl cursor-pointer text-center"
              >
                <a href="" className="text-gray-300 font-[500] text-xl ">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              {/** end icon */}
            </div>
          </div>
        </div>
        {/**   ------------bottom menu    */}
        <div className="">
          <ul className="flex justify-center items-center gap-10 mt-10">
            <li>
              <a className="text-gray-200 font-[600]" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-200 font-[600]" href="#service">
                Service
              </a>
            </li>
            <li>
              <a className="text-gray-200 font-[600]" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="text-gray-200 font-[600]" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/** end bottom menu */}
      </div>
      {/** -------------end--Footer top    */}
      {/** -------------Footer bottom      */}
      <div className="bg-[#1b1e29] py-5 mt-14  ">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            {/**  ------------bottom logo */}
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span
                  className="w-[35px] h-[35px] rounded-full 
                  flex items-center justify-center
      bg-[#2b2d33] text-white font-[500] text-[18px]"
                >
                  M
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px] ">
                    Muhip
                  </h2>
                  <p className="text-gray-400 text-[14px] font-[500]">
                    Personal
                  </p>
                </div>
              </div>
            </div>
            {/**  -------------------------------emd bottom logo  */}
            <div className="">
              <p
                className="text-gray-400 
text-[14px] font-[500] "
              >
                Copyright {year} developed by Korn.S - All right reserved{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/** -------------end Footer bottom      */}
    </footer>
  );
};

export default Footer;
