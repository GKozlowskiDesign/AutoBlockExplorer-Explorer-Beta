'use client';
import { useRef } from "react";

import React, { useEffect } from "react";
const Hero = () => {

  const vidRef = useRef();
  useEffect(() => {vidRef.current.play(); }, []);
  return (
        <div name="hero" className="grid grid-cols-1 items-center h-screen pb-36 md:pb-96 md:h-max mt-0 
  justify-center  bg-gradient-to-b from-blue-900 via-gray-900 to-blue-900">
           <div className="absolute w-9/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
           z-10  mb-96 mt-20 md:mb-10 md:mt-96">
                       <p className="text-sm md:text-lg text-gray-400 md:text-white justify-center mt-2 flex mx-auto text-center  md:p-4 
                       font-montserrat md:font-monument-extended">The Platform that Brings You Places</p>
                <h1 className="text-2xl md:text-5xl justify-center flex text-white p-2">AutoBlockExplorer</h1>
                </div>
            <div className="cols-span-1 mt-10 pt-10 md:pt-0 md:mt-0"><video     
                  autoPlay
                  ref={ vidRef }
                  playsInline
                  loop
                  muted  src={"/Track.mp4"} className="absolute opacity-100 z-0 w-full mb-2 rounded-br-3xl"/>
                  </div>

            <div>
            <div className="absolute w-9/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden 
           z-10 mt-20 mb-80 md:mt-0 bg-gradient-to-b from-blue-900 to-black p-8 rounded-br-3xl rounded-md border-b-2 border-r-2 border-black">
                <h1 className="text-md md:text-5xl justify-center flex text-white p-2">Get Started</h1>
                <p className="text-sm font-Gruppo font-montserrat text-white">AutoBlockExplorer is a cutting-edge automobile community that harnesses the power of AI to assist car owners in working on their vehicles. With our advanced AI models tailored specifically to your vehicle, you can gain valuable insights, perform diagnostics, and access step-by-step guidance for repairs and maintenance. Join our vibrant futuristic community and revolutionize your car ownership experience.

</p>
                </div>
            </div>
            
               
              

        </div>
    )
};

export default Hero;