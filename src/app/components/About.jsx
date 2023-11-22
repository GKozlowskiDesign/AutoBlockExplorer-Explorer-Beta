'use client';
import { useRef } from "react";
import React, { useEffect } from "react";

const About = () => {
  const vidRef = useRef();
  useEffect(() => {vidRef.current.play(); }, []);
  return (
        <section className="bg-white">
              <div id="about" className='bg-white pb-10'>
              <video     
                  autoPlay
                  ref={ vidRef }
                  playsInline
                  loop
                  muted  src={"/DashboardCloseUp.mp4"} className="opacity-100 z-0 w-full border-black border-b-8 border-r-4 border-l-4 rounded-br-3xl"/>
              </div>

              <div className="grid grid-cols-1 pb-20">

              <div className="p-10">
                <h5 className="text-xs md:text-md"><span className="text-blue-600">ABE</span> Rewards</h5>
                <h1 className="text-xl">Download the ABE app to get started</h1>
              </div>


              <ol className="list-decimal ps-10 space-y-4 list-inside p-4 text-xs md:text-md text-gray-900">
              <li>Connect App to Car</li>
              <li>Connect Cryptocurrency Wallet</li>
              <li>Start Earning By Simply Driving</li>
              </ol>
              </div>
        </section>
    )
};

export default About;