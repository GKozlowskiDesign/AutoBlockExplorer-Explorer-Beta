'use client';

import React from "react";
import Image from 'next/image';
const Gallery = () => {
  return (
        <div name="gallery" className="grid grid-col-1 items-center h-screen pt-36 md:h-max md:pt-48 md:pb-96 mt-0 bg-gradient-to-b from-white via-blue-500 to-black  justify-center">
            <div class="container mx-auto p-4">
                <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
                        <div class="grid gap-4">
                            <div className="w-10/12 mx-auto">
                                <img
                                class="h-auto w-full rounded-lg"
                                src="https://images.pexels.com/photos/18818777/pexels-photo-18818777/free-photo-of-sports-cars-in-the-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="GTR"
                                />
                            </div>
                            <div className="w-10/12 mx-auto">
                                <img
                                class="h-auto w-full rounded-lg"
                                src="https://images.pexels.com/photos/10638654/pexels-photo-10638654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Turbo Guage"
                                />
                            </div>
                            <div className="w-10/12 mx-auto">
                                <img
                                class="h-auto w-full rounded-lg"
                                src="https://images.pexels.com/photos/12870234/pexels-photo-12870234.jpeg?auto=compress&cs=tinysrgb&w=300"
                                alt="Audi Tail Lights"
                                />
                            </div>
                        </div>


                        <div class="grid gap-4 mx-auto w-full">
                            <div className="w-10/12 mx-auto">
                                <img
                                class="h-auto w-full rounded-lg"
                                src="https://images.pexels.com/photos/14401634/pexels-photo-14401634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Race Car"
                                />
                            </div>
                            <div className="w-10/12 mx-auto">
                                <img
                                class="h-auto w-full rounded-lg mx-auto"
                                src="https://images.pexels.com/photos/9661350/pexels-photo-9661350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Audi Dashboard"
                                />
                            </div>
                            <div className="w-10/12 mx-auto">
                                <img
                                class="h-auto w-full rounded-lg"
                                src="https://images.pexels.com/photos/1662570/pexels-photo-1662570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Car Dashboard Blur"
                                />
                            </div>
                        </div>


                        
                </div>
            </div>
              

        </div>
    )
};

export default Gallery;