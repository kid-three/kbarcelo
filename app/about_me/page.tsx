"use client";

import { Flex, Heading, Box } from "@radix-ui/themes";
import React from "react";

import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowBottomRightIcon,
  ChevronDownIcon,
  FileTextIcon,
  TriangleDownIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";

const aboutMe = () => {
  return (
    <Flex>
      <Box p='4'>
        <Heading size='4' weight='regular' className='section_title'>
          // personal info <span> / bio</span>
        </Heading>
        <Box mt='3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          eligendi ut praesentium soluta id quia nemo quibusdam commodi nulla
          reiciendis, voluptate dicta repudiandae deserunt quaerat adipisci
          ullam sit a nihil!
        </Box>
      </Box>
    </Flex>
  );
};

export default aboutMe;
