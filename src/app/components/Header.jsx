'use client';
// Import necessary modules and components
import React from "react";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "../components/Icons.jsx";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem,  DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import Image from "next/image";

// Header component definition
export default function Header() {


  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };


  return (
    <Navbar id="header" className="bg-transparent absolute border-t-8 pt-2 pb-2 border-blue-900 w-full mx-auto">
      {/* Logo */}
      <NavbarBrand>
        <Image
          src="/assets/AutoBlockLogo.png"
          width={170}
          height={170}
          alt="Logo"
          className="bg-blue-900 rounded-br-3xl rounded-md pr-2 hidden md:block"
        />
      </NavbarBrand>

      {/* Navigation Content */}
      <NavbarContent justify="end">
        {/* Navigation Item - Connect Button */}
 
            

        <Dropdown>
          <NavbarItem>
        <DropdownTrigger>
              <Button
                disableRipple
                className="p-2 bg-transparent data-[hover=true]:bg-transparent font-monument-extended text-white"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Resources
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
  
      
        <NavbarItem>
          <Button
            as={Link}
            color="primary" 
            variant="light"            
            href="#"
         
            className="font-monument-extended text-white 
            text-xs p-4 shadow-2xl shadow-blue-800 bg-gradient-to-tr 
            from-blue-900 to-gray-900 border-b-1 border-r-1 border-blue-400"
          >
            Connect
          </Button>
          
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
