'use client';


import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
const Footer = () => {
    return (
        
      <footer name="footer" className="bg-black text-white py-2 pt-64">
        <div className="container mx-auto flex justify-between items-center pb-40 p-4">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h2 className="text-xl font-bold">Company</h2>
            <ul className="mt-2">
              <li className="mb-2"><a className="hover:text-blue-400 text-sm" href="#">About Us</a></li>
              <li className="mb-2"><a className="hover:text-blue-400 text-sm" href="#">Careers</a></li>
              <li className="mb-2"><a className="hover:text-blue-400 text-sm" href="#">Blog</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h2 className="text-xl font-bold">Resources</h2>
            <ul className="mt-2">
              <li className="mb-2"><a className="hover:text-blue-400 text-sm" href="#">Docs</a></li>
              <li className="mb-2"><a className="hover:text-blue-400 text-sm" href="#">API</a></li>
              <li className="mb-2"><a className="hover:text-blue-400 text-sm" href="#">Support</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h2 className="text-xl font-bold">Community</h2>
            <ul className="mt-2">
              <li className="mb-2"><a className="hover:text-blue-400 text-sm"href="#">Forums</a></li>
              <li className="mb-2"><a className="hover:text-blue-400 text-sm" href="#">Partners</a></li>
              <li className="mb-2"><a className="hover:text-blue-400 text-sm" href="#">Developers</a></li>
            </ul>
          </div>
        </div>

        <div className="mx-auto items-center justify-center p-5 grid grid-cols-6">
          <div className="col-span-4 justify-start">        
          <div className="justify-start">
                                <Image
                                className="justify-start mb-0 mr-2 hover:bg-indigo-700"
                                src="/assets/logoABE.png"
                                alt="AutoBlockExplorer-Logo"
                                width={100}
                                height={40}
                                priority
                                />
                        </div>
          </div>

          <div className="col-span-2 justify-end pl-20 md:pl-72 mx-auto pb-2">
          <Link activeClass="active" to="header" smooth duration={900}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 rounded-3xl cursor-pointer hover:bg-blue-400 bg-blue-700 p-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </Link>

          </div>
            
          </div>
            <div className="border-t p-2">
                <div className="container mx-auto flex justify-between items-center pb-20 p-2">
                        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
                            <ul className="mt-2">
                            <li className="mb-1"><a className="hover:text-violet-400 text-sm" href="#">Terms</a></li>
                            <li className="mb-1"><a className="hover:text-violet-400 text-sm" href="#">Policies</a></li>
                            <li className="mb-1"><a className="hover:text-violet-400 text-sm" href="#">Guidelines</a></li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4"></div>
                        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4"></div>
                        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4"></div>
                </div>
            </div>
     

      </footer>
    );
  };
  
  export default Footer;