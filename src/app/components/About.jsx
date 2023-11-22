'use client';


import React from "react";
import Image from 'next/image';

const About = () => {
  return (
        <section>
              <div id="about" className='relative flex flex-col w-full p-8  pt-20  md:mt-96 lg:mt-52  
              md:bg-transparent border-r-4 border-black border-l-4'>
                    <div className="grid grid-cols-1 md:grid-cols-3 w-full  pt-0 md:p-10 mx-auto ">
                    <div className="col-span-1 w-1/2 mx-auto md:w-full  flex justify-center">
                    <h1 className="text-md md:text-5xl flex mx-auto bg-gray-900 md:bg-transparent rounded-br-3xl md:border-0 
                    border-2 p-2 border-black opacity-50 md:opacity-100
                    justify-center md:justify-between text-white md:text-blue-600 
                    font-momumentextended">Auto
                    <br></br>Block
                    <br></br>Explorer</h1>
                    </div>
                    </div>
                </div>
        </section>
    )
};

export default About;