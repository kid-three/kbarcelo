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
import ProjectsAccordion from '@/components/projects/Accordion';

const ProjectsLayout = ({
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
          <ProjectsAccordion />
        </Box>
        {children}
      </Flex>
    );
  }

  return (
    <Flex height="100%">
      <Flex direction="column" width="269px" className="accordion_column">
        <ProjectsAccordion />
      </Flex>
      <Flex flexGrow="2" justify="center" overflowY="scroll" maxHeight="100%">
        {children}
      </Flex>
    </Flex>
  );
};

export default ProjectsLayout;
