import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function Nav() {
  return (
    <Navbar shouldHideOnScroll className="w-screen px-10 m-0 py-4">
      <NavbarBrand className="flex items-center gap-4">
        <Image alt="logo" src={"/logo.png"} width={40} height={40} />

        <p className="font-bold text-inherit">Basketball Semantique</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button as={Link} color="primary" href="/players" variant="flat">
            Players
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="/teams" variant="flat">
            Teams
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="danger" href="/coaches" variant="flat">
            Coaches
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="success" href="/stadiums" variant="flat">
            Stadiums
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" href="/games" variant="flat">
            Games
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}
