import React from "react";

const Footer = () => {
  return (
    <div className="h-[407px] bg-[#A44A3F] mt-[35px]">
      <div className="md:px-[170px] sm:px-[100px]">
        <div className="grid grid-cols-4">
          <div className="mt-[57px] text-[#F6F4D2]">
            <h1 className="not-italics font-bold text-[25px] leading-[30px] pb-2">
              ADVWORLD
            </h1>
            <div className="not-italics font-rubik font-[400px] text-[15px] leading-[17.78px]">
              <p>Home</p>
              <p>Work</p>
              <p>What We Do</p>
              <p>Prices</p>
              <p>Blog</p>
              <p>About</p>
              <p>Contact Us </p>
            </div>
          </div>

          <div className="mt-[57px] text-[#F6F4D2]">
            <h1 className="not-italics font-bold text-[25px] leading-[30px] pb-2">
              Development
            </h1>
            <div className="not-italics font-rubik font-[400px] text-[15px] leading-[17.78px]">
              <p>Search Engine Optimisation (SEO)</p>
              <p>Shopping Feed Management</p>
              <p>Tagging & Analytics</p>
              <p>Website Edits & Updates</p>
              <p>WordPress Development</p>
              <p>Shopify Optimisation</p>
              <p>UI/UX Design</p>
              <p>Landing Page Design</p>
            </div>
          </div>

          <div className="mt-[57px] text-[#F6F4D2]">
            <h1 className="not-italics font-bold text-[25px] leading-[30px] pb-2">
              Strategy
            </h1>
            <div className="not-italics font-rubik font-[400px] text-[15px] leading-[17.78px]">
              <p>Media Planning & Strategy</p>
              <p>User Journey Optimisation</p>
              <p>Email Marketing</p>
            </div>
          </div>

          <div className="mt-[57px] text-[#F6F4D2]">
            <h1 className="not-italics font-bold text-[25px] leading-[30px] pb-2">
              Advertising
            </h1>
            <div className="not-italics font-rubik font-[400px] text-[15px] leading-[17.78px]">
              <p>Google Ads & Bing Ads (PPC)</p>
              <p>Facebook Ads</p>
              <p>Display & Banner Ads</p>
              <p>YouTube Ads</p>
              <p>Bing Ads</p>
              <p>Pinterest Ads</p>
              <p>Remarketing</p>
              <p>LinkedIn Ads</p>
              <p>Banner Ad Design</p>
            </div>
          </div>
        </div>

        <center>
          <div className="flex gap-[15px] mt-[77px] justify-center mb-2">
            <img src="/Vector.png" alt="" />
            <img src="/Vector (1).png" alt="" />
            <img src="/Vector (2).png" alt="" />
            <img src="/Vector (3).png" alt="" />
          </div>
          <h1 className="not-italics font-[400px] text-[15px] leading-[22px] text-[#F6F4D2]">All right reserved ADVWORLD 2022</h1>
        </center>
      </div>
    </div>
  );
};

export default Footer;
