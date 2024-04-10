"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { TriangleRightIcon, FileTextIcon } from "@radix-ui/react-icons";
import { Flex, Heading, Box } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const aboutMeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  return (
    <Flex direction='column' className='about_me'>
      <Flex align='center' m='5'>
        <Heading size='6' weight='regular' className='page_title'>
          _about_me
        </Heading>
      </Flex>
      <Box>
        <Accordion.Root
          className='AccordionRoot'
          type='single'
          collapsible={true}
          defaultValue='item-1'
        >
          <Accordion.Item value='item-1'>
            <Accordion.Header className='AccordionHeader'>
              <Accordion.Trigger className='AccordionTrigger'>
                <TriangleRightIcon
                  className='AccordionChevron'
                  aria-hidden
                  width={20}
                  height={20}
                />
                <span>personal-information</span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className='AccordionContent'>
              <div className='AccordionContentText'>
                <Link href='/about_me/bio'>
                  <button
                    className={`AccordionInnerButton ${
                      pathname === "/about_me/bio" ? "selected" : ""
                    }`}
                  >
                    <FileTextIcon width={20} height={20} color='#43d9ad' /> bio
                  </button>
                </Link>
                <Link href='/about_me/personal_interests'>
                  <button
                    className={`AccordionInnerButton ${
                      pathname === "/about_me/personal_interests"
                        ? "selected"
                        : ""
                    }`}
                  >
                    <FileTextIcon width={20} height={20} color='#E99287' />{" "}
                    personal interest
                  </button>
                </Link>
                <Link href='/about_me/education'>
                  <button
                    className={`AccordionInnerButton ${
                      pathname === "/about_me/education" ? "selected" : ""
                    }`}
                  >
                    <FileTextIcon width={20} height={20} color='#3A49A4' />{" "}
                    education
                  </button>
                </Link>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value='item-2'>
            <Accordion.Header className='AccordionHeader'>
              <Accordion.Trigger className='AccordionTrigger'>
                <TriangleRightIcon
                  className='AccordionChevron'
                  aria-hidden
                  width={20}
                  height={20}
                />
                <span>hobbies</span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className='AccordionContent'>
              <div className='AccordionContentText'>
                <button className='AccordionInnerButton'>
                  <FileTextIcon width={20} height={20} color='#43d9ad' /> bio
                </button>
                <button className='AccordionInnerButton'>
                  <FileTextIcon width={20} height={20} color='#E99287' />{" "}
                  personal interest
                </button>
                <button className='AccordionInnerButton'>
                  <FileTextIcon width={20} height={20} color='#3A49A4' />{" "}
                  education
                </button>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </Box>
      {children}
    </Flex>
  );
};

export default aboutMeLayout;
