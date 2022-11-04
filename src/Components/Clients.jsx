import React from "react";

const Clients = () => {
  return (
    <div className="bg-[#CBDFBD] h-[683px]">
      <h1 className="not-italic font-bold text-[60px] leading-[60px] text-[#A44A3F] text-center pt-[67px]">Our Client Success Story</h1>

      <div className="flex justify-around mt-10">
        <video width="300px" height="403px" controls loop>
        <source src="https://player.vimeo.com/progressive_redirect/playback/754699399/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=c2e416b2c95dbcb0f39e2e4eb88ec9ec5f0cc3e0e599c6301fd01ee23a0f07c2" /> 
        </video>
        
        <video width="300px" height="403px" controls loop>
        <source src="https://player.vimeo.com/progressive_redirect/playback/754699399/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=c2e416b2c95dbcb0f39e2e4eb88ec9ec5f0cc3e0e599c6301fd01ee23a0f07c2" /> 
        </video>
      </div>
    </div>
  );
};

export default Clients;
