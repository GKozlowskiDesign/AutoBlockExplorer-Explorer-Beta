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
    <section className="bg-gradient-to-b from-black via-gray-900 to-blue-900 rounded-b-3xl shadow-2xl shadow-black">
      <div id="about" className="bg-transparent pb-10">
        {/* Video Section */}
        <video
          autoPlay
          ref={vidRef}
          playsInline
          loop
          muted
          src={"/DashboardCloseUp.mp4"}
          className="opacity-100 z-0 w-full border-black border-b-8 border-r-4 border-l-4 rounded-b-3xl md:hidden"
        />
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 pb-20">
        {/* Logo Section */}
        <div className="cols-span-1  bg-transparent">
          <Image
            src="/assets/AutoBlockLogo.png"
            width={240}
            height={240}
            alt="Logo"
            className="justify-center flex mx-auto mt-4 md:mt-16 rounded-lg bg-transparent md:bg-blue-950
            md:border-2 md:border-blue-900 md:shadow-2xl md:shadow-blue-800 p-4"
          />
        </div>

        {/* Text Section */}
        <div className="cols-span-1">
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
            <li className="text-white font-thin text-lg">Connect App to Car</li>
            <li className="text-white font-thin text-lg">Connect Cryptocurrency Wallet</li>
            <li className="text-white font-thin text-lg">Start Earning By Simply Driving</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

// Export the About component
export default About;