"use client";
import { Flex, Box, Heading } from "@radix-ui/themes";
import React, { ReactElement, ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopMenu = () => {
  const pathname = usePathname();

  return (
    <Flex
      height='2.5rem'
      justify='between'
      className='desktop_header'
      display={{ initial: "none", lg: "flex" }}
    >
      <Flex height='100%' align='center'>
        <Link href='/'>
          <Heading size='4' weight='regular' className='nav_name'>
            kinich_barcelo
          </Heading>
        </Link>
        <Link
          className={`desktop_link ${pathname === "/" ? "active" : ""}`}
          href='/'
        >
          _hello
        </Link>
        <Link
          className={`desktop_link ${
            pathname.includes("/about_me") ? "active" : ""
          }`}
          href='/about_me'
        >
          _about_me
        </Link>
        <Link
          className={`desktop_link ${pathname === "/projects" ? "active" : ""}`}
          href='/projects'
        >
          _projects
        </Link>
      </Flex>
      <Link
        className={`desktop_link ${pathname === "/contact_me" ? "active" : ""}`}
        href='/contact_me'
      >
        _contact_me
      </Link>
    </Flex>
  );
};

export default DesktopMenu;
