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
const ProjectsAccordion = () => {
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
            <span>projects</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div className="AccordionContentText">{'[] Filters here'}</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default ProjectsAccordion;
