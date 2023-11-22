'use client';

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons";
import Image from "next/image";

export default function Header() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-yellow-600" fill="currentColor" size={30} />,
    lock: <Lock className="text-violet-600" fill="currentColor" size={30} />,
    activity: <Activity className="text-blue-600" fill="currentColor" size={30} />,
    flash: <Flash className="text-red-600" fill="currentColor" size={30} />,
    server: <Server className="text-green-400" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };





  return (
    <Navbar id="header" className="bg-transparent absolute md:absolute border-b-4 border-r-4 border-l-4 border-black">
      <NavbarBrand>
        <Image src="/assets/AutoBlockLogo.png"
        width={150}
        height={150}
        alt="Logo"
        className="pl-3"
        />
      </NavbarBrand>
      
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" className="text-white text-xs shadow-2xl shadow-blue-800 bg-black border-b-1 border-r-1 border-blue-400">
            Connect
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}