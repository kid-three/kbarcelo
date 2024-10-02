import { Box, Flex, Text } from '@radix-ui/themes';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';
import BranchingTree from './tmCards/BranchingTree';
import Bridge from './tmCards/Bridge';

import Anchor from './tmCards/Anchor';
import Idea from './tmCards/Idea';
import Compass from './tmCards/Compass';

const ManagerCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);

  return (
    <Swiper
      // spaceBetween={50}
      // slidesPerView={1}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      onSwiper={(swiper) => console.log(swiper)}
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="tm_swiper"
    >
      <SwiperSlide className="tm_swiper-slide">
        <Flex className="tm_card" flexGrow="1">
          <Flex
            className="tm_card__content"
            direction="column"
            // justify="between"
            width="100%"
            align="center"
          >
            <BranchingTree />
            <Text
              as="p"
              size={{
                initial: '5',
                md: '9',
              }}
              className="tm_card__title"
              mx="3"
            >
              GROWTH
            </Text>
            <Text
              as="p"
              size={{
                initial: '2',
                md: '6',
              }}
              className="tm_card__description"
              mx="3"
            >
              Empowering and developing my teams to reach their full potential
            </Text>
          </Flex>
        </Flex>
      </SwiperSlide>
      <SwiperSlide className="tm_swiper-slide">
        <Flex className="tm_card" flexGrow="1">
          <Flex
            className="tm_card__content"
            direction="column"
            // justify="between"
            align="center"
            width="100%"
          >
            <Compass />
            <Text
              as="p"
              size={{
                initial: '5',
                md: '9',
              }}
              className="tm_card__title"
              mx="3"
            >
              VISION
            </Text>
            <Text
              as="p"
              size={{
                initial: '2',
                md: '6',
              }}
              className="tm_card__description"
              mx="3"
            >
              Providing direction and guidance towards a common goal
            </Text>
          </Flex>
        </Flex>
      </SwiperSlide>

      <SwiperSlide className="tm_swiper-slide">
        <Flex className="tm_card" flexGrow="1">
          <Flex
            className="tm_card__content"
            direction="column"
            // justify="between"
            width="100%"
            align="center"
          >
            <Bridge />
            <Box>
              <Text
                as="p"
                size={{
                  initial: '5',
                  md: '9',
                }}
                className="tm_card__title"
                mx="3"
              >
                CONNECTION
              </Text>
              <Text
                as="p"
                size={{
                  initial: '2',
                  md: '6',
                }}
                className="tm_card__description"
                mx="3"
              >
                Overcomming obstables together and building stronger
                relationships
              </Text>
            </Box>
          </Flex>
        </Flex>
      </SwiperSlide>
      <SwiperSlide className="tm_swiper-slide">
        <Flex className="tm_card" flexGrow="1">
          <Flex
            className="tm_card__content"
            direction="column"
            // justify="between"
            width="100%"
            align="center"
          >
            <Idea />
            <Text
              as="p"
              size={{
                initial: '5',
                md: '9',
              }}
              className="tm_card__title"
              mx="3"
            >
              INNOVATION
            </Text>
            <Text
              as="p"
              size={{
                initial: '2',
                md: '6',
              }}
              className="tm_card__description"
              mx="3"
            >
              Encouraging creativity and new ideas to drive change and add value
            </Text>
          </Flex>
        </Flex>
      </SwiperSlide>
      <SwiperSlide className="tm_swiper-slide">
        <Flex className="tm_card" flexGrow="1">
          <Flex
            className="tm_card__content"
            direction="column"
            // justify="between"
            width="100%"
            align="center"
          >
            <Anchor />
            <Text
              as="p"
              size={{
                initial: '5',
                md: '9',
              }}
              className="tm_card__title"
              mx="3"
            >
              RELIABILTY
            </Text>
            <Text
              as="p"
              size={{
                initial: '2',
                md: '6',
              }}
              className="tm_card__description"
              mx="3"
            >
              Building trust and delivering on promises to create a solid
              foundation
            </Text>
          </Flex>
        </Flex>
      </SwiperSlide>
    </Swiper>
  );
};

export default ManagerCards;
