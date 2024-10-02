import React from 'react';

import { Flex, Heading, Box, Text } from '@radix-ui/themes';
import highlights from '../../../components/about_me/highlights.json';

const page = () => {
  return (
    <Flex>
      <Flex
        width={{
          initial: '100%',
          lg: '50%',
        }}
        className="page_main_content_children"
      >
        <Box
          p={{
            initial: '4',
            lg: '8',
          }}
          overflowY="auto"
        >
          <Heading size="4" weight="regular" className="section_title">
            // personal info <span> / bio</span>
          </Heading>
          <Box mt="3">
            <Text>
              I'm a seasoned Engineering Manager and Senior Front End Developer
              with 10 years of experience leading talented teams to achieve
              their best.
              <br />
              <br />
              I've successfully managed remote teams of up to 40 people,
              ensuring that we stay connected and productive no matter where we
              are.
              <br />
              <br />
              I focus on aligning our projects with business goals while
              supporting my team in their professional growth. I believe in
              maintaining a collaborative and welcoming environment, where
              creativity and innovation can thrive.
              <br />
              <br />
              Outside of work, you'll often find me spending time with my family
              or skateboarding. My passion for skateboarding has been with me
              since I was a kid, and it's my favorite way to stay active and
              keep a fresh perspective.
            </Text>
          </Box>
        </Box>
      </Flex>
      <Flex
        width="50%"
        display={{
          initial: 'none',
          lg: 'flex',
        }}
        overflowX="visible"
        direction="column"
        p="8"
      >
        {/* <Box p="4" mx="3" overflowX="scroll"> */}
        <Heading size="4" weight="regular" className="section_title">
          // recent highlights
        </Heading>
        <Box>
          <ul>
            {highlights.map((highlight, index) => (
              // <Box my="6">
              //   <Box p="2" className="typewriter_container">
              //     <Text as="p">
              //       <span className="variable">"title":</span>
              //       <span className="property">{highlight.title}</span>
              //     </Text>
              //     <Text as="p">
              //       <span className="variable">"date":</span>
              //       <span className="property">{highlight.date}</span>
              //     </Text>
              //     <Text as="p">
              //       <span className="variable">"accomplishment":</span>
              //       <span className="property">{highlight.accomplishment}</span>
              //     </Text>
              //   </Box>
              // </Box>

              <li key={index}>
                <span className="page_title">
                  {highlight.title} - {highlight.date}
                </span>
                <br />
                {highlight.accomplishment}
              </li>
            ))}
          </ul>
        </Box>
        {/* </Box> */}
      </Flex>
    </Flex>
  );
};

export default page;
