import React, { useRef, useEffect } from "react";

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const headerClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      ref={headerRef}
      className="flex items-center w-full h-[80px] leading-[80px]"
    >
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
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={headerClick}
                  className="text-smallTextColors font-[600]"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={headerClick}
                  className="text-smallTextColors font-[600]"
                  href="#service"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  onClick={headerClick}
                  className="text-smallTextColors font-[600]"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={headerClick}
                  className="text-smallTextColors font-[600]"
                  href="#contact"
                >
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
              <i className="ri-send-plane-line"></i>Let's talk
            </button>
            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColors md:hidden cursor-pointer"
            >
              <i className="ri-menu-line"></i>
            </span>
          </div>
          {/*----------------Menu right end ------------------------------------ */}
        </div>
      </div>
    </header>
  );
}

export default Header;
