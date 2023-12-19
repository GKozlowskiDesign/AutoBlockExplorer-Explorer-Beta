import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";


// Footer component definition
const Footer = () => {
  return (
    <footer name="footer" className="z-10 bg-gradient-to-b from-gray-950 via-black to-black text-white py-2 md:pt-40">
      <div className="mx-auto items-center justify-center p-14 grid grid-cols-6">
        {/* Logo and brand */}
        <div className="col-span-4 justify-start">
          <div className="justify-start">
          <Image src="/assets/ABExplorer.png"
          height={60}
          width={60}
          className="justify-start ml-8"
          alt=""
          />          </div>
        </div>

        {/* Scroll to top button */}
        
      </div>

      {/* Navigation links */}
      <div className="border-t p-2">
        <div className="container mx-auto flex justify-between items-center pb-20 p-14">
          {/* Section 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4 hidden">
            <ul className="mt-2">
              <li className="mb-1"><a className="hover:text-blue-400 font-thin text-md" href="#">Terms</a></li>
              <li className="mb-1"><a className="hover:text-blue-400 font-thin text-md" href="#">Policies</a></li>
              <li className="mb-1"><a className="hover:text-blue-400 font-thin text-md" href="#">Guidelines</a></li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4"></div>

          {/* Section 3 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4"></div>

          {/* Section 4 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4"></div>
        </div>
      </div>
    </footer>
  );
};

// Export the Footer component
export default Footer;