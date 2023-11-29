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
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 justify-center items-center pb-16 gap-3 
   md:gap-6 bg-transparent pt-14 p-10 md:p-32 mt-20 mb-20 rounded-3xl">
      {/* Twitter */}
      <div className="cursor-pointer text-white 
      bg-gradient-to-bl from-blue-900 via-gray-900 to-black border-2 border-gray-900 shadow-2xl shadow-gray-900 
      hover:opacity-90 hover:shadow-gray-700 p-10 pb-12 rounded-br-3xl rounded-md">
      <p className="text-xs w-1/4 justify-center flex bg-blue-900 rounded-br-xl rounded-md p-1 font-thin">Twitter</p>
        <SiTwitter className="mx-auto text-3xl" />
      </div>

      {/* LinkedIn */}
      <div className="cursor-pointer text-white 
      bg-gradient-to-bl from-blue-900 via-gray-900 to-black border-2 border-gray-900 shadow-2xl shadow-gray-900 
      hover:opacity-90 hover:shadow-gray-700 p-10 pb-12 rounded-br-3xl rounded-md">
      <p className="text-xs w-1/4 justify-center flex bg-blue-900 rounded-br-xl rounded-md p-1 font-thin">Linkedin</p>
      <SiLinkedin className="mx-auto text-3xl" />
      </div>

      {/* Medium */}
      <div className="cursor-pointer text-white 
      bg-gradient-to-bl from-blue-900 via-gray-900 to-black border-2 border-gray-900 shadow-2xl shadow-gray-900 
      hover:opacity-90 hover:shadow-gray-700 p-10 pb-12 rounded-br-3xl rounded-md">
      <p className="text-xs w-1/4 justify-center flex bg-blue-900 rounded-br-xl rounded-md p-1 font-thin">Medium</p>
      <SiMedium className="mx-auto text-3xl" />
      </div>

      {/* Discord */}
      <div className="cursor-pointer text-white 
      bg-gradient-to-bl from-blue-900 via-gray-900 to-black border-2 border-gray-900 shadow-2xl shadow-gray-900 
      hover:opacity-90 hover:shadow-gray-700 p-10 pb-12 rounded-br-3xl rounded-md">
      <p className="text-xs w-1/4 justify-center flex bg-blue-900 rounded-br-xl rounded-md p-1 font-thin">Discord</p>
      <SiDiscord className="mx-auto text-3xl" />
      </div>

      {/* Android */}
      <div className="cursor-pointer text-white 
      bg-gradient-to-bl from-blue-900 via-gray-900 to-black border-2 border-gray-900 shadow-2xl shadow-gray-900 
      hover:opacity-90 hover:shadow-gray-700 p-10 pb-12 rounded-br-3xl rounded-md">
      <p className="text-xs w-1/4 justify-center flex bg-blue-900 rounded-br-xl rounded-md p-1 font-thin">Android</p>
      <SiAndroid className="mx-auto text-3xl" />
      </div>

      {/* Apple */}
      <div className="cursor-pointer text-white 
      bg-gradient-to-bl from-blue-900 via-gray-900 to-black border-2 border-gray-900 shadow-2xl shadow-gray-900 
      hover:opacity-90 hover:shadow-gray-700 p-10 pb-12 rounded-br-3xl rounded-md">
      <p className="text-xs w-1/4 justify-center flex bg-blue-900 rounded-br-xl rounded-md p-1 font-thin">Apple</p>
      <SiApple className="mx-auto text-3xl" />
      </div>
    </div>
  );
};
export default Social;
