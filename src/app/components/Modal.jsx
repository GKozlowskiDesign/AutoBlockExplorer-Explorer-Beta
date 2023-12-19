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
  Tooltip,
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
    src: "",
    content: "",
  });



  // Define modal content details
  const modalContents = [
    { id: 1, 
      header:'Ecosystem', 
      text: 'Explore the EcoSystem of devices and Dapps.', 
      title:'Ecosystem', 
      body: 'Embark on a journey into the future with our upcoming Ecosystem section, a portal to a revolutionary experience set to transform your life. While currently in development, the information button is temporarily disabled, but anticipation builds as we prepare to unveil a dashboard web-app showcasing the intricacies of our groundbreaking ecosystem. This future-ready platform will provide an in-depth exploration of our products, services, solutions, and user types, offering a glimpse into the innovation that defines our ecosystem. Stay tuned for the unveiling, as we bring you a transformative experience that will redefine the way you engage with our offerings and revolutionize your world.',
      content: 'Coming Soon!',
      src: '' },
    { id: 2, 
      header:'Resources', 
      text: 'Comprehensive Resources and Documentation', 
      title:'Resources', 
      body: 'The Resources section serves as a valuable repository of information to assist clients, users, or anyone seeking guidance. By clicking on the information button, youll gain access to a comprehensive GitBook document. This carefully curated resource is designed to provide detailed insights and guidance on a wide range of topics, catering to the diverse needs of our audience. Whether you are a client seeking assistance or a user looking for information, our GitBook document is your go-to reference for comprehensive support.',
      content: 'Open Resources!',
      src: 'https://autoblockexplorer.gitbook.io/autoblockexplorer/' },
    { id: 3, 
      header:'Activity', 
      text: 'Review Offical Business and News Updates.', 
      title:'Activity', 
      body: 'Explore the heartbeat of our journey through the Activity section, currently linked to our Medium account for regular project updates. While you can currently find general project news and updates here, our vision extends far beyond. In the future, were developing a decentralized application that will aggregate data from all our active accounts. This dynamic platform will provide a comprehensive overview of our activities, including projections, calendar dates, and a detailed chronicle of our endeavors. Imagine a space where our journey unfolds transparently, showcasing every milestone and achievement. Stay tuned as we evolve towards a future where our decentralized application offers an immersive and detailed snapshot of our journey, bringing you closer to the heart of our endeavors.',
      content: 'Open Activity',
      src: 'https://medium.com/@autoblockexplorer' },
    { id: 4, 
      header:'Registration', 
      text: 'Pre-Registration Whitelist Coming Soon.', 
      title:'Registration', 
      body: 'Coming Soon...',
      content: 'Coming Soon!',
      src: '' },
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
      {modalContents.map(({ id, text, header, title, body, src, content}) => (
        <div className="grid md:grid-cols-1 w-full p-2" >
          <Card className="bg-gray-700 w-full md:w-11/12 mx-auto flex">
          <Button
            key={id}
            onClick={() => handleOpen(id)}
              className=" overflow-visible rounded-br-3xl rounded-l-sm rounded-tr-sm  pt-4 pb-80 
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
                      <h6 className="justify-center text-center text-white font-thin md:text-md mx-auto hidden md:block">{text}</h6>
                    </div>

                    <Tooltip content={content}>
                    <div className="border-0 border-spacing-10 mt-20 border-blue-700  outline outline-0 outline-blue-700 rounded-3xl mx-auto p-2
                    mb-40 md:mb-40 lg:mb-0 bg-transparent">
                       <Link href={src}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                      className="w-9 h-9 text-white hover:border-white border-1 rounded-3xl p-2 outline outline-2 
                      outline-blue-700 outline-offset-4  border-transparent bg-blue-700 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round"  
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"  />
                   
                  
                      </svg>
                      </Link>
                    </div>
                    </Tooltip>
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