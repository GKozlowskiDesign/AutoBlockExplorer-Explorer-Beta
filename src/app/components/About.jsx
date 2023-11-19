'use client';


import React from "react";
import Image from 'next/image';

const About = () => {
  return (
        <section>
              <div id="about" className='flex flex-col w-full p-10 pb-20 bg-white'>
                  <div className='h-1 bg-blue-700 my-1 w-full justify-center flex mx-auto p-0'></div>

                  <div className="grid grid-cols-1 md:grid-cols-1 border-blue-800">
                      <div  className="col-span-1 pt-4 justify-center items-center">
                        <div className="flex items-center justify-center p-6">
                          <img
                          src="./assets/Waves.png"
                          className="items-center w-full rounded-md shadow-2xl mx-auto shadow-blue-500"
                          alt="Statue Of Liberty"
                          width={500}
                          height={50}
                          />
                        </div>  
                    </div>

                    <div className="grid grid-cols-3 pt-4 p-20 mx-auto">
                    <div className="col-span-1">
                    <h1 className="text-2xl md:text-5xl text-blue-800 font-momumentextended">Vision</h1>
                    </div>
                    <div className="col-span-2 pr-2 md:pr-0">
                    <p className="text-lg font-Gruppo font-montserrat">AutoBlockExplorer is a cutting-edge automobile community that harnesses the power of AI to assist car owners in working on their vehicles. With our advanced AI models tailored specifically to your vehicle, you can gain valuable insights, perform diagnostics, and access step-by-step guidance for repairs and maintenance. Join our vibrant futuristic community and revolutionize your car ownership experience.

</p>
                    </div>  
                    </div>


                  </div>
                  <div className='grid grid-cols-1 pb-4 pt-4'>
                    <div className='col-span-1 mx-auto items-center text-center justify-center flex'>
                        <h2 className='text-4xl font-Gruppo'>Key <span className='text-blue-800 font-semibold'>Features</span> 
                        <br></br>Of AutoBlockExplorer</h2>
                    </div>
                </div>
                </div>
        </section>
    )
};

export default About;