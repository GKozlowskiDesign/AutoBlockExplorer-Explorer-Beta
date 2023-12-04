import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar className="bg-transparent -my-20" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit font-monument-extended text-xl text-white hidden md:block">ABExplorer</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 pl-80" justify="center">
        <NavbarItem>
          <Link className="text-white font-monument-extended text-xs" href="#">
            Research
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link className="text-white font-monument-extended text-xs" href="#">
            Company
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link className="text-white font-monument-extended text-xs" href="#">
            Docs
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent  className="mx-auto flex p-4 m-1" justify="center">
        <NavbarItem>
          <Button as={Link} className="bg-blue-900 border-1 border-blue-700 opacity-70 font-monument-extended text-white text-xs rounded-br-3xl" href="#" variant="flat">
            Download
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="pl-4 w-10/12" key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full mt-2 text-blue-100 text-md pl-2 border-2 border-blue-900 bg-blue-900 opacity-40 rounded-br-3xl hover:opacity-100 rounded-t-lg rounded-bl-md font-monument-extended"
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
