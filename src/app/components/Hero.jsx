'use client';

import React from "react";
import Image from 'next/image';
const Hero = () => {
  return (
        <div name="hero" className="grid grid-col-1 items-center h-screen pt-26 md:h-max md:pt-48 md:pb-70 mt-0 border-2 border-gray-900 bg-gradient-to-b from-black via-blue-900 to-black  justify-center">
                 <div class="relative flex-row mt-28 mb-80 h-[0px] md:h-[120px] w-screen items-center justify-center">
                        <div className="w-full h-7 bg-blue-800   my-1.5 opacity-100"></div>
                        <div className="w-full h-6.5 bg-blue-800   my-1.5 opacity-100"></div>
                        <div className="w-full h-4.5 bg-blue-700   my-1.5 opacity-100"></div>
                        <div className="w-full h-4 bg-blue-700   my-1.5 opacity-100"></div>
                        <div className="w-full h-3 bg-blue-600   my-1.5 opacity-80"></div>
                        <div className="w-full h-3 bg-blue-600   my-1.5 opacity-90"></div>
                        <div className="w-full h-2 bg-sky-500    my-1.5 opacity-100"></div>
                        <div className="w-full h-2 bg-sky-500    my-1.5 opacity-100"></div>

                </div>
                <div className="absolute w-9/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mt-10 md:mt-0">
                                <Image
                                className="z-10 w-full lg:w-1/2 mx-auto p-10 md:mb-4 pt-80 md:pt-0"
                                src="/assets/NameABE.png"
                                alt="Metaverse-Of-Things"
                                width={600}
                                height={60}
                                priority
                                />
                </div>
              

        </div>
    )
};

export default Hero;