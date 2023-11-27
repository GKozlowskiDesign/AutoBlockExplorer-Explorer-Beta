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
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 justify-center items-center pb-20 p-2 gap-3 md:gap-6">
        {/* Content for the first section */}
        <div className="cursor-pointer border-2 border-blue-800 shadow-lg text-white
        shadow-blue-800 bg-blue-900 hover:bg-blue-600 p-10 rounded-br-3xl rounded-md">
        <SiTwitter 
        className="mx-auto text-3xl"/>
        </div>
        <div className="cursor-pointer border-2 border-blue-800 shadow-lg text-white
        shadow-blue-800 bg-blue-900 hover:bg-blue-600 p-10 rounded-br-3xl rounded-md">
        <SiLinkedin 
        className="mx-auto text-3xl"/>
        </div>
        <div className="cursor-pointer border-2 border-blue-800 shadow-lg text-white
        shadow-blue-800 bg-blue-900 hover:bg-blue-600 p-10 rounded-br-3xl rounded-md">
        <SiMedium 
        className="mx-auto text-3xl"/>
        </div>
        <div className="cursor-pointer border-2 border-blue-800 shadow-lg text-white
        shadow-blue-800 bg-blue-900 hover:bg-blue-600 p-10 rounded-br-3xl rounded-md">
        <SiDiscord 
        className="mx-auto text-3xl"/>
        </div>
        <div className="cursor-pointer border-2 border-blue-800 shadow-lg text-white
        shadow-blue-800 bg-blue-900 hover:bg-blue-600 p-10 rounded-br-3xl rounded-md">
        <SiAndroid 
        className="mx-auto text-3xl"/>
        </div>
        <div className="cursor-pointer border-2 border-blue-800 shadow-lg text-white
        shadow-blue-800 bg-blue-900 hover:bg-blue-600 p-10 rounded-br-3xl rounded-md">
        <SiApple 
        className="mx-auto text-3xl"/>
        </div>


      </div> )}

export default Social;