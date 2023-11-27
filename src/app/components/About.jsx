'use client';
import { useRef } from "react";
import React, { useEffect } from "react";
import Image from "next/image";


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

              <div className="grid grid-cols-1 md:grid-cols-2 pb-20">

              <div className="cols-span-1  bg-white">
                  <Image src="/assets/AutoBlockLogo.png"
                  width={240}
                  height={240}
                  alt="Logo"
                  className="justify-center flex mx-auto mt-4 md:mt-16 rounded-lg bg-blue-900 shadow-2xl shadow-blue-600 p-10"
                  />
                </div>

                <div className="cols-span-1">

<div className="p-10">
  <h5 className="text-xs md:text-md font-monument-extended"><span className="text-blue-600">ABE</span> Rewards</h5>
  <h1 className="text-xl font-monument-extended">Download the ABE app to get started</h1>
</div>


<ol className="ps-10 space-y-4 list-inside p-4 text-xs md:text-md text-gray-900">
<li className="text-black font-thin text-lg">Connect App to Car</li>
<li className="text-black font-thin text-lg">Connect Cryptocurrency Wallet</li>
<li className="text-black font-thin text-lg">Start Earning By Simply Driving</li>
</ol>
</div>


              </div>

           
        </section>
    )
};

export default About;