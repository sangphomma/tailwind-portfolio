import React from "react";

function Header() {
  return (
    <header className="flex items-center w-full h-[80px] leading-[80px]">
      <div className="container">
        <div className="flex items-center justify-between ">
          {/*-----------------logo ----------------------------*/}
          <div className="flex items-center gap-[10px]">
            <span
              className="w-[35px] h-[35px] bg-primaryColors
             text-white text-[18px] font-[500] rounded-full flex items-center justify-center"
            >
              M
            </span>
            <div className="leading-[20px]">
              <h1 className="text-xl text-smallTextColors font-[700]">Muhip</h1>
              <p className="text-smallTextColors text-[14px] font-[400]">
                Personal
              </p>
            </div>
          </div>

          {/*----------------logo end ------------------------------------ */}
          {/*----------------Menu Start ------------------------------------ */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallTextColors font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-smallTextColors font-[600]" href="#service">
                  Service
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColors font-[600]"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-smallTextColors font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/*----------------Menu end ------------------------------------ */}
          {/*----------------Menu right  ------------------------------------ */}
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2
             text-smallTextColors font-[600] 
             border border-smallTextColors py-2 px-4 rounded-[20px] max-h-[40px]
             hover:bg-smallTextColors hover:text-white font-[500] ease-in duration-500"
            >
              <i class="ri-send-plane-line"></i>Let's talk
            </button>
            <span className="text-2xl text-smallTextColors md:hidden cursor-pointer">
              <i class="ri-menu-line"></i>
            </span>
          </div>
          {/*----------------Menu right end ------------------------------------ */}
        </div>
      </div>
    </header>
  );
}

export default Header;
