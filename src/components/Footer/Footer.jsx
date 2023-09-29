import React from "react";

const Footer = () => {
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
          </div>
        </div>
      </div>
      {/** -------------end--Footer top    */}
    </footer>
  );
};

export default Footer;
