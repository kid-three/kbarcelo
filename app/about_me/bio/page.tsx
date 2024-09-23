import React from "react";

import { Flex, Heading, Box, Text } from "@radix-ui/themes";

const page = () => {
  return (
    <Flex>
        <Flex width={{
          initial:"100%",
          lg: "50%"
        }} className='page_main_content_children'>
        <Box
        p={{
          initial: "4",
          lg: "8",
        }}
        overflowY='scroll'
      >
        <Heading size='4' weight='regular' className='section_title'>
          // personal info <span> / bio</span>
        </Heading>
        <Box mt='3'>
          <Text>
          I'm a seasoned Engineering Manager and Senior Front End Developer with 10 years of experience leading talented teams to achieve their best.
          <br/>
          <br/>
          I've successfully managed remote teams of up to 40 people, ensuring that we stay connected and productive no matter where we are. 
          <br/>
          <br/>
           I focus on aligning our projects with business goals while supporting my team in their professional growth. I believe in maintaining a collaborative and welcoming environment, where creativity and innovation can thrive. 
           <br/>
           <br/>
           Outside of work, you'll often find me skateboarding—it's my favorite way to stay active and keep a fresh perspective.
          </Text>
        </Box>
      </Box>
        </Flex>
        <Flex width='50%' display={{
          initial: 'none',
          lg: 'flex'
        }}>
          <Box p='4'>
            <Heading size='4' weight='regular' className='section_title'>
              // code snippets
            </Heading>
            <Box mt='3'>
            !
            </Box>
          </Box>
        </Flex>
    
    </Flex>
  );
};

export default page;


