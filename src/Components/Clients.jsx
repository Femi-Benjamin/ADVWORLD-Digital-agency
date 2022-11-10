import React from "react";

const Clients = () => {
  return (
    <div className="bg-[#CBDFBD] h-[683px]">
      <h1 className="not-italic font-bold text-[60px] leading-[60px] text-[#A44A3F] text-center pt-[67px]">
        Our Client Success Story
      </h1>

      <div className="flex justify-around mt-20">
        <div className="relative">
          <img src="/Rectangle 666.png" alt="" />
          <p className="absolute text-[#F19C79] top-[296px] left-[20px] font-rubik not-italic font-[400px] text-[20px] leading-[24px]">
            Let hear from them <br /> <span className="font-bold text-[30px]">Mr max</span>
          </p>

          <div className=" absolute w-[66px] h-[67px] bg-[#D4E09B] rounded-full top-[294px] left-[324px]">
            <img className="p-5 pl-6" src="/Polygon 2.png" alt="" />
          </div>
        </div>

        <div  className="relative">
          <img src="/Rectangle 667.png" alt="" />
          <p className="absolute text-[#F19C79] top-[296px] left-[20px] font-rubik not-italic font-[400px] text-[20px] leading-[24px]">
            Let hear from them <br /> <span className="font-bold text-[30px]">Mr James</span>
          </p>

          <div className=" absolute w-[66px] h-[67px] bg-[#D4E09B] rounded-full top-[294px] left-[324px]">
            <img className="p-5 pl-6" src="/Polygon 2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
