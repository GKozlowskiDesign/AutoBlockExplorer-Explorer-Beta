import React from "react";
import {
  SiAndroid,
  SiTwitter,
  SiMedium,
  SiLinkedin,
  SiDiscord,
  SiApple
} from "react-icons/si";
const Social = () => {
  return (
    <div className="grid grid-cols-1 mt-20 rounded-t-3xl bg-gradient-to-t from-gray-900 via-gray-900 to-blue-950 m-4 border-t-8 border-l-2 border-r-2  border-black">
      <div className="cols-span-1 justify-center flex mx-auto mt-3 mb-3 pb-3 md:mt-10 md:mb-10">
      <h2 className="text-xl md:text-4xl text-white font-monument-extended mx-auto justify-center flex pt-10">Join the Community!</h2>

      </div>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 justify-center items-center pb-3 md:pb-16 gap-3 
   md:gap-6 bg-transparent pt-0 p-4 md:p-14 mb-20 rounded-3xl">
      {/* Twitter */}
      <div className="cursor-pointer text-white 
      bg-gradient-to-bl from-blue-900 via-gray-900 to-black border-2 border-gray-900 shadow-2xl shadow-gray-900 
      hover:opacity-90 hover:shadow-gray-700 p-10 pb-12 rounded-br-3xl rounded-md">
      <p className="text-xs w-1/4 justify-center flex bg-gray-800 border-1 border-gray-600 rounded-br-xl rounded-md p-1 font-thin">Twitter</p>
        <SiTwitter className="mx-auto text-3xl border-1 outline outline-1 text-gray-500
        outline-gray-600 outline-offset-4 border-spacing-6 p-1 border-separate border-gray-700 rounded-3xl  " />
      </div>

      {/* LinkedIn */}
      <div className="cursor-pointer text-white 
      bg-gradient-to-bl from-blue-900 via-gray-900 to-black border-2 border-gray-900 shadow-2xl shadow-gray-900 
      hover:opacity-90 hover:shadow-gray-700 p-10 pb-12 rounded-br-3xl rounded-md">
      <p className="text-xs w-1/4 justify-center flex bg-gray-800 border-1 border-gray-600 rounded-br-xl rounded-md p-1 font-thin">Linkedin</p>
      <SiLinkedin className="mx-auto text-3xl border-1 outline outline-1 text-gray-500
      outline-gray-600 outline-offset-4 border-spacing-6 p-1 border-separate border-gray-700 rounded-3xl  " />
      </div>

      {/* Medium */}
      <div className="cursor-pointer text-white 
      bg-gradient-to-bl from-blue-900 via-gray-900 to-black border-2 border-gray-900 shadow-2xl shadow-gray-900 
      hover:opacity-90 hover:shadow-gray-700 p-10 pb-12 rounded-br-3xl rounded-md">
      <p className="text-xs w-1/4 justify-center flex bg-gray-800 border-1 border-gray-600 rounded-br-xl rounded-md p-1 font-thin">Medium</p>
      <SiMedium className="mx-auto text-3xl border-1 outline outline-1 text-gray-500
      outline-gray-600 outline-offset-4 border-spacing-6 p-1 border-separate border-gray-700 rounded-3xl  " />
      </div>

      {/* Discord */}
      <div className="cursor-pointer text-white 
      bg-gradient-to-bl from-blue-900 via-gray-900 to-black border-2 border-gray-900 shadow-2xl shadow-gray-900 
      hover:opacity-90 hover:shadow-gray-700 p-10 pb-12 rounded-br-3xl rounded-md">
      <p className="text-xs w-1/4 justify-center flex bg-gray-800 border-1 border-gray-600 rounded-br-xl rounded-md p-1 font-thin">Discord</p>
      <SiDiscord className="mx-auto text-3xl border-1 outline outline-1 text-gray-500
      outline-gray-600 outline-offset-4 border-spacing-6 p-1 border-separate border-gray-700 rounded-3xl  " />
      </div>

      {/* Android */}
      <div className="cursor-pointer text-white 
      bg-gradient-to-bl from-blue-900 via-gray-900 to-black border-2 border-gray-900 shadow-2xl shadow-gray-900 
      hover:opacity-90 hover:shadow-gray-700 p-10 pb-12 rounded-br-3xl rounded-md">
      <p className="text-xs w-1/4 justify-center flex bg-gray-800 border-1 border-gray-600 rounded-br-xl rounded-md p-1 font-thin">Android</p>
      <SiAndroid className="mx-auto text-3xl border-1 outline outline-1 text-gray-500
      outline-gray-600 outline-offset-4 border-spacing-6 p-1 border-separate border-gray-700 rounded-3xl  " />
      </div>

      {/* Apple */}
      <div className="cursor-pointer text-white 
      bg-gradient-to-bl from-blue-900 via-gray-900 to-black border-2 border-gray-900 shadow-2xl shadow-gray-900 
      hover:opacity-90 hover:shadow-gray-700 p-10 pb-12 rounded-br-3xl rounded-md">
      <p className="text-xs w-1/4 justify-center flex bg-gray-800 border-1 border-gray-600 rounded-br-xl rounded-md p-1 font-thin">Apple</p>
      <SiApple className="mx-auto text-3xl border-1 outline outline-1 text-gray-500
      outline-gray-600 outline-offset-4 border-spacing-6 p-1 border-separate border-gray-700 rounded-3xl  " />
      </div>
    </div>
    </div>
  );
};
export default Social;
