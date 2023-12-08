"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Switch,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.getElementById("mainClass")?.classList.replace("light", "dark");
    } else {
      document.getElementById("mainClass")?.classList.replace("dark", "light");
    }
  };
  useEffect(() => {
    toggleDarkMode();
  }, [isDarkMode]);
  return (
    <Navbar className="w-screen  px-10 m-0 py-4 ">
      <NavbarBrand>
        <Link className="flex items-center gap-4 text-inherit" href="/">
          <Image alt="logo" src={"/logo.png"} width={40} height={40} />
          <p className="font-bold text-inherit">Basketball </p>
        </Link>
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
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Switch
            checked={!isDarkMode}
            onClick={() => {
              setIsDarkMode((prev) => !prev);
            }}
          >
            Dark Theme
          </Switch>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
