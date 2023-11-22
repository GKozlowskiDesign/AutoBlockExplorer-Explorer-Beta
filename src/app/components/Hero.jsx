'use client';
import { useRef } from "react";

import React, { useEffect } from "react";
const Hero = () => {

  const vidRef = useRef();
  useEffect(() => {vidRef.current.play(); }, []);
  return (
        <div name="hero" className="grid grid-cols-1  items-center h-max lg:pb-40 md:h-max 
  justify-center  md:bg-white">
           <div className="absolute w-full">

                </div>
            <div className="cols-span-1 mb-0 lg:mb-48 lg:pb-20"><video     
                  autoPlay
                  ref={ vidRef }
                  playsInline
                  loop
                  muted  src={"/Track.mp4"} className="absolute opacity-100 z-0 w-full border-black border-b-8 border-r-4 border-l-4 rounded-br-3xl"/>
                  </div>

         
            
               
              

        </div>
    )
};

export default Hero;