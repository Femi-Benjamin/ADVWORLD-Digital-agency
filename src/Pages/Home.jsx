import React from "react";
import "./Home.css";
import HomeNav from "../NavBar/HomeNav";
import WhatWeDopage from "../Components/WhatWeDopage";
import Clients from "../Components/Clients";

const Home = () => {
  return (
    <div className="hello bg-cover">
      <HomeNav />
      <div className="justify-center items-center text-center">
        <h1 className="not-italic mt-[253px] text-[70px] leading-[84px] text-[#A44A3F] font-rubik font-bold">
          Push that Creative Brand
        </h1>
        <p className=" not-italic font-[400px] m-10 text-[20px] leading-[24px] text-[#F19C79]">
          we are not ADV but promote brand to world class
        </p>
        <button className=" w-[307px] h-[77px] bg-[#CBDFBD] rounded-[10px] text-white font-rubik">
          Explore More
        </button>
      </div>
      <WhatWeDopage />
      <Clients />
    </div>
  );
};

export default Home;
