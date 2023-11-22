'use client';
import { useRef } from "react";
import React, { useEffect } from "react";
const Hero = () => {
  const vidRef = useRef();
  useEffect(() => {vidRef.current.play(); }, []);
  return (
        <div name="hero" className="grid grid-cols-1 items-center h-max pb-40 md:pb-96 md:mb-20 lg:pb-60 
        lg:mb-38 xl:mb-60 md:h-max justify-center bg-gradient-to-b from-black via-blue-600 to-black md:bg-white">
            <div className="mx-auto justify-center flex md:hidden">
            <h1 className="text-2xl text-white pb-20 pt-60">AutoBlockExplorer</h1>

            </div>
            <div className="cols-span-1 mb-0 lg:mb-48 hidden md:block">
              <video     
                  autoPlay
                  ref={ vidRef }
                  playsInline
                  loop
                  muted  src={"/Track.mp4"} className="absolute opacity-100 z-0 md:w-full 
                  lg:w-full border-black border-b-8 border-r-4 border-l-4"/>
            </div>
        </div>
    )
};

export default Hero;