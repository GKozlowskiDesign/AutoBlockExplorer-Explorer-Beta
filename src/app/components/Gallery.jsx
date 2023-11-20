'use client';

import React from "react";
import Image from 'next/image';
const Gallery = () => {
  return (
        <div name="gallery" className="grid grid-col-1 items-center pt-0 md:pb-20 mt-0 bg-gradient-to-b from-blue-300 via-blue-800 to-black  justify-center">
            <div class="w-full p-10">
                <div class="grid grid-cols-1 gap-4 p-2">
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 pb-10 mx-auto">
                
                            <div>
                                <Image
                                class="rounded-lg w-full md:w-3/4 my-auto mx-auto"
                                src="https://images.pexels.com/photos/10638654/pexels-photo-10638654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Turbo Guage"
                                width={300}
                                height={300}
                                />
                            </div>
                    


                            <div>
                                <Image
                                class="rounded-lg w-full md:w-3/4 my-auto mx-auto"
                                src="https://images.pexels.com/photos/11700328/pexels-photo-11700328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Car Dashboard Blur"
                                width={300}
                                height={300}
                                />
                            </div>

                            <div>
                                <Image
                                class="rounded-lg w-full md:w-3/4 my-auto mx-auto"
                                src="https://images.pexels.com/photos/3778763/pexels-photo-3778763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Car Dashboard Blur"
                                width={300}
                                height={300}
                                />
                            </div>
                            <div>
                                <Image
                                class="rounded-lg w-full md:w-3/4 my-auto mx-auto"
                                src="https://images.pexels.com/photos/14277602/pexels-photo-14277602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Audi Tail Lights"
                                width={300}
                                height={300}
                                />
                            </div>
                            <div>
                                <Image
                                class="rounded-lg w-full md:w-3/4 my-auto mx-auto"
                                src="https://images.pexels.com/photos/5727251/pexels-photo-5727251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Audi Dashboard"
                                width={300}
                                height={300}
                                />
                            </div>
                            <div>
                                <Image
                                class="rounded-lg w-full md:w-3/4 my-auto mx-auto"
                                src="https://images.pexels.com/photos/19096863/pexels-photo-19096863/free-photo-of-rock-formations-behind-land-rover-defender.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Audi Dashboard"
                                width={300}
                                height={300}
                                />
                            </div>
                        

                                <div>
                                    <Image
                                class="rounded-lg w-full md:w-3/4 my-auto mx-auto"
                                src="https://images.pexels.com/photos/10096083/pexels-photo-10096083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Car Dashboard Blur"
                                    width={300}
                                    height={300}
                                    />
                                </div>
                                <div>
                                    <Image
                                class="rounded-lg w-full md:w-3/4 my-auto mx-auto"
                                src="https://images.pexels.com/photos/2974246/pexels-photo-2974246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Audi Tail Lights"
                                    width={300}
                                    height={300}
                                    />
                                </div>
                                <div>
                                    <Image
                                class="rounded-lg w-full md:w-3/4 my-auto mx-auto"
                                src="https://images.pexels.com/photos/13711948/pexels-photo-13711948.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Audi Dashboard"
                                    width={300}
                                    height={300}
                                    />
                                </div>
                    
                            </div>      

                            
                   
                </div>
            </div>
        </div>
    )
};

export default Gallery;