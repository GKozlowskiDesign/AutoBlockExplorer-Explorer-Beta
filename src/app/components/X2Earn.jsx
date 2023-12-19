'use client';
import Image from "next/image";
// About component definition
const X2Earn = () => {
// Render the About component
return (
<div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-950 grid grid-cols-1 md:grid-cols-2 p-10 md:p-20">
    <div className="mb-4 md:mb-40 w-full p-2 md:p-6 mx-auto grid grid-cols-1 bg-transparent rounded-3xl border-2  border-blue-400 shadow-2xl shadow-blue-900">
            <div className="cols-span-1 mx-auto justify-center flex">
            <Image src="/assets/Earn.png"
            height={150}
            width={700}
            className="justify-start rounded-xl"
            alt=""
            />
            </div>
    </div>
    <div className="cols-span-1 w-full md:w-11/12 mx-auto">
        <h1 className="text-3xl md:text-5xl font-monument-extended mx-auto justify-start mt-0 p-4 text-white"><span className="text-blue-400">Share Data</span><br></br>Earn Rewards
        <span className="text-blue-600"> Build Ai</span></h1>
        <div  className="text-lg font-thin pt-2 pb-8 text-white p-4 gap-2">
        <p className="pb-4">Effortlessly accumulate rewards by driving a designated vehicle with<span className="font-bold"> Drive to Earn (D2E)</span>.</p>
        <p className="pb-4">Complete bounties addressing specific issues with models based on vechicles using<span className="font-bold"> Test to Earn (T2E)</span>.</p>
        <p className="pb-4">Simply provide your input on topics helping build Large Language Models (LLMS) with<span className="font-bold"> Post to Earn (P2E)</span>.</p>
        <p className="pb-4">Contribute computational power to test models earning massive payouts with<span className="font-bold"> Contribute Compute to Earn (CC2E)</span>.</p>
        </div>
    </div>
</div>
  );
};
// Export the About component
export default X2Earn;