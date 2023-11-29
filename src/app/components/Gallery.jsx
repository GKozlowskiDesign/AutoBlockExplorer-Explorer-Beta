'use client';

// Import necessary modules and components
import React from "react";
import Image from 'next/image';

// Gallery component definition
const Gallery = () => {
  return (
    <div name="gallery" className="grid grid-col-1 items-center pt-0 md:pb-20 mt-0 bg-black  justify-center">
      <div className="w-full p-10">
        <div className="grid grid-cols-1 gap-4 p-2">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 pb-10 mx-auto">
            {/* Image 1 */}
            <div>
              <Image
                className="rounded-lg w-full md:w-3/4 my-auto mx-auto"
                src="https://images.pexels.com/photos/10638654/pexels-photo-10638654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Turbo Guage"
                width={300}
                height={300}
              />
            </div>

            {/* Image 2 */}
            <div>
              <Image
                className="rounded-lg w-full md:w-3/4 my-auto mx-auto"
                src="https://images.pexels.com/photos/11700328/pexels-photo-11700328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Car Dashboard Blur"
                width={300}
                height={300}
              />
            </div>

            {/* Image 3 */}
            <div>
              <Image
                className="rounded-lg w-full md:w-3/4 my-auto mx-auto"
                src="https://images.pexels.com/photos/3778763/pexels-photo-3778763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Car Dashboard Blur"
                width={300}
                height={300}
              />
            </div>

            {/* Add more images as needed */}
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 pb-10 mx-auto">
            {/* Image 4 */}
            {/* Image 5 */}
            {/* Image 6 */}
            {/* Add more images as needed */}
          </div>

        </div>
      </div>
    </div>
  );
};

// Export the Gallery component
export default Gallery;
