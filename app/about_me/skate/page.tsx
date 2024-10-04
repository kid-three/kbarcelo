'use client';
import { Flex, Box, Heading, Text } from '@radix-ui/themes';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import Sk8 from '@/components/home/Sk8';

const Skate = () => {
  return (
    <Flex>
      <Box p="4">
        <Heading size="4" weight="regular" className="section_title">
          // hobbies <span> / skateboarding</span>
        </Heading>
        <Box mt="3">
          <Text as="p">
            At 30, I picked up my skateboard again after a long hiatus, and it
            has completely transformed my outlook on life. Rediscovering
            skateboarding has not only kept me physically fit but also reignited
            a sense of adventure and creativity.
          </Text>
          <Text as="p">
            It reminds me of the joy of learning and the thrill of overcoming
            challenges, giving me a fresh perspective that carries into both my
            personal and professional life. This reconnection with skateboarding
            has been a powerful reminder that it's never too late to embrace
            past passions and let them fuel new possibilities.
          </Text>
        </Box>
        <Flex
          className="sk8"
          overflow="hidden"
          // align="center"
          // justify="center"
          mt="2"
          maxWidth={{
            initial: '80dvw',
            lg: '500px',
          }}
          maxHeight={{
            initial: '300px',
            lg: '500px',
          }}
        >
          <Sk8 />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Skate;
