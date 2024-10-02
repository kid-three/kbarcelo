'use client';
import * as Accordion from '@radix-ui/react-accordion';
import {
  TriangleRightIcon,
  FileTextIcon,
  PersonIcon,
  BackpackIcon,
  StarIcon,
  Share2Icon,
  Share1Icon,
} from '@radix-ui/react-icons';
import { Flex, Heading, Box } from '@radix-ui/themes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MainAccordion from '@/components/about_me/Accordion';
import { useMediaQuery } from 'react-responsive';
import ProjectsAccordion from '@/components/projects/ProjectAccordion';
import ProjectCheckbox from '@/components/projects/ProjectCheckbox';
import ProjectList from '@/components/projects/ProjectList';

const ProjectsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setSelectedValues((prevSelectedValues) => {
      if (checked) {
        // Add the value to the selected values array
        return [...prevSelectedValues, value];
      } else {
        // Remove the value from the selected values array
        return prevSelectedValues.filter(
          (selectedValue) => selectedValue !== value
        );
      }
    });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const useDesktopMediaQuery = () =>
    useMediaQuery({ query: '(min-width: 800px)' });

  if (!useDesktopMediaQuery()) {
    return (
      <Flex direction="column" className="about_me">
        <Flex align="center" m="5">
          <Heading size="6" weight="regular" className="page_title">
            _projects
          </Heading>
        </Flex>
        <Box>
          <ProjectsAccordion
            selectedValues={selectedValues}
            handleCheckboxChange={handleCheckboxChange}
          />
        </Box>
        <ProjectList selectedTags={selectedValues} />
      </Flex>
    );
  }

  return (
    <Flex height="100%">
      <Flex direction="column" width="269px" className="accordion_column">
        <ProjectsAccordion
          selectedValues={selectedValues}
          handleCheckboxChange={handleCheckboxChange}
        />
      </Flex>
      <Flex flexGrow="2" justify="center" overflowY="visible" maxHeight="100%">
        <ProjectList selectedTags={selectedValues} />
      </Flex>
    </Flex>
  );
};

export default ProjectsLayout;
