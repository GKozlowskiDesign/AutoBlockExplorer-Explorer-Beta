'use client';

import React from "react";
import Image from 'next/image';
const Gallery = () => {
  return (
        <div name="gallery" className="grid grid-col-1 items-center h-screen pt-36 md:h-max md:pt-20 md:pb-96 mt-0 bg-gradient-to-b from-blue-300 via-blue-800 to-black  justify-center">
            <div class="w-full p-14">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-2">
                        
                        <div class="grid gap-4 my-auto">
                            <div>
                                <Image
                                class="h-auto rounded-lg w-full"
                                src="https://images.pexels.com/photos/12920307/pexels-photo-12920307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
"
                                alt="Turbo Guage"
                                width={300}
                                height={300}
                                />
                            </div>
                            <div>
                                <Image
                                class="h-auto rounded-lg w-full"
                                src="https://images.pexels.com/photos/10638654/pexels-photo-10638654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Turbo Guage"
                                width={300}
                                height={300}
                                />
                            </div>
                            <div>
                                <Image
                                class="h-auto rounded-lg w-full"
                                src="https://images.pexels.com/photos/6059094/pexels-photo-6059094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Audi Tail Lights"
                                width={300}
                                height={300}
                                />
                            </div>
                            <div>
                                <Image
                                class="h-auto rounded-lg w-full"
                                src="https://images.pexels.com/photos/12472234/pexels-photo-12472234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Audi Tail Lights"
                                width={300}
                                height={300}
                                />
                            </div>
                            <div>
                                <Image
                                class="h-auto rounded-lg w-full"
                                src="https://images.pexels.com/photos/2361663/pexels-photo-2361663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Audi Dashboard"
                                width={300}
                                height={300}
                                />
                            </div>
                        </div>


                        <div class="grid gap-4 my-auto">
                            <div>
                                <Image
                                class="h-auto rounded-lg w-full"
                                src="https://images.pexels.com/photos/11700328/pexels-photo-11700328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Car Dashboard Blur"
                                width={300}
                                height={300}
                                />
                            </div>
                            <div>
                                <Image
                                class="h-auto rounded-lg w-full"
                                src="https://images.pexels.com/photos/14277602/pexels-photo-14277602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Audi Tail Lights"
                                width={300}
                                height={300}
                                />
                            </div>
                            <div>
                                <Image
                                class="h-auto rounded-lg w-full"
                                src="https://images.pexels.com/photos/18395712/pexels-photo-18395712/free-photo-of-bmw-e30-parked-on-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Audi Dashboard"
                                width={300}
                                height={300}
                                />
                            </div>
                            <div>
                                <Image
                                class="h-auto rounded-lg w-full"
                                src="https://images.pexels.com/photos/19096863/pexels-photo-19096863/free-photo-of-rock-formations-behind-land-rover-defender.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Audi Dashboard"
                                width={300}
                                height={300}
                                />
                            </div>
                            <div>
                                <Image
                                class="h-auto rounded-lg w-full"
                                src="https://images.pexels.com/photos/4489735/pexels-photo-4489735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Audi Dashboard"
                                width={300}
                                height={300}
                                />
                            </div>
                        </div>

                        <div class="grid gap-4 my-auto">
                                <div>
                                    <Image
                                class="h-auto rounded-lg w-full"
                                src="https://images.pexels.com/photos/10096083/pexels-photo-10096083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Car Dashboard Blur"
                                    width={300}
                                    height={300}
                                    />
                                </div>
                                <div>
                                    <Image
                                class="h-auto rounded-lg w-full"
                                src="https://images.pexels.com/photos/2974246/pexels-photo-2974246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Audi Tail Lights"
                                    width={300}
                                    height={300}
                                    />
                                </div>
                                <div>
                                    <Image
                                class="h-auto rounded-lg w-full"
                                src="https://images.pexels.com/photos/13711948/pexels-photo-13711948.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Audi Dashboard"
                                    width={300}
                                    height={300}
                                    />
                                </div>
                                <div>
                                <Image
                                class="h-auto rounded-lg w-full"
                                src="https://images.pexels.com/photos/2974246/pexels-photo-2974246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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