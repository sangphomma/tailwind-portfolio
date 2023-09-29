import React, { useState, useEffect } from "react";
import data from "../../assets/data/portfolioData.js";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");

  const loadMoreHandle = () => {
    setNextItems((prev) => prev + 3);
  };
  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }
    if (selectTab === "web-design") {
      const filterData = data.filter((item) => item.category === "Web Design");
      setPortfolios(filterData);
    }
    if (selectTab === "ux-design") {
      const filterData = data.filter((item) => item.category === "Ux");
      setPortfolios(filterData);
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0 ">
            <h3 className="text-headingColors text-[2rem] font-[700]">
              My recent projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-smallTextColors border border-solid
             border-smallTextColors py-2 px-4 rounded-[8px] "
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("web-design")}
              className="text-smallTextColors border border-solid
             border-smallTextColors py-2 px-4 rounded-[8px] "
            >
              Web Design
            </button>
            <button
              onClick={() => setSelectTab("ux-design")}
              className="text-smallTextColors border border-solid
             border-smallTextColors py-2 px-4 rounded-[8px] "
            >
              UX design
            </button>
          </div>
        </div>

        {/** start portfolo card */}
        <div className="flex flex-wrap items-center gap-4 mt-12">
          {portfolios?.slice(0, nextItems).map((portfolio, idx) => (
            <div
              key={idx}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%]
                md:w-31.8%] lg:w-[32.2%] relative z-[1] "
            >
              <figure>
                <img className="rounded-[8px] " src={portfolio.imgUrl} alt="" />
              </figure>
              <div
                className="w-full h-full bg-primaryColors bg-opacity-40
              absolute left-0 top-0 z-[5] hidden group-hover:block "
              >
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    className="text-white
                   bg-headingColors py-2 px-4 rounded-lg
                    hover:bg-smallTextColors font-[500] ease-in duration-200"
                  >
                    See detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/** end portfolo card */}
        {/** load more button */}
        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandle}
              className="text-white
                   bg-headingColors py-2 px-4 rounded-lg
                    hover:bg-smallTextColors font-[500] ease-in duration-200"
            >
              Load more . .
            </button>
          )}
        </div>
        {/** end load more button */}
      </div>
    </section>
  );
};

export default Portfolio;
