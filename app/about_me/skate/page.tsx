'use client';
import { Flex, Box, Heading } from '@radix-ui/themes';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

const Skate = () => {
  return (
    <Flex>
      <Box p="4">
        <Heading size="4" weight="regular" className="section_title">
          // hobbies <span> / skateboarding</span>
        </Heading>
        <Box mt="3">
          At 30, I picked up my skateboard again after a long hiatus, and it has
          completely transformed my outlook on life. Rediscovering skateboarding
          has not only kept me physically fit but also reignited a sense of
          adventure and creativity. It reminds me of the joy of learning and the
          thrill of overcoming challenges, giving me a fresh perspective that
          carries into both my personal and professional life. This reconnection
          with skateboarding has been a powerful reminder that it's never too
          late to embrace past passions and let them fuel new possibilities.
        </Box>
      </Box>
    </Flex>
  );
};

export default Skate;
