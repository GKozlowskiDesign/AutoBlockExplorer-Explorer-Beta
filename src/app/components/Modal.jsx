'use client';


import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = React.useState("");

  const modalContents = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
  ];

  const handleOpen = (content) => {
    setModalContent(content);
    onOpen();
  }

  return (



    
    <div className="bg-gradient-to-b from-blue-200 to-blue-300 pb-20 md:pb-20">

      
                  <video     
                  autoPlay
                  loop
                  muted  src={"/Track.mp4"} className="absolute opacity-60 w-full"/>

            <div className="pt-80 md:pt-10 grid grid-cols-2 md:grid-cols-3 p-10 md:p-10 md:gap-4 mx-auto">
                    

        {[
        'Software', 
        'Hardware', 
        'Infrastructure ', 
        'Personalization', 
        'Community',
        'Enterprise'
        ].map((index) => (
        
        <div className="grid p-1 grid-cols-1 items-center justify-center mx-auto w-full">
            <Button key={index} onClick={() => handleOpen(modalContents[index - 1])} 
            className="grid grid-cols-1 w-full shadow-2xl shadow-gray-900 bg-gradient-to-t from-black to-blue-600  hover:border-blue-300 
            rounded-br-3xl rounded-t-md hover:ease-linear over:duration-700 cursor-pointer mb-4 md:pb-40 md:pt-10 pb-20 pt-4 mx-auto justify-center border 
            border-black border-b-4 border-r-4"
            >
            
            <div className="my-auto cols-span-1  p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12  p-2 justify-center items-center mx-auto shadow-2xl text-white bg-blue-500 rounded-xl">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
            </div>

            <div>
            <h3 className='opacity-100 p-4 text-center justify-center
            text-sm lg:text-sm mx-auto text-white hover:opacity-100 duration-1000'>
            {index}
            </h3>
            </div>   
          </Button>

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