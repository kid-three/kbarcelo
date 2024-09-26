'use client';
import * as Accordion from '@radix-ui/react-accordion';
import {
  TriangleRightIcon,
  FileTextIcon,
  LightningBoltIcon,
} from '@radix-ui/react-icons';
import { Flex, Heading, Box, Text, Checkbox } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ProjectCheckbox from './ProjectCheckbox';

interface ProjectsAccordionProps {
  selectedValues: string[];
  handleCheckboxChange: (value: string, checked: boolean) => void;
}

const ProjectsAccordion: React.FC<ProjectsAccordionProps> = ({
  selectedValues,
  handleCheckboxChange,
}) => {
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
          <Flex direction="column" gap="2" pl="2" my="2">
            <ProjectCheckbox
              value="ReactJS"
              checked={selectedValues.includes('ReactJS')}
              onChange={handleCheckboxChange}
            />
            <ProjectCheckbox
              value="NextJS"
              checked={selectedValues.includes('NextJS')}
              onChange={handleCheckboxChange}
            />
            <ProjectCheckbox
              value="NodeJS"
              checked={selectedValues.includes('NodeJS')}
              onChange={handleCheckboxChange}
            />
            <ProjectCheckbox
              value="MySQL Database"
              checked={selectedValues.includes('MySQL Database')}
              onChange={handleCheckboxChange}
            />
            <ProjectCheckbox
              value="Wordpress"
              checked={selectedValues.includes('Wordpress')}
              onChange={handleCheckboxChange}
            />
            <ProjectCheckbox
              value="UI / UX Design"
              checked={selectedValues.includes('UI / UX Design')}
              onChange={handleCheckboxChange}
            />
            <ProjectCheckbox
              value="VtexIO"
              checked={selectedValues.includes('VtexIO')}
              onChange={handleCheckboxChange}
            />
          </Flex>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default ProjectsAccordion;
