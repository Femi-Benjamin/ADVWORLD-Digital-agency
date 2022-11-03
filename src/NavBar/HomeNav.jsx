import React from "react";

const HomeNav = () => {
  return (
    <nav className="h-[90px] md:h-[100px] bg-slate-800 text-white">
      <div className="md:px-[150px]">
        <div className="h-[100px] flex justify-between items-center">
          <div>
            <h1 className="not-italic font-[400px] text-[20px] leading-[24px] text-[#A44A3F] font-rubik pb-1">
              ADVWORLD
            </h1>
            <img className="ml-8" src="/Rectangle 658.png" alt="" />
          </div>

          <div className="not-italic font-[400px] text-[20px] leading-[24px] text-[#D4E09B] font-rubik">
            <ul className="hidden md:flex justify-between items-center gap-[40px] cursor-pointer not-italic">
              <li>Work</li>
              <li>What we do</li>
              <li>Prices</li>
              <li>About</li>
              <li>Contact Us</li>
              <button className="w-[159px] h-[54px] bg-[#CBDFBD] rounded-[10px] text-white">
                JOIN US
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
