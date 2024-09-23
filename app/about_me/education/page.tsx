import React from 'react';

import { Flex, Heading, Box } from '@radix-ui/themes';

const page = () => {
  return (
    <Flex>
      <Box p="4">
        <Heading size="4" weight="regular" className="section_title">
          // personal info <span> / education</span>
        </Heading>

        <Box mt="6">
          <Heading size="6" weight="regular" className="work_title">
            <Box as="span">Collective Academy</Box>
            <Box as="span" className="work_info">
              Mexico City, Mexico
            </Box>
          </Heading>
          <Heading size="5" weight="regular" className="work_title">
            <Box as="span">Masters in Business and Technology</Box>
            <Box as="span" className="work_info">
              2022 - 2023
            </Box>{' '}
          </Heading>
          <ul className="work_list">
            <li>
              The Master in Business and Technology is a 18-month, 10 hours a
              week program that provides the tools, experiences, mentors and
              community needed to master four areas: Business, Technology, Core
              Skills and Global Trends.
            </li>

            <a
              href="https://www.credential.net/0193714a-976c-4045-978d-5ac3b448f53e#gs.f17rru"
              target="_blank"
              className="credential_link"
            >
              Show Credential
            </a>
          </ul>

          <Heading size="6" weight="regular" className="work_title">
            <Box as="span">University of Oregon</Box>
            <Box as="span" className="work_info">
              Oregon, USA
            </Box>
          </Heading>
          <Heading size="5" weight="regular" className="work_title">
            <Box as="span">Bachelors of Arts - Italian Literature</Box>
            <Box as="span" className="work_info">
              2005 - 2010
            </Box>{' '}
          </Heading>
          {/* <ul className="work_list">
            <li>
              The Master in Business and Technology is a 18-month, 10 hours a
              week program that provides the tools, experiences, mentors and
              community needed to master four areas: Business, Technology, Core
              Skills and Global Trends.
            </li>

            <a
              href="https://www.credential.net/0193714a-976c-4045-978d-5ac3b448f53e#gs.f17rru"
              target="_blank"
              className="credential_link"
            >
              Show Credential
            </a>
          </ul> */}
        </Box>
      </Box>
    </Flex>
  );
};

export default page;
