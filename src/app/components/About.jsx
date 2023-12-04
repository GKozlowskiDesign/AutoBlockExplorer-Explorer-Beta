'use client';
// Import necessary modules and components
import { useRef, useEffect } from "react";
import Image from "next/image";
import {Accordion, AccordionItem} from "@nextui-org/react";


// About component definition
const About = () => {
  
  const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


  // Ref for the video element
  const vidRef = useRef();

  // Use useEffect to play the video on component mount
  useEffect(() => {
    vidRef.current.play();
  }, []);

  // Render the About component
  return (
    <section className="mt-10 mb-10 md:p-20 grid grid-cols-1 md:grid-cols-2 bg-transparent rounded-3xl gap-10">
 

      {/* Content Section */}
      <div className="grid grid-cols-1 hidden bg-gradient-to-b from-gray-950 via-gray-800 to-gray-900 rounded-3xl border-t-4 border-b-4 border-black shadow-2xl shadow-gray-950" >
        {/* Text Section */}
        <div className='p-10 cols-span-1'>
        <Accordion variant="splitted font-mono">
                                      <AccordionItem key="1" aria-label="Accordion 4" title="Vision" className='bg-blue-950 font-monument-extended  p-2  mb-2 rounded-md
                                      border-2 border-blue-700  hover:bg-blue-600 shadow-xl shadow-blue-900
                                        '>

                                            {content}
                                        </AccordionItem>

                                        <AccordionItem key="2" aria-label="Accordion 4" title="Mission" className=' bg-blue-950 font-monument-extended  p-2  mb-2 rounded-md
                                        border-2 border-blue-700  hover:bg-blue-600 shadow-xl shadow-blue-900
                                        '>
                                        {content}
                                        </AccordionItem>

                                        <AccordionItem key="3" aria-label="Accordion 4" title="Company" className=' bg-blue-950 font-monument-extended  p-2  mb-2 rounded-md
                                        border-2 border-blue-700  hover:bg-blue-600 shadow-xl shadow-blue-900
                                        '>
                                            {content}
                                        </AccordionItem>

                                        <AccordionItem key="4" aria-label="Accordion 4" title="Community" className=' bg-blue-950 font-monument-extended  p-2  mb-2 rounded-md
                                        border-2 border-blue-700  hover:bg-blue-600 shadow-xl shadow-blue-900
                                        '>
                                            {content}
                                        </AccordionItem>

                                        <AccordionItem key="5" aria-label="Accordion 4" title="Developers" className=' bg-blue-950 font-monument-extended  p-2  mb-2 rounded-md
                                        border-2 border-blue-700  hover:bg-blue-600 shadow-xl shadow-blue-900
                                        '>
                                            {content}
                                        </AccordionItem>

                                        <AccordionItem key="6" aria-label="Accordion 4" title="Drivers" className=' bg-blue-950 font-monument-extended  p-2  mb-2 rounded-md
                                        border-2 border-blue-900  hover:bg-blue-600 shadow-xl shadow-blue-900
                                        '>
                                            {content}
                                        </AccordionItem>

                                        </Accordion>
                    </div>

      </div>



 {/* Content Section */}
 <div className="grid grid-cols-1 md:grid-cols-2 md:pb-20 bg-gradient-to-b from-gray-950 via-gray-800 to-gray-900 rounded-3xl border-t-4 border-b-4 border-black">
        {/* Text Section */}
        <div className="cols-span-1 pt-10 p-4 md:p-20">
          <div className="p-8 md:p-2">
            <h5 className="text-xs md:text-md font-monument-extended text-white">
              <span className="text-blue-500">ABE</span> Rewards
            </h5>
            <h1 className="text-xl font-monument-extended text-white">
              Download the ABE app to get started
            </h1>
          </div>
          {/* List Section */}
          <ol className="ps-10 space-y-2 list-inside p-1 md:p-4 text-xs md:text-md text-gray-900">
            <li className="text-white font-thin text-lg">1. Connect App to Car</li>
            <li className="text-white font-thin text-lg">2. Connect Cryptocurrency Wallet</li>
            <li className="text-white font-thin text-lg">3. Start Earning By Simply Driving</li>
          </ol>
      </div>


        <div id="about" className="bg-transparent pb-10 md:p-20 w-10/12 justify-center flex mx-auto">
        {/* Video Section */}
        <video
          autoPlay
          ref={vidRef}
          playsInline
          loop
          muted
          src={"/WinterDriving2.mp4"}
          className="opacity-100 z-0 w-full mx-auto rounded-br-3xl rounded-xl justify-center hidden md:block"
        />
      </div>
      </div>

    </section>
  );
};

// Export the About component
export default About;