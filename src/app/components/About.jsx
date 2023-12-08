'use client';
import Image from "next/image";



// About component definition
const About = () => {
  
 
  // Render the About component
  return (
 





    <div className="w-full bg-gradient-to-b from-blue-900 via-gray-800 to-gray-950 grid grid-cols-1 md:grid-cols-2 p-10 md:p-20">


      <div className="cols-span-1 w-full md:w-11/12 mx-auto">
        <h1 className="text-3xl md:text-5xl font-monument-extended mx-auto justify-start mt-0 p-4 text-white"><span className="text-blue-400">Envision</span> <br></br>a World Shaped <br></br>by the <span className="text-blue-600">Community</span></h1>
        <div  className="text-lg font-thin pt-2 pb-8 text-white p-4">
        <p className="pb-4">Become a visionary and participate in <span className="font-bold">building future automobile products and solutions</span>. Earn rewards through contributions and <span className="font-bold">watch how your data impacts the network</span>.</p>
        <p>Sign up today to <span className="font-bold">receive early access promotions and much more</span> as a visionary VIP Contributor. </p>
        </div>
\      </div>


 <div className="mb-80 w-full p-10 mx-auto grid grid-cols-1 bg-gradient-to-tr from-gray-900 to-black rounded-3xl border-2  border-blue-400 shadow-2xl shadow-blue-900">
        {/* Text Section */}
        <div className="cols-span-1 mt-4  mx-auto justify-center flex">

        <Image src="/assets/ABExplorer.png"
          height={100}
          width={100}
          className="justify-start"
          alt=""
          />
            </div>
            <div className="cols-span-1 mt-6  mx-auto justify-center flex">


            <h5 className="text-3xl text-center justify-center flex mx-auto md:text-md font-monument-extended text-white">Earn Rewards</h5>

        
            </div>

            <div className="cols-span-1 mt-4  mx-auto justify-center flex">

          <ol className="space-y-2 p-0 md:p-4 text-xs md:text-md text-gray-900">
            <li className="text-white font-thin md:text-lg"><span className="mr-2 font-bold text-blue-400 text-xs md:text-sm font-monument-extended">Step 1</span> Create ABExplorer Account</li>
            <li className="text-white font-thin md:text-lg"><span className="mr-2 font-bold text-blue-400 text-xs md:text-sm font-monument-extended">Step 2</span>Authenticate Yourself</li>
            <li className="text-white font-thin md:text-lg"><span className="mr-2 font-bold text-blue-400 text-xs md:text-sm font-monument-extended">Step 3</span>Contribute Data or Documents</li>
            <li className="text-white font-thin md:text-lg"><span className="mr-2 font-bold text-blue-400 text-xs md:text-sm font-monument-extended">Step 4</span>Collect Rewards Earned</li>

          </ol>
          </div>

      </div>
      </div>


       

  );
};

// Export the About component
export default About;