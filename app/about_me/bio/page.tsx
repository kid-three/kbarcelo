import React from "react";

import { Flex, Heading, Box, Text } from "@radix-ui/themes";

const page = () => {
  return (
    <Flex>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            consequuntur distinctio tempore? Consequatur beatae harum maiores
            perspiciatis? Provident vero iusto blanditiis odit, consequuntur
            iste repellat sunt a architecto! Hic praesentium maiores doloremque
            ut nulla sunt dolores beatae quo dolor temporibus recusandae, rerum
            blanditiis. Quibusdam perferendis rerum culpa corporis sapiente
            officiis dolore modi, dicta a illo! A voluptatibus voluptate sit.
            Nam dolorem ducimus voluptas, nemo rerum corporis, officiis tempora,
            est commodi excepturi nobis assumenda! Quia voluptate libero dolores
            dolorem iusto maxime quas quae! Accusantium eaque fugiat perferendis
            impedit blanditiis expedita, iure perspiciatis dolores vero, velit
            consequuntur ipsa sed, unde ratione maxime?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            consequuntur distinctio tempore? Consequatur beatae harum maiores
            perspiciatis? Provident vero iusto blanditiis odit, consequuntur
            iste repellat sunt a architecto! Hic praesentium maiores doloremque
            ut nulla sunt dolores beatae quo dolor temporibus recusandae, rerum
            blanditiis. Quibusdam perferendis rerum culpa corporis sapiente
            officiis dolore modi, dicta a illo! A voluptatibus voluptate sit.
            Nam dolorem ducimus voluptas, nemo rerum corporis, officiis tempora,
            est commodi excepturi nobis assumenda! Quia voluptate libero dolores
            dolorem iusto maxime quas quae! Accusantium eaque fugiat perferendis
            impedit blanditiis expedita, iure perspiciatis dolores vero, velit
            consequuntur ipsa sed, unde ratione maxime?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            consequuntur distinctio tempore? Consequatur beatae harum maiores
            perspiciatis? Provident vero iusto blanditiis odit, consequuntur
            iste repellat sunt a architecto! Hic praesentium maiores doloremque
            ut nulla sunt dolores beatae quo dolor temporibus recusandae, rerum
            blanditiis. Quibusdam perferendis rerum culpa corporis sapiente
            officiis dolore modi, dicta a illo! A voluptatibus voluptate sit.
            Nam dolorem ducimus voluptas, nemo rerum corporis, officiis tempora,
            est commodi excepturi nobis assumenda! Quia voluptate libero dolores
            dolorem iusto maxime quas quae! Accusantium eaque fugiat perferendis
            impedit blanditiis expedita, iure perspiciatis dolores vero, velit
            consequuntur ipsa sed, unde ratione maxime?
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default page;
