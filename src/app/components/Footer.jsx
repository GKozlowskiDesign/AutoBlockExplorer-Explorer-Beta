import React from "react";
import { Link } from "react-scroll";

// Footer component definition
const Footer = () => {
  return (
    <footer name="footer" className="z-10 -my-20 bg-gradient-to-b from-gray-950 via-gray-800 to-gray-900 border-t-8 border-black text-white py-2 md:pt-40 rounded-t-3xl">
      <div className="mx-auto items-center justify-center p-14 grid grid-cols-6">
        {/* Logo and brand */}
        <div className="col-span-4 justify-start">
          <div className="justify-start">
            <h4 className="text-3xl justify-start pr-20 mx-auto p-2 font-monument-extended">ABE</h4>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="col-span-2 justify-end pl-20 md:pl-72 mx-auto pb-2">
          <Link activeClass="active" to="header" smooth duration={900}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
            stroke="currentColor" className="w-10 h-10 animate-bounce  rounded-3xl shadow-2xl shadow-blue-500 cursor-pointer hover:bg-blue-400 bg-gray-700 border-1 border-gray-500 p-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Navigation links */}
      <div className="border-t p-2">
        <div className="container mx-auto flex justify-between items-center pb-20 p-14">
          {/* Section 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <ul className="mt-2">
              <li className="mb-1"><a className="hover:text-blue-400 font-thin text-lg" href="#">Terms</a></li>
              <li className="mb-1"><a className="hover:text-blue-400 font-thin text-lg" href="#">Policies</a></li>
              <li className="mb-1"><a className="hover:text-blue-400 font-thin text-lg" href="#">Guidelines</a></li>
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