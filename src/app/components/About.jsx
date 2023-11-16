'use client';


import React from "react";
import Image from 'next/image';

const About = () => {
  return (
        <section>
              <div id="about" className='flex flex-col w-full p-10 pb-40 bg-white'>
                  <div className='border-t-2 mb-2 border-blue-800'></div>

                  <div className="grid grid-cols-1 md:grid-cols-1 border-blue-800">
                      <div  className="col-span-1 pt-4 justify-center items-center">
                        <div className="flex items-center justify-center p-6">
                          <img
                          src="https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-by-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          className="items-center w-full sm:w-full lg:w-12/12 rounded-md shadow-2xl mx-auto"
                          alt="Statue Of Liberty"
                          width={500}
                          height={50}
                          />
                        </div>  
                    </div>

                    <div className="grid grid-cols-3 pt-4 p-6 mx-auto">
                    <div className="col-span-1">
                    <h1 className="text-2xl md:text-3xl text-blue-800 font-Gruppo font-bold">Vision</h1>
                    </div>
                    <div className="col-span-2 pr-2 md:pr-0">
                    <p className="text-lg font-Gruppo">OpenAI is on everyone's lips, but this is not about their recent Chatbot but about a language model for transcribing audio they released back in September. </p>
                    </div>  
                    </div>


                  </div>
                </div>
        </section>
    )
};

export default About;