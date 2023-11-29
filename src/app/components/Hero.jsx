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
      className="grid grid-cols-1 items-center h-max pb-40 md:pb-96 md:mb-20 lg:pb-60 border-b-2 border-gray-700 rounded-b-3xl lg:mb-38 xl:mb-60 md:h-max justify-center bg-black md:bg-white"
    >
      {/* Mobile view */}
      <div className="mx-auto justify-center mb-4 flex md:hidden">
        <div className="cols-span-1 h-screen p-10 pt-40 my-auto mx-auto justify-center">
          <h1 className="text-white text-4xl font-monument-extended p-4 bg-transparent">
            ABExplorer
          </h1>
    
          <Spline scene="https://prod.spline.design/WZbqX91w2YHENZlr/scene.splinecode" />

      
        </div>
      </div>

      {/* Desktop view */}
      <div className="cols-span-1 mb-0 lg:mb-48 hidden md:block">
        <video
          autoPlay
          ref={vidRef}
          playsInline
          loop
          muted
          src={"/Track.mp4"}
          className="absolute opacity-100 z-0 md:w-full lg:w-full"
        />
      </div>
    </div>
  );
};
// Export the Hero component
export default Hero;