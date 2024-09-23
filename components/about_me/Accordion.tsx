'use client';
import * as Accordion from '@radix-ui/react-accordion';
import {
  TriangleRightIcon,
  FileTextIcon,
  LightningBoltIcon,
} from '@radix-ui/react-icons';
import { Flex, Heading, Box } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
const MainAccordion = () => {
  const pathname = usePathname();

  return (
    <Accordion.Root
      className="AccordionRoot"
      type="single"
      collapsible={true}
      defaultValue="item-1"
    >
      <Accordion.Item value="item-1">
        <Accordion.Header className="AccordionHeader">
          <Accordion.Trigger className="AccordionTrigger">
            <TriangleRightIcon
              className="AccordionChevron"
              aria-hidden
              width={20}
              height={20}
            />
            <span>personal-information</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div className="AccordionContentText">
            <Link href="/about_me/bio">
              <button
                className={`AccordionInnerButton ${
                  pathname === '/about_me/bio' ? 'selected' : ''
                }`}
              >
                <FileTextIcon width={20} height={20} color="#43d9ad" /> bio
              </button>
            </Link>
            <Link href="/about_me/work_history">
              <button
                className={`AccordionInnerButton ${
                  pathname === '/about_me/work_history' ? 'selected' : ''
                }`}
              >
                <FileTextIcon width={20} height={20} color="#FEA55F" />{' '}
                work_history
              </button>
            </Link>
            {/* <Link href='/about_me/personal_interests'>
              <button
                className={`AccordionInnerButton ${
                  pathname === "/about_me/personal_interests" ? "selected" : ""
                }`}
              >
                <FileTextIcon width={20} height={20} color='#E99287' />{" "}
                personal_interest
              </button>
            </Link> */}
            <Link href="/about_me/education">
              <button
                className={`AccordionInnerButton ${
                  pathname === '/about_me/education' ? 'selected' : ''
                }`}
              >
                <FileTextIcon width={20} height={20} color="#3A49A4" />{' '}
                education
              </button>
            </Link>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header className="AccordionHeader">
          <Accordion.Trigger className="AccordionTrigger">
            <TriangleRightIcon
              className="AccordionChevron"
              aria-hidden
              width={20}
              height={20}
            />
            <span>hobbies</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div className="AccordionContentText">
            <Link href="/about_me/skate">
              <button
                className={`AccordionInnerButton ${
                  pathname === '/about_me/skate' ? 'selected' : ''
                }`}
              >
                <Image
                  src="/sport.svg"
                  width={20}
                  height={20}
                  alt="skate"
                  color="#43d9ad"
                />{' '}
                Skateboarding
              </button>
            </Link>

            <button className="AccordionInnerButton">
              <LightningBoltIcon width={20} height={20} color="#E99287" /> Tech
              Literacy
            </button>
            {/* <button className="AccordionInnerButton">
              <FileTextIcon width={20} height={20} color="#3A49A4" /> education
            </button> */}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default MainAccordion;
