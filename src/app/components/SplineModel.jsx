'use client';
import React from "react";
import Spline from '@splinetool/react-spline';
const SplineModel = () => {
  return (
    <section name="spline" className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-2 pt-20 md:pt-40 p-20 hidden md:block rounded-b-3xl">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left Section */}
        <div className="cols-span-1 hidden md:block">
          <h4 className="text-white font-raleway text-xl pb-4">Get Started For Free</h4>
          <h1 className="text-white font-raleway text-4xl">The best connected <br />vehicle experience.</h1>
          <div className="grid grid-cols-1 p-20 gap-4 font-monument-extended">
            {/* Repeat your buttons or content */}
            {/* Example button */}
            <div className="bg-blue-950 border-2 border-blue-900 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4">
              Driving Rewards
            </div>
            <div className="bg-blue-950 border-2 border-blue-900 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4">
              Universal Support
            </div>
            <div className="bg-blue-950 border-2 border-blue-900 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4">
              Location Tracking
            </div>
            <div className="bg-blue-950 border-2 border-blue-900 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4">
              Vehicle Diagnostics
            </div>
            <div className="bg-blue-950 border-2 border-blue-900 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4">
              Virtual Documents
            </div>
            <div className="bg-blue-950 border-2 border-blue-900 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4">
              Community Builder
            </div>
            {/* Repeat other buttons */}
          </div>
        </div>

        {/* Middle Section */}
        <div className="cols-span-1 h-screen p-10 my-auto">
          {/* Spline 3D Scene */}
          <h4 className="text-blue-400 font-raleway text-sm pb-4 mx-auto justify-center flex font-monument-extended">Reactive Mockup Coming Soon...</h4>

          <Spline scene="https://prod.spline.design/WZbqX91w2YHENZlr/scene.splinecode" />
        </div>

        {/* Right Section */}
        <div className="cols-span-1 pt-20">
          <div className="cols-span-1 hidden md:block">
            <h4 className="text-white font-raleway text-sm pb-4">Put your data to work and maximize the value of your vehicle asset</h4>
            <div className="grid grid-cols-1 p-20 gap-4 font-monument-extended">
              {/* Repeat your buttons or content */}
              {/* Example button */}
              <div className="bg-blue-950 border-2 border-blue-900 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4">
              Enterprise Support
            </div>
            <div className="bg-blue-950 border-2 border-blue-900 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4">
              Predictive Maintenance
            </div>
            <div className="bg-blue-950 border-2 border-blue-900 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4">
              Maintenance Logging
            </div>
            <div className="bg-blue-950 border-2 border-blue-900 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4">
              Machine Learning
            </div>
            <div className="bg-blue-950 border-2 border-blue-900 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4">
              Personalized Ai
            </div>
            <div className="bg-blue-950 border-2 border-blue-900 shadow-md shadow-blue-800 hover:bg-blue-900 cursor-pointer rounded-md rounded-br-3xl flex p-4">
              Complete DIY Guides
            </div>
              {/* Repeat other buttons */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SplineModel;
