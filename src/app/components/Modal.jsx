'use client';

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

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = React.useState("");

  const modalContents = [
    {
      id: 1,
      header: 'Drive to Earn D2E',
      text: 'Download the ABE App',
    },
    {
      id: 2,
      header: 'Test to Earn T2E',
      text: 'Download the ABE App',
    },
    {
      id: 3,
      header: 'Contribute to Earn C2E',
      text: 'Download the ABE App',
    },
    {
      id: 4,
      header: 'Create to Earn C2E',
      text: 'Download the ABE App',
    },
  ];

  const handleOpen = (content) => {
    setModalContent(content);
    onOpen();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-2 mx-auto p-10 md:p-20 bg-gradient-to-b from-blue-900 via-gray-800 to-gray-900">
      {modalContents.map(({ index, text, header }) => (
        <div className="grid md:grid-cols-1 w-full p-2">
          <Card className="bg-gray-700 w-full md:w-11/12 mx-auto flex">
            <Button
              key={index}
              onClick={() => handleOpen(modalContents[index - 1])}
              className=" overflow-visible rounded-br-3xl rounded-l-sm rounded-tr-sm 
                hover:-translate-y-1 pt-4 pb-96 shadow-xl after:content-[''] 
                after:absolute after:rounded-br-3xl after:rounded-l-sm after:rounded-tr-sm after:inset-0 after:bg-gray-500 
                after:z-[-1] after:transition after:!duration-500 hover:after:trasition-120 hover:after:opacity-0
                grid grid-cols-1"
            >
              <div className="grid grid-cols-1 pb-64">
                <CardHeader className="gap-3 grid grid-cols-1">{index}
                  <Image
                    alt="nextui logo"
                    height={120}
                    radius="lg"
                    src="/assets/AutoBlockLogo.png"
                    width={120}
                    className="flex bg-gray-400 rounded-br-3xl rounded-md"
                  />
                  <div className="bg-transparent flex">
                    <h6 className="justify-start text-left text-white bg-blue-900 rounded-br-3xl rounded-md text-xs p-2 font-monument-extended">
                      Service
                    </h6>
                  </div>
                  <div className="flex">
                    <h3 className='opacity-100 justify-start pt-2 text-xs md:text-lg break-words text-white hover:opacity-100 duration-1000 font-monument-extended'>{header}</h3>
                  </div>
                  <div className="pt-32 pb-20 grid grid-cols-2">
                    <div className="bg-transparent flex">
                      <h6 className="justify-center text-center my-auto text-white font-thin md:text-xl mx-auto pb-10">{text}</h6>
                    </div>
                    <div className="border-2 rounded-3xl mx-auto p-1.5 mb-40 md:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9 p-1 text-white hover:text-blue-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </div>
                </CardHeader>
              </div>
              <CardFooter>
                <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
            </Button>
          </Card>
        </div>
      ))}
      <Modal isOpen={isOpen} onClose={onClose}>
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
  );
}