'use client';
// Import necessary modules and components
import { useRef, useEffect } from "react";
import Image from "next/image";

// About component definition
const About = () => {
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
      <div className="grid grid-cols-1 bg-gradient-to-t from-gray-900 via-gray-900 to-blue-950 rounded-3xl border-t-4 border-b-4 border-black shadow-2xl shadow-gray-950" >
        {/* Text Section */}
      <div className="cols-span-1 p-4 md:p-20">
          <div className="p-10 md:p-2">
          <h5 className="text-xs md:text-md font-monument-extended text-white">
              <span className="text-blue-500">ABE</span> Project Overview.
            </h5>
            <h1 className="text-xl font-thin text-white mt-4">
            ABE is the people-powered movement behind the next generation of mobility services. 
            By connecting drivers and their data with developers and manufacturers, we’re building the largest, most useful IoT network of user-owned devices—starting with cars.
            </h1>
            <h5 className="text-xs md:text-md font-monument-extended text-white pt-10">
              <span className="text-blue-500">Decentralized</span> Data-Driven ecosystem fuelled by an entire network of drivers.
            </h5>
            <h1 className="text-xl font-thin text-white mt-4">
            ABE helps you get more from driving. 
            Save money. Learn how to better take care of your car. 
            And, contribute to a future where driving apps work for vehicle owners, not the companies that build them—just by sharing your data.
        
            ABE is an open-source, decentralized project. 
            Anyone that’s part of the ABE community and holds $ATOB tokens 
            - our network of drivers, developers, car hackers, and partners 
            - has a say in the platform and a part to play in its future.


            </h1>
          </div>        
      </div>

      </div>



 {/* Content Section */}
 <div className="grid grid-cols-1 md:grid-cols-2 pb-20 bg-gradient-to-tr from-blue-950 via-gray-900 to-black rounded-3xl border-t-4 border-b-4 border-black">
        {/* Text Section */}
        <div className="cols-span-1 pt-20 p-4 md:p-20">
          <div className="p-10 md:p-2">
            <h5 className="text-xs md:text-md font-monument-extended text-white">
              <span className="text-blue-500">ABE</span> Rewards
            </h5>
            <h1 className="text-xl font-monument-extended text-white">
              Download the ABE app to get started
            </h1>
          </div>
          {/* List Section */}
          <ol className="ps-10 space-y-4 list-inside p-4 text-xs md:text-md text-gray-900">
            <li className="text-white font-thin text-lg">1. Connect App to Car</li>
            <li className="text-white font-thin text-lg">2. Connect Cryptocurrency Wallet</li>
            <li className="text-white font-thin text-lg">3. Start Earning By Simply Driving</li>
          </ol>
      </div>


        <div id="about" className="bg-transparent p-20 w-10/12 justify-center flex mx-auto">
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