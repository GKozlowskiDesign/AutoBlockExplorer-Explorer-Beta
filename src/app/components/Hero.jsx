'use client';

import React from "react";
import Image from 'next/image';
const Hero = () => {
  return (
        <div name="hero" className="grid grid-col-1 items-center h-screen pt-48 md:h-max md:pt-48 md:pb-70 mt-0 border-2 border-gray-900 bg-gradient-to-b from-black via-blue-900 to-black  justify-center">
            
                <div className="absolute w-9/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mt-10 md:mt-0">
                                <Image
                                className="z-10 w-full lg:w-1/2 mx-auto p-10 md:mb-4 pt-80 md:pt-0"
                                src="/assets/NameABE.png"
                                alt="Auto-Block-Explorer"
                                width={600}
                                height={60}
                                priority
                                />
                </div>
              

        </div>
    )
};

export default Hero;