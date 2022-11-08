import React from "react";

const Info = () => {
  return (
    <div className="flex justify-around h-[429px]">
      <div>
        <h1 className="not-italics font-bold text-[60px] leading-[60px] mt-[65px] mb-[12px] text-[#F19C79] ">
          Get in Touch
        </h1>
        <p className="font-rubik not-italic font-[400px] text-[20px] leading-[24px] text-[#F19C79]">
          Let’s Work Together! <br /> Tell Us About Your Project
        </p>
      </div>
      <div>
        <form className="pt-[70px]">
          <input
            className="w-[214px] h-[38px] bg-[#F6F4D2] mr-[13px] font-rubik not-italic font-[400px] text-[16px] leading-[18px] text-black pl-[34px]"
            type="text"
            id="name"
            placeholder="Name"
          />
          <input
            className="w-[214px] h-[38px] bg-[#F6F4D2] mr-[13px] font-rubik not-italic font-[400px] text-[16px] leading-[18px] text-black pl-[34px]"
            type="number"
            id="phone number"
            placeholder="phone"
          />
        </form>
        <form className="mt-[35px]">
          <input
            className="w-[214px] h-[38px] bg-[#F6F4D2] mr-[13px] font-rubik not-italic font-[400px] text-[16px] leading-[18px] text-black pl-[34px]"
            type="text"
            id="email"
            placeholder="Email"
          />
          <input
            className="w-[214px] h-[38px] bg-[#F6F4D2] mr-[13px] font-rubik not-italic font-[400px] text-[16px] leading-[18px] text-black pl-[34px]"
            type="text"
            id="text"
            placeholder="Services"
          />
        </form>
        <div>
          <input
            className="w-[441px] h-[134px] bg-[#F6F4D2] mt-[35px] font-rubik not-italic font-[400px] text-[16px] leading-[18px] text-black pl-[34px]"
            type="text"
            id="message"
            placeholder="Message"
          />
        </div>
        <center> 
          <button className="w-[273px] h-[39px] bg-[#D4E09B] rounded-[10px] mt-[30px] font-rubik not-italic font-[400px] text-[15px] leading-[18px] text-white ">Submit</button>
        </center>
      </div>
    </div>
  );
};

export default Info;
