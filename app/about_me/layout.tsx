"use client";
import * as Accordion from "@radix-ui/react-accordion";
import {
  TriangleRightIcon,
  FileTextIcon,
  PersonIcon,
  BackpackIcon,
  StarIcon,
  Share2Icon,
  Share1Icon,
} from "@radix-ui/react-icons";
import { Flex, Heading, Box } from "@radix-ui/themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MainAccordion from "@/components/about_me/Accordion";
import { useMediaQuery } from "react-responsive";

const aboutMeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const useDesktopMediaQuery = () =>
    useMediaQuery({ query: "(min-width: 800px)" });

  if (!useDesktopMediaQuery()) {
    return (
      <Flex direction='column' className='about_me'>
        <Flex align='center' m='5'>
          <Heading size='6' weight='regular' className='page_title'>
            _about_me
          </Heading>
        </Flex>
        <Box>
          <MainAccordion />
        </Box>
        {children}
      </Flex>
    );
  }

  return (
    <Flex height='100%'>
      <Flex direction='column' className='icon_column' width='40px'>
        <Flex align='center' py='3' px='2'>
          <PersonIcon width='20px' height='20px' color='white' />
        </Flex>

        <Flex align='center' py='3' px='2'>
          <Share1Icon width='20px' height='20px' />
        </Flex>
        <Flex align='center' py='3' px='2'>
          <StarIcon width='20px' height='20px' />
        </Flex>
      </Flex>
      <Flex direction='column' width='269px' className='accordion_column'>
        <MainAccordion />
      </Flex>
      <Flex className='page_main_content'>
      {children}
      </Flex>
    </Flex>
  );
};

export default aboutMeLayout;
