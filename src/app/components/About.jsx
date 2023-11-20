'use client';


import React from "react";
import Image from 'next/image';

const About = () => {
  return (
        <section>
              <div id="about" className='flex flex-col w-full p-10 md:pb-10 bg-gradient-to-b from-white to-blue-900 rounded-b-3xl'>

                  <div className="grid grid-cols-1 md:grid-cols-1 border-blue-800">
                      <div  className="col-span-1 pt-4 justify-center items-center">
                    
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 w-full  pt-4 p-4 md:p-10 mx-auto pb-20">
                    <div className="col-span-1">
                    <h1 className="text-2xl md:text-5xl text-blue-800 font-momumentextended">About</h1>
                    </div>
                    <div className="col-span-2 pr-2 md:pr-0">
                    <p className="text-lg font-Gruppo font-montserrat text-white">AutoBlockExplorer is a cutting-edge automobile community that harnesses the power of AI to assist car owners in working on their vehicles. With our advanced AI models tailored specifically to your vehicle, you can gain valuable insights, perform diagnostics, and access step-by-step guidance for repairs and maintenance. Join our vibrant futuristic community and revolutionize your car ownership experience.

</p>
                    </div>
               
                    <div className="col-span-1 pt-10">
                    <h1 className="text-2xl md:text-5xl text-blue-800 font-momumentextended">Vision
                    </h1>
                    </div>

                    <div className="col-span-2 pr-2 md:pr-0 pt-10">
                    <p className="text-lg font-Gruppo font-montserrat">AutoBlockExplorer is a cutting-edge automobile community that harnesses the power of AI to assist car owners in working on their vehicles. With our advanced AI models tailored specifically to your vehicle, you can gain valuable insights, perform diagnostics, and access step-by-step guidance for repairs and maintenance. Join our vibrant futuristic community and revolutionize your car ownership experience.
                    </p>
                    </div>
                    

                    </div>

                    


                  </div>
               
                </div>
        </section>
    )
};

export default About;