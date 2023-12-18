'use client';

// Import necessary modules and components
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";

// App component definition
export default function App() {
  // Use Next UI hook for modal functionality
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = React.useState({
    id: "",
    header: "",
    text: "",
    title: "",
    body: "",
  });



  // Define modal content details
  const modalContents = [
    { id: 1, 
      header:'Ecosystem', 
      text: 'Explore the EcoSystem of devices and Dapps.', 
      title:'Ecosystem', 
      body: 'Coming Soon...' },
    { id: 2, 
      header:'Resources', 
      text: 'Comprehensive documents and resources for everyone.', 
      title:'Resources', 
      body: 'Coming Soon...' },
    { id: 3, 
      header:'News', 
      text: 'Review official ABExplorer Technical LitePaper.', 
      title:'News', 
      body: 'Coming Soon...' },
    { id: 4, 
      header:'Activity', 
      text: 'Stay updated with Roadmap Reviews', 
      title:'Activity', 
      body: 'Coming Soon...' },
  ];

  const handleOpen = (id) => {
    const index = id - 1;
    if (index < 0 || index >= modalContents.length) {
      console.error("Invalid index:", index);
      return;
    }
    setModalContent(modalContents[index]);
    onOpen();
  };

  // Render the component
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-2 mx-auto p-10 md:p-20 bg-gradient-to-b from-[#D7D8E2] via-blue-400 to-blue-900 md:rounded-none">
      {modalContents.map(({ id, text, header, title, body}) => (
        <div className="grid md:grid-cols-1 w-full p-2" >
          <Card className="bg-gray-700 w-full md:w-11/12 mx-auto flex">
          <Button
            key={id}
            onClick={() => handleOpen(id)}
              className=" overflow-visible rounded-br-3xl rounded-l-sm rounded-tr-sm hover:-translate-y-1 pt-4 pb-80 
              shadow-xl after:content-[''] after:absolute after:rounded-br-3xl after:rounded-l-sm after:rounded-tr-sm 
              after:inset-0 after:bg-gradient-to-tr from-gray-900 to-black after:z-[-1] after:transition after:!duration-500 
              hover:after:trasition-120 hover:after:opacity-100 grid grid-cols-1"
            >
              {/* Card content */}
              <div className="grid grid-cols-1 pb-40">
                {/* Card Header */}
                <CardHeader className="gap-3 grid grid-cols-1">
                  <h1 className="text-white text-xl bg-blue-400 rounded-md border-blue-500 border-2 font-monument-extended">ABExplorer</h1>
                  <div className="bg-transparent flex">
                    <h6 className="justify-start text-left text-white bg-blue-800 
                    border-1 border-blue-900 rounded-br-2xl rounded-md text-xs p-1.5 font-monument-extended">
                      Features
                    </h6>
                  </div>
                  </CardHeader>
                  <CardBody>
                  <div className="flex">
                    <h3 className="opacity-100 justify-start pt-0 text-xs md:text-lg break-words text-white hover:opacity-100 duration-1000 font-monument-extended">{header}</h3>
                  </div>
                  <div className="pt-2 grid grid-cols-2">
                    <div className="bg-transparent flex">
                      <h6 className="justify-center text-center text-white font-thin md:text-md mx-auto flex">{text}</h6>
                    </div>
                    <div className="border-0 border-spacing-10 mt-20 border-blue-700  outline outline-6 outline-blue-700 rounded-3xl mx-auto p-2
                    mb-40 md:mb-40 lg:mb-0 bg-transparent">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                      className="w-9 h-9 text-white hover:border-white border-2 rounded-3xl p-2 outline outline-2 
                      outline-blue-700 outline-offset-4 border-spacing-10 border-separate border-transparent bg-blue-700 mx-auto cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round"  
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />

                        
                      </svg>
                    </div>
                  </div>
                  </CardBody>
              </div>
              {/* Card Footer */}
              <CardFooter>
                <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
              </Button>

            </Card>
             {/* Modal */}
             <Modal isOpen={isOpen} onClose={onClose}>
  <ModalContent className="bg-transparent">
    {(onClose) => (
      <>
        <ModalHeader className="flex flex-col gap-1 text-gray-300 font-monument-extended text-3xl">{modalContent.title}</ModalHeader>
        <ModalBody className="bg-gradient-to-tr from-blue-900 to-black p-12 w-11/12 mx-auto rounded-md pt-10 mt-10 mb-10 
        b-4 border-2 border-gray-800 shadow-lg  shadow-blue-900">
          <p className="text-white font-thin">{modalContent.body}</p>
        </ModalBody>

      </>
    )}
  </ModalContent>
</Modal>
        
        </div>
      ))}

    </div>
  );
}