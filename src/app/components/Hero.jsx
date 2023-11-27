'use client';
import { useRef } from "react";
import Spline from '@splinetool/react-spline';
import React, { useEffect } from "react";
const Hero = () => {
  const vidRef = useRef();
  useEffect(() => {vidRef.current.play(); }, []);
  return (
        <div name="hero" className="grid grid-cols-1 items-center h-max pb-40 md:pb-96 md:mb-20 lg:pb-60 border-b-2  border-gray-700 rounded-b-3xl
        lg:mb-38 xl:mb-60 md:h-max justify-center bg-black md:bg-white">
            <div className="mx-auto justify-center flex md:hidden">
                <div className="cols-span-1 h-screen p-10 pt-40 my-auto">
            

                <h1 className="text-white text-xl font-monument-extended p-4 bg-gradient-to-tr from-blue-900 to-gray-900 border-blue-800 border-2 shadow-2xl shadow-blue-600 rounded-br-3xl rounded-md">ABExplorer</h1>
                <h1 className="mx-auto justify-center flex text-white text-5xl pt-4 pb-2">Connect your car to the future.</h1>

                <Spline scene="https://prod.spline.design/WZbqX91w2YHENZlr/scene.splinecode" />
                </div>            

            </div>
            <div className="cols-span-1 mb-0 lg:mb-48 hidden md:block">
              <video     
                  autoPlay
                  ref={ vidRef }
                  playsInline
                  loop
                  muted  src={"/Track.mp4"} className="absolute opacity-100 z-0 md:w-full 
                  lg:w-full"/>
            </div>
        </div>
    )
};

export default Hero;