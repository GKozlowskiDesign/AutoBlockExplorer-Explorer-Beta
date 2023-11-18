'use client';

import React from "react";
import Image from 'next/image';
const Gallery = () => {
  return (
        <div name="gallery" className="grid grid-col-1 items-center h-screen pt-36 md:h-max md:pt-20 md:pb-96 mt-0 bg-gradient-to-b from-blue-400 via-blue-800 to-black  justify-center">
            <div class="w-full p-14">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-2">
                        
                        <div class="grid gap-4">
                            <div>
                                <Image
                                class="h-auto max-w-full rounded-lg"
                                src="https://images.pexels.com/photos/10638654/pexels-photo-10638654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Turbo Guage"
                                />
                            </div>
                            <div>
                                <Image
                                class="h-auto max-w-full rounded-lg"
                                src="https://images.pexels.com/photos/4674330/pexels-photo-4674330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Audi Tail Lights"
                                />
                            </div>
                            <div>
                                <Image
                                class="h-auto max-w-full rounded-lg"
                                src="https://images.pexels.com/photos/9661350/pexels-photo-9661350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Audi Tail Lights"
                                />
                            </div>
                        </div>


                        <div class="grid gap-4">
                            <div>
                                <Image
                                class="h-auto max-w-full rounded-lg"
                                src="https://images.pexels.com/photos/11700328/pexels-photo-11700328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Car Dashboard Blur"
                                />
                            </div>
                            <div>
                                <Image
                                class="h-auto max-w-full rounded-lg"
                                src="https://images.pexels.com/photos/9686487/pexels-photo-9686487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s"
                                alt="Audi Tail Lights"
                                />
                            </div>
                            <div>
                                <Image
                                class="h-auto max-w-full rounded-lg"
                                src="https://images.pexels.com/photos/16531647/pexels-photo-16531647/free-photo-of-car-with-an-open-hood.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Audi Dashboard"
                                />
                            </div>
                        </div>

                        <div class="grid gap-4">
                                <div>
                                    <Image
                                    class="h-auto max-w-full rounded-lg"
                                    src="https://images.pexels.com/photos/9661335/pexels-photo-9661335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Car Dashboard Blur"
                                    />
                                </div>
                                <div>
                                    <Image
                                    class="h-auto max-w-full rounded-lg"
                                    src="https://images.pexels.com/photos/2974246/pexels-photo-2974246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Audi Tail Lights"
                                    />
                                </div>
                                <div>
                                    <Image
                                    class="h-auto max-w-full rounded-lg"
                                    src="https://images.pexels.com/photos/13711948/pexels-photo-13711948.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Audi Dashboard"
                                    />
                                </div>
                            </div>      
                   
                </div>
            </div>
        </div>
    )
};

export default Gallery;