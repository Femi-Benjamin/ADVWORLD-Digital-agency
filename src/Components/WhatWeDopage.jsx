import React from "react";

const WhatWeDopage = () => {
  return (
    <div className="h-[1444px]">
      <div className="m-[50px]">
        <h1 className="not-italic text-[60px] leading-[60px] text-[#A44A3F] font-rubik font-bold text-center items-center justify-center">
          What we do
        </h1>
        <img className="pl-[995px] " src="/Rectangle 668.png" alt="" />
      </div>

      {/* CARDS */}
      <div className="flex items-center text-center justify-evenly mt-[85px]">
        <div className="w-[344px] h-[443px] bg-[#F6F4D2] rounded-[10px]">
          <div className="w-[119px] h-[119px] bg-[#CBDFBD] rounded-[240px] ml-[111px] mt-[88px]">
            <img className="p-[20px]" src="/Voice.png" alt="" />
          </div>
          <p className="p-[40px] font-rubik not-italic font-[400px] text-[15px] leading-[18px] text-[#A44A3F]">
            I’m also not going for what I would call an examined “instructional
            sentence.” I’d compiled hundreds of great sentences in a file of
            mine .
          </p>
          <p className="not-italics font-bold text-[19px] leading-[24px]">
            Marketing
          </p>
        </div>

        <div className="w-[344px] h-[443px] bg-[#F6F4D2] rounded-[10px]">
          <div className="w-[119px] h-[119px] bg-[#CBDFBD] rounded-[240px] ml-[111px] mt-[88px]">
            <img className="p-[20px]" src="/Strategy.png" alt="" />
          </div>
          <p className="p-[40px] font-rubik not-italic font-[400px] text-[15px] leading-[18px] text-[#A44A3F]">
            I’m also not going for what I would call an examined “instructional
            sentence.” I’d compiled hundreds of great sentences in a file of
            mine .
          </p>
          <p className="not-italics font-bold text-[19px] leading-[24px]">
            Strategy
          </p>
        </div>

        <div className="w-[344px] h-[443px] bg-[#F6F4D2] rounded-[10px]">
          <div className="w-[119px] h-[119px] bg-[#CBDFBD] rounded-[240px] ml-[111px] mt-[88px]">
            <img className="p-[20px]" src="/Group 58.png" alt="" />
          </div>
          <p className="p-[40px] font-rubik not-italic font-[400px] text-[15px] leading-[18px] text-[#A44A3F]">
            I’m also not going for what I would call an examined “instructional
            sentence.” I’d compiled hundreds of great sentences in a file of
            mine .
          </p>
          <p className="not-italics font-bold text-[19px] leading-[24px]">
            Development
          </p>
        </div>
      </div>

        <div className="grid grid-cols-6 gap-[60px] mt-[74px] ml-[98px]">
          <img src="/Famous-Black-And-White-Logos-13 1.png" alt="" />
          <img src="/Famous-Black-And-White-Logos-5 1.png" alt="" />
          <img src="/Famous-Black-And-White-Logos-12 1.png" alt="" />
          <img src="/Famous-Black-And-White-Logos-11 1.png" alt="" />
          <img src="/Famous-Black-And-White-Logos-15 1.png" alt="" />
          <img src="/Famous-Black-And-White-Logos-10 1.png" alt="" />
          <img src="/Famous-Black-And-White-Logos-14 1.png" alt="" />
          <img src="/Famous-Black-And-White-Logos-4 1.png" alt="" />
          <img src="/Famous-Black-And-White-Logos-8 1.png" alt="" />
          <img src="/Famous-Black-And-White-Logos-9 1.png" alt="" />
          <img src="/Famous-Black-And-White-Logos-3 1.png" alt="" />
          <img src="/Famous-Black-And-White-Logos-7 1.png" alt="" />
        </div>

      <div className="items-center justify-center text-center mt-[103px]">
        <h1 className="not-italics font-bold text-[60px] leading-[60px] text-[#A44A3F] mb-[24px]">
          What Make Us the Best
        </h1>
        <p className="font-rubik not-italic font-[400px] text-[20px] leading-[24px] text-[#F19C79] mb-[41px]">
          We are a digital marketing agency providing results focused
          advertising, <br /> creative and development services, using our
          unique process marketing <br /> approach to generate results for
          e-commerce and lead generation <br /> businesses around the world.
          Plans that can suit business type <br /> robust set of latest
          technologies and tools
        </p>
        <button className="w-[188px] h-[54px] bg-[#D4E09B] rounded-[10px] font-rubik not-italic font-[400px] text-[20px] leading-[24px] text-white mb-[103px]">
          See pricing
        </button>
      </div>
    </div>
  );
};

export default WhatWeDopage;
