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
    <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-60 w-11/12 mx-auto bg-transparent m-4">
      <div className="cols-span-1 justify-center flex mx-auto mt-3 mb-3 pb-3 md:mt-10 md:mb-10">
      <h2 className="text-xl md:text-4xl text-white font-monument-extended mx-auto justify-center flex pt-10">Join the Community!</h2>

      </div>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center pb-3 md:pb-10 gap-3 
   md:gap-14 bg-transparent pt-0  mb-20 rounded-3xl">
      {/* Twitter */}
   
      <div className="text-white 
       bg-gradient-to-b from-gray-950 via-gray-800 to-gray-900 border-b-1 border-t-1 border-l-2 border-r-2 border-black shadow-2xl shadow-gray-900 
       hover:opacity-90 hover:shadow-blue-700 p-10 pb-12 rounded-br-3xl rounded-md transition-shadow">
      <p className="text-xs w-1/4 justify-center flex bg-gray-800 border-1 border-gray-600 rounded-br-xl rounded-md p-1 font-thin">Twitter</p>
      <SiTwitter className="mx-auto text-3xl text-white border-1 outline outline-2  cursor-pointer
      outline-blue-900 outline-offset-4 border-spacing-6 p-1 border-separate border-gray-700 rounded-3xl hover:border-white " />
      </div>

      {/* LinkedIn */}
      <div className="text-white 
       bg-gradient-to-b from-gray-950 via-gray-800 to-gray-900 border-b-1 border-t-1 border-l-2 border-r-2 border-black shadow-2xl shadow-gray-900 
       hover:opacity-90 hover:shadow-blue-700 p-10 pb-12 rounded-br-3xl rounded-md transition-shadow">
      <p className="text-xs w-1/4 justify-center flex bg-gray-800 border-1 border-gray-600 rounded-br-xl rounded-md p-1 font-thin">Linkedin</p>
      <SiLinkedin className="mx-auto text-3xl border-1 outline outline-2 text-white cursor-pointer
      outline-blue-900 outline-offset-4 border-spacing-6 p-1 border-separate border-gray-700 rounded-3xl hover:border-white " />
      </div>

      {/* Medium */}
      <div className="text-white 
       bg-gradient-to-b from-gray-950 via-gray-800 to-gray-900 border-b-1 border-t-1 border-l-2 border-r-2 border-black shadow-2xl shadow-gray-900 
       hover:opacity-90 hover:shadow-blue-700 p-10 pb-12 rounded-br-3xl rounded-md transition-shadow">
      <p className="text-xs w-1/4 justify-center flex bg-gray-800 border-1 border-gray-600 rounded-br-xl rounded-md p-1 font-thin">Medium</p>
      <SiMedium className="mx-auto text-3xl border-1 outline outline-2 text-white cursor-pointer
      outline-blue-900 outline-offset-4 border-spacing-6 p-1 border-separate border-gray-700 rounded-3xl hover:border-white " />
      </div>

      {/* Discord */}
      <div className="text-white 
       bg-gradient-to-b from-gray-950 via-gray-800 to-gray-900 border-b-1 border-t-1 border-l-2 border-r-2 border-black shadow-2xl shadow-gray-900 
       hover:opacity-90 hover:shadow-blue-700 p-10 pb-12 rounded-br-3xl rounded-md transition-shadow">
      <p className="text-xs w-1/4 justify-center flex bg-gray-800 border-1 border-gray-600 rounded-br-xl rounded-md p-1 font-thin">Discord</p>
      <SiDiscord className="mx-auto text-3xl border-1 outline outline-2 text-gray-500 cursor-pointer
      outline-blue-900 outline-offset-4 border-spacing-6 p-1 border-separate border-gray-700 rounded-3xl hover:border-white " />
      </div>

      {/* Android */}
      <div className="text-white 
       bg-gradient-to-b from-gray-950 via-gray-800 to-gray-900 border-b-1 border-t-1 border-l-2 border-r-2 border-black shadow-2xl shadow-gray-900 
       hover:opacity-90 hover:shadow-blue-700 p-10 pb-12 rounded-br-3xl rounded-md transition-shadow">
      <p className="text-xs w-1/4 justify-center flex bg-gray-800 border-1 border-gray-600 rounded-br-xl rounded-md p-1 font-thin">Android</p>
      <SiAndroid className="mx-auto text-3xl border-1 outline outline-2 text-white cursor-pointer
      outline-blue-900 outline-offset-4 border-spacing-6 p-1 border-separate border-gray-700 rounded-3xl hover:border-white " />
      </div>

      {/* Apple */}
      <div className="text-white 
       bg-gradient-to-b from-gray-950 via-gray-800 to-gray-900 border-b-1 border-t-1 border-l-2 border-r-2 border-black shadow-2xl shadow-gray-900 
       hover:opacity-90 hover:shadow-blue-700 p-10 pb-12 rounded-br-3xl rounded-md transition-shadow">
      <p className="text-xs w-1/4 justify-center flex bg-gray-800 border-1 border-gray-600 rounded-br-xl rounded-md p-1 font-thin">Apple</p>
      <SiApple className="mx-auto text-3xl border-1 outline outline-2 text-white cursor-pointer
      outline-blue-900 outline-offset-4 border-spacing-6 p-1 border-separate border-gray-700 rounded-3xl hover:border-white " />
      </div>
    </div>
    </div>
  );
};
export default Social;
