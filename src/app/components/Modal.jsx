'use client';


import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Link,  Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import Image from "next/image";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = React.useState("");

  const modalContents = [

    {
      id: 1,
      text: 'Download the ABE mobile app',
      header: 'Start Earning Rewards From Driving'

    },

    {
      id: 2,
      text: 'Learn more about the ecosystem',
      header: 'Your Gateway to Efficiency and Safety'

    }
    
  ];

  const handleOpen = (content) => {
    setModalContent(content);
    onOpen();
  }

  return (



    
    <div className="z-20 lg:pt-20  border-b-2 border-black  bg-gradient-to-tr
    from-gray-600 to-black rouned-b-3xl">


      <div className="grid grid-cols-1 md:grid-cols-2 pb-20 pt-32">
        <div className="grid grid-cols-2 mb-20 md:mb-0">
        <div className="border-t-2 border-gray-500 rounded-tl-3xl w-11/12 mx-auto p-10">
            <h3 className="justify-center flex text-xl md:text-3xl text-white mx-auto my-auto mt-10">About</h3></div>
            <div className="border-t-2 border-gray-500 rounded-tr-3xl w-11/12 mx-auto p-10">
            <h3 className="justify-center flex text-xl md:text-3xl text-white mx-auto my-auto mt-10">Vision</h3>

          </div>
        </div>
        <div className="border-t-2 border-gray-500 rounded-tr-3xl w-11/12 mx-auto p-10">
          <h3 className="justify-center pt-6 flex text-xl md:text-3xl text-white">Join thousands of other 
        <br></br>Drivers on ABE</h3></div>



      </div>
    


            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:gap-2 mx-auto">

        


      {modalContents.map(({index, text, header}) => (
        
        <div className="grid grid-cols-1 w-full p-2">
                <Card className="bg-gray-700 w-full mx-auto flex">
                <Button key={index} onClick={() => handleOpen(modalContents[index - 1])} 
            className=" overflow-visible rounded-br-3xl rounded-l-sm rounded-tr-sm 
            hover:-translate-y-1 pt-4 pb-96 shadow-xl after:content-[''] 
            after:absolute after:rounded-br-3xl after:rounded-l-sm after:rounded-tr-sm after:inset-0 after:bg-gray-500 
            after:z-[-1] after:transition after:!duration-500 hover:after:trasition-120 hover:after:opacity-0
            grid grid-cols-1"
            >

<div className="grid grid-cols-1 pb-64">

            <CardHeader className="gap-3 grid grid-cols-1">
            {index}
 
                <Image
                  alt="nextui logo"
                  height={100}
                  radius="lg"
                  src="/assets/AutoBlockLogo.png"
                  width={100}
                />

            <div className="bg-transparent flex">
            <h6 className="justify-start text-left text-gray-500 bg-white rounded-3xl text-xs p-2">AutoBlockExplorer</h6>
            </div>
            
            <div className="flex">
            <h3 className='opacity-100 justify-start pt-2
           text-xs md:text-lg break-words text-white hover:opacity-100 duration-1000'>
            {header}
            </h3>
            </div>

            <div className="pt-32 pb-20 grid grid-cols-2">

            <div className="bg-transparent flex">
            <h6 className="justify-center text-center my-auto text-white text-xs">{text}</h6>
            </div>

            <div className="border-2 rounded-3xl mx-auto p-1.5 mb-40 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
            stroke="currentColor" class="w-9 h-9 p-1 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>

            </div>
            </div>
            </CardHeader>

        </div>

      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>


          </Button>

                </Card>
     

        </div>
        ))}

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
             
               <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
             
              <ModalBody>
                <p>{modalContent}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

     
      </div>
      </div>
 
                    
      
  );
}