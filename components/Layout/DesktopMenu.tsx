"use client";
import { Flex, Box, Heading } from "@radix-ui/themes";
import React, { ReactElement, ReactNode } from "react";
import Header from "./Header";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopMenu = () => {
  const useDesktopMediaQuery = () =>
    useMediaQuery({ query: "(min-width: 800px)" });

  if (!useDesktopMediaQuery()) {
    return null;
  }

  const pathname = usePathname();

  return (
    <Flex height='2.5rem' justify='between' className='desktop_header'>
      <Flex height='100%' align='center'>
        <Heading size='4' weight='regular' className='nav_name' asChild>
          <Link href='/'>kinich_barcelo </Link>
        </Heading>

        <Link
          className={`desktop_link ${pathname === "/" ? "active" : ""}`}
          href='/'
        >
          _hello
        </Link>
        <Link
          className={`desktop_link ${pathname === "/about_me" ? "active" : ""}`}
          href='/about_me'
        >
          _bout_me
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
