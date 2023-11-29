'use client';
// Import necessary modules and components
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";

// Header component definition
export default function Header() {
  return (
    <Navbar id="header" className="bg-transparent absolute border-t-8 pt-2 pb-2 border-blue-900">
      {/* Logo */}
      <NavbarBrand>
        <Image
          src="/assets/AutoBlockLogo.png"
          width={200}
          height={200}
          alt="Logo"
          className="md:pl-20"
        />
      </NavbarBrand>

      {/* Navigation Content */}
      <NavbarContent justify="end">
        {/* Navigation Item - Connect Button */}
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="font-monument-extended text-white text-xs shadow-2xl shadow-blue-800 bg-gradient-to-tr from-blue-900 to-gray-900 border-b-1 border-r-1 border-blue-400"
          >
            Connect
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
