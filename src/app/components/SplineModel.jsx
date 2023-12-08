'use client';
import React from "react";
import Spline from '@splinetool/react-spline';
const SplineModel = () => {
  return (
    <section name="spline" className="shadow-2xl shadow-gray-900 bg-gradient-to-b from-gray-900 via-blue-950 to-gray-950 text-white py-2 pt-20 pb-20 md:pt-20 p-10 md:p-20">
      <div className="grid grid-cols-1">
      <h1 className="text-white font-raleway text-4xl font-monument-extended mx-auto text-center">The best connected <br />vehicle experience.</h1>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left Section */}
        <div className="cols-span-1">
      
          <div className="grid grid-cols-1 md:p-10 pt-10 text-xs md:text-md gap-20 font-monument-extended">
            {/* Repeat your buttons or content */}
            {/* Example button */}
            <div className="bg-gray-950 border-2 border-blue-400 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-bl-3xl flex p-4 justify-center">
              Driving Rewards
            </div>
            <div className="bg-gray-950 border-2 border-blue-400 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-bl-3xl flex p-4 justify-center">
              Universal Support
            </div>
            <div className="bg-gray-950 border-2 border-blue-400 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-bl-3xl flex p-4 justify-center">
              Location Tracking
            </div>
            <div className="bg-gray-950 border-2 border-blue-400 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-bl-3xl flex p-4 justify-center">
              Vehicle Diagnostics
            </div>
            <div className="bg-gray-950 border-2 border-blue-400 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-bl-3xl flex p-4 justify-center">
              Virtual Documents
            </div>
            <div className="bg-gray-950 border-2 border-blue-400 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-bl-3xl flex p-4 justify-center">
              Community Builder
            </div>
            {/* Repeat other buttons */}
          </div>
        </div>

        {/* Middle Section */}
        <div className="cols-span-1 h-screen p-1 my-auto hidden md:block">
          {/* Spline 3D Scene */}
          <Spline className="w-full" scene="https://prod.spline.design/WZbqX91w2YHENZlr/scene.splinecode" />
          
        </div>

        <div className="cols-span-1">
        <div className="grid grid-cols-1 md:p-10 pt-10 text-xs md:text-md gap-20 font-monument-extended">
            {/* Repeat your buttons or content */}
            {/* Example button */}
            <div className="bg-gray-950 border-2 border-blue-400 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4 justify-center">
              Driving Rewards
            </div>
            <div className="bg-gray-950 border-2 border-blue-400 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4 justify-center">
              Universal Support
            </div>
            <div className="bg-gray-950 border-2 border-blue-400 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4 justify-center">
              Location Tracking
            </div>
            <div className="bg-gray-950 border-2 border-blue-400 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4 justify-center">
              Vehicle Diagnostics
            </div>
            <div className="bg-gray-950 border-2 border-blue-400 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4 justify-center">
              Virtual Documents
            </div>
            <div className="bg-gray-950 border-2 border-blue-400 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4 justify-center">
              Community Builder
            </div>
            {/* Repeat other buttons */}
          </div>
          </div>
      </div>
    </section>
  );
};
export default SplineModel;
