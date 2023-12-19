'use client';
// Import necessary modules and components
import React, { useRef, useEffect } from "react";
import Spline from '@splinetool/react-spline';
// Hero component definition
const Hero = () => {
  // Ref for the video element
  const vidRef = useRef();
  // Use useEffect to play the video on component mount
  useEffect(() => {
    vidRef.current.play();
  }, []);
  // Render the Hero component
  return (
    <div
      name="hero"
      className="grid grid-cols-1 items-center  h-max md:h-max  justify-center"
    >        <h1 className="text-2xl md:text-5xl text-white font-monument-extended z-0 absolute mx-auto justify-center flex p-12 md:p-40">AutoBlockExplorer</h1>

      {/* Mobile view */}
      <div className="mx-auto justify-center flex">
      <div className="cols-span-1">
        
      <video
          autoPlay
          ref={vidRef}
          playsInline
          loop
          muted
          src={"/WinterDriving2.mp4"}
          className="opacity-100 z-0 w-full -my-36  mx-auto justify-center md:hidden"
        />
        <video
          autoPlay
          ref={vidRef}
          playsInline
          loop
          muted
          src={"/WinterDriving.mp4"}
          className="opacity-100 z-0 md:w-full  hidden md:block"
        />
        
      </div>

      </div>
    </div>
  );
};
// Export the Hero component
export default Hero;