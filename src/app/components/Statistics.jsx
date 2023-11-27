import React from "react";
const Statistics = () => {
    return (
        <section className="bg-gray-900 pt-0 md:pt-20 pb-20 p-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
       
            <div className="relative border-b-2 border-t-4 border-gray-700  bg-gradient-to-tr
    from-gray-600 to-black rouned-b-3xl rounded-t-3xl">


      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pb-20 pt-20 md:pt-20 lg:pt-20 ">

      
          <div className="border-b-2  border-gray-500 rounded-b-3xl w-11/12 mx-auto p-10 mb-2">
            <h3 className="justify-center pt-6 flex text-xl md:text-4xl text-blue-400">189,294</h3>
            <p className="justify-center pt-1 flex text-sm md:text-md text-white">miles travelled</p>
          </div>

          <div className="grid grid-cols-2 mb-20">
            <div className="border-t-2 border-gray-500 rounded-tr-3xl rounded-tl-3xl w-11/12 mx-auto p-10">
              <h3 className="justify-center flex text-xl md:text-2xl text-blue-400 mx-auto my-auto">11,421</h3>
              <p className="justify-center pt-1 flex text-sm md:text-md text-white">cars connected</p>

            </div>
          
            <div className="border-t-2 border-gray-500 rounded-tl-3xl rounded-tr-3xl w-11/12 mx-auto p-10">
              <h3 className="justify-center flex text-xl md:text-2xl text-blue-400 mx-auto my-auto">125</h3>
              <p className="justify-center pt-1 flex text-sm md:text-md text-white">unquie models</p>

            </div>
          </div>



      </div>
    </div>
     
            </div>
        </section>
    
      )
    }

export default Statistics;