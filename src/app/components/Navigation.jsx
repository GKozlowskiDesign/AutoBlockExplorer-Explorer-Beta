
import React from "react";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import {
  SiTwitch,
  SiX,
  SiNotion,
  SiMedium
} from "react-icons/si";
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Get Started",
    "Ecosystem",
    "Resources",
    "LitePaper",
    "Roadmap",
  ];

  return (
    <Navbar className="bg-transparent -my-16 p-2.5" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
    
        <NavbarBrand>        
          <Image src="/assets/ABExplorer.png"
          height={60}
          width={60}
          className="justify-start ml-3 p-2"
          alt=""
          />

        </NavbarBrand>
      </NavbarContent>

     
      <NavbarContent>
      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden ml-32 text-white"
        />
      </NavbarContent>
     
      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="pl-4 w-11/12" key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full mt-8 p-2 text-blue-100 text-md pl-2 border-2 border-blue-900 bg-blue-600 opacity-100 rounded-br-3xl hover:opacity-100 rounded-t-lg rounded-bl-md font-monument-extended"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      
    </Navbar>
  );
}
