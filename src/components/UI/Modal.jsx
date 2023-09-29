import React from "react";
import portfolios from "../../assets/data/portfolioData.js";

const Modal = ({ activeId, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeId);
  return (
    <div className="w-full h-full fixed left-0 top-0 z-[10] bg-headingColors bg-opacity-50">
      <div
        className="absolute left-1/2 p-5 
      transform -translate-x-1/2 -translate-y-1/2 
      top-1/2 max-w-[600px] z-20 bg-white rounded-xl"
      >
        <div>
          <figure>
            <img className="rounded-xl" src={portfolio.imgUrl} alt="" />
          </figure>
        </div>
        <div>
          <h2 className="text-headingColors font-[700] text-2xl py-5">
            {portfolio.title}
          </h2>
          <p className="text-smallTextColors text-md leading-7">
            {portfolio.description}
          </p>
          <div className="flex flex-wrap gap-3 items-center mt-5">
            <h4 className="text-headingColors text-xl text-[700]">
              Technology
            </h4>
            {portfolio.technologies.map((item, idx) => (
              <span
                key={idx}
                className="bg-gray-200 py-2 px-2 rounded-xl text-sm leading-0"
              >
                {item}
              </span>
            ))}
          </div>
          <a href={portfolio.siteUrl}>
            <button
              className="bg-headingColors
            font-[500] hover:bg-primaryColors ease-in duration-300
             text-white px-4 py-2 my-8 rounded-xl"
            >
              Live Site
            </button>
          </a>
        </div>
        <div
          onClick={() => setShowModal(false)}
          className="w-[2rem] h-[2rem] bg-white 
        text-2xl flex items-center justify-center rounded-sm leading-0 cursor-pointer
        absolute top-[1.7rem] right-[1.7rem]"
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default Modal;
