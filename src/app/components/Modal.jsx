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
      header: 'Drive to Earn D2E', 
      text: 'Download the ABE App', 
      title:'D2E', body: 'Earn cryptocurrency effortlessly with our drive-to-earn system. Simply let us track your location using GPS and 5G while driving. Receive rewards in cryptocurrency for participating in this seamless and secure experience.' },
    { id: 2, 
      header: 'Test to Earn T2E', 
      text: 'Download the ABE App', 
      title:'T2E', 
      body: 'Participate in Test-to-Earn, where users complete bounties testing specific vehicle issues—low tire pressure, low gas, aging axle, air filter, or low oil. Contribute valuable data to a dedicated AI model and earn cryptocurrency rewards for your insights. Drive progress, get rewarded!' },
    { id: 3, 
      header: 'Post to Earn P2E', 
      text: 'Download the ABE App', 
      title:'P2E', 
      body: 'Engage in the Post-to-Earn (P2E) ecosystem, where posting, commenting, and contributing builds value. Your content is monitored, and cryptocurrency rewards await for trending or influential posts. Join the P2E revolution today!' },
    { id: 4, 
      header: 'Compute to Earn CM2E', 
      text: 'Download the ABE App', 
      title:'CM2E', 
      body: 'Empower AI development for predictive vehicle maintenance by sharing your wireless devices computational bandwidth. Earn cryptocurrency for your contribution, and receive a percentage of payouts if the model is utilized by enterprises. Join us in shaping tomorrows automotive landscape!' },
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-2 mx-auto p-10 md:p-20 bg-gradient-to-b from-blue-900 via-gray-800 to-gray-900">
      {modalContents.map(({ id, text, header, title, body}) => (
        <div className="grid md:grid-cols-1 w-full p-2" >
          <Card className="bg-gray-700 w-full md:w-11/12 mx-auto flex">
          <Button
            key={id}
            onClick={() => handleOpen(id)}
              className=" overflow-visible rounded-br-3xl rounded-l-sm rounded-tr-sm hover:-translate-y-1 pt-4 pb-96 
              shadow-xl after:content-[''] after:absolute after:rounded-br-3xl after:rounded-l-sm after:rounded-tr-sm 
              after:inset-0 after:bg-gradient-to-tr from-gray-900 to-black after:z-[-1] after:transition after:!duration-500 
              hover:after:trasition-120 hover:after:opacity-100 grid grid-cols-1"
            >
              {/* Card content */}
              <div className="grid grid-cols-1 pb-40">
                {/* Card Header */}
                <CardHeader className="gap-3 grid grid-cols-1">
                  <Image
                    alt="nextui logo"
                    height={120}
                    radius="lg"
                    src="/assets/AutoBlockLogo.png"
                    width={120}
                    className="flex bg-gray-700 pr-2 border-1 border-gray-600 rounded-br-3xl rounded-md"
                  />
                  <div className="bg-transparent flex">
                    <h6 className="justify-start text-left text-white bg-blue-900 
                    border-1 border-blue-700 rounded-br-3xl rounded-md text-xs p-2 font-monument-extended">
                      Service
                    </h6>
                  </div>
                  </CardHeader>
                  <CardBody>
                  <div className="flex">
                    <h3 className="opacity-100 justify-start pt-2 text-xs md:text-lg break-words text-white hover:opacity-100 duration-1000 font-monument-extended">{header}</h3>
                  </div>
                  <div className="pt-14 grid grid-cols-2">
                    <div className="bg-transparent flex">
                      <h6 className="justify-center text-center my-auto text-white font-thin md:text-xl mx-auto">{text}</h6>
                    </div>
                    <div className="border-1 border-gray-700 border-separate outline outline-2 outline-blue-700 border-spacing-6 rounded-3xl mx-auto p-2 mb-40 md:mb-40 lg:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                      className="w-9 h-9 text-white hover:border-white border-1 rounded-3xl p-1 outline outline-1 
                      outline-gray-600 outline-offset-4 border-spacing-6  border-separate border-gray-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
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