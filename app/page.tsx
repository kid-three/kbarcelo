'use client';
import Typewriter from '@/components/home/CodeSnippet';
import CodeSnippet from '@/components/home/CodeSnippet';
import Sk8 from '@/components/home/Sk8';
// import ImageEffect from "@/components/home/ImageEffect";
// import Example from "@/components/home/p5";
// import { LightningBoltIcon } from "@radix-ui/react-icons";
import { Flex, Text, Button, Container, Box } from '@radix-ui/themes';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { RandomReveal } from 'react-random-reveal';

const codeSnippet = `
<span class="keyword">useEffect</span>(() => {
  <span class="keyword">if</span> (<span class="variable">index</span> &lt; <span class="variable">text</span>.<span class="property">length</span>) {
    <span class="keyword">const</span> <span class="variable">timeoutId</span> = <span class="function">setTimeout</span>(() => {
      <span class="function">setDisplayedText</span>((<span class="variable">prev</span>) => <span class="variable">prev</span> + <span class="variable">text</span>.<span class="function">charAt</span>(<span class="variable">index</span>));
      <span class="function">setIndex</span>((<span class="variable">prev</span>) => <span class="variable">prev</span> + 1);
    }, <span class="variable">typingSpeed</span>);
    <span class="keyword">return</span> () => <span class="function">clearTimeout</span>(<span class="variable">timeoutId</span>);
  } <span class="keyword">else</span> {
    <span class="keyword">const</span> <span class="variable">resetTimeoutId</span> = <span class="function">setTimeout</span>(() => {
      <span class="function">setDisplayedText</span>('');
      <span class="function">setIndex</span>(0);
    }, <span class="variable">delay</span>);

    <span class="keyword">return</span> () => <span class="function">clearTimeout</span>(<span class="variable">resetTimeoutId</span>);
  }
}, [<span class="variable">index</span>, <span class="variable">text</span>, <span class="variable">typingSpeed</span>, <span class="variable">delay</span>]);
`;

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [selected, setSelected] = useState('FE');

  const handleSelection = (value: string) => {
    setSelected(value);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
    };

    window.addEventListener('mousemove', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  useEffect(() => {
    if (!hasInteracted) {
      const states = ['FE', 'TM', 'SK8'];
      let index = 0;

      const intervalId = setInterval(() => {
        setSelected(states[index]);
        index = (index + 1) % states.length;
      }, 15000);

      return () => clearInterval(intervalId);
    }
  }, [hasInteracted]);

  if (!isMounted) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ height: '100%' }}
    >
      <Flex
        className="home"
        height="100%"
        align={{ initial: 'start', lg: 'center' }}
        direction={{ initial: 'column', lg: 'row' }}
      >
        <Box
          className="home_content"
          p={{ initial: '4', lg: '6' }}
          mt={{ initial: '2', lg: '0' }}
        >
          <Text size="3" weight="light">
            Hello world, I'm
          </Text>
          <br />
          {isMounted && (
            <>
              <Text size="9" weight="regular">
                <RandomReveal
                  isPlaying
                  duration={0.5}
                  characters="Kinich"
                  onComplete={() => ({ shouldRepeat: true, delay: 20 })}
                />
              </Text>
              <br />
              <Text size="9" weight="regular">
                <RandomReveal
                  isPlaying
                  duration={1}
                  characters="Barceló"
                  onComplete={() => ({ shouldRepeat: true, delay: 20 })}
                />
              </Text>
            </>
          )}
          <Flex direction="column" mt="4" gapY="2">
            <Text
              size="5"
              className={`software ${selected === 'FE' ? 'software_glow' : ''}`}
              onClick={() => handleSelection('FE')}
            >
              {' > Sr Front-End Developer'}
            </Text>

            <Text
              size="5"
              className={`manager ${selected === 'TM' ? 'manager_glow' : ''}`}
              onClick={() => handleSelection('TM')}
            >
              {' > Tech Manager'}
            </Text>

            <Text
              size="5"
              className={`skater ${selected === 'SK8' ? 'skater_glow' : ''}`}
              onClick={() => handleSelection('SK8')}
            >
              {' > Skater'}{' '}
              {/* <svg
            width='20'
            height='20'
            viewBox='0 0 512 512'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='#4d5cce'
              d='M390.5 16h-2.2c-9.6.3-18 3.69-25.1 10.87l-30.3 30.31c3.8 4.41 7.1 9.12 9.4 13.97 1.6 3.37 2.7 6.85 2.9 10.8.2 3.96-1 8.8-4.4 12.16l-16.2 16.19 77 77.1 16.2-16.2c3.3-3.4 8.2-4.6 12.2-4.4 3.9.2 7.4 1.3 10.8 2.9 4.8 2.3 9.6 5.6 13.9 9.4l30.3-30.3c11.5-11.5 13.3-26.1 8.4-43.8-5.1-17.58-17.6-36.95-33.5-52.89-16-15.93-35.3-28.44-52.9-33.46-5.9-1.65-11.2-2.57-16.5-2.65zm-92.4 37.16l-54.5 54.54c0 .6.3 2.1 1.1 4.1 1.7 4 5.5 9.7 10 14.3 4.4 4.8 9.7 8.8 13.5 10.4 1.8.9 3.3 1.1 3.8 1.1h.1l55.2-55.22c-.1-.58-.3-1.79-1.2-3.56-1.8-3.9-5.8-9.33-10.5-13.99-4.6-4.66-10.1-8.68-14-10.52-1.7-.84-2.9-1.05-3.5-1.15zm14 69.74l-15.3 15.3 15 29.9-4.7 4.6c-3.5 3.5-5.7 9.6-5.7 16.1 0 6.4 2.2 12.5 5.7 16h.1v.1c3.5 3.5 9.6 5.7 16 5.7 6.5 0 12.6-2.2 16.1-5.7l4.6-4.7 29.9 15 15.2-15.4zm-65.3 20.5L143.3 246.8c3.9 4.5 7.3 9.1 9.5 14.2 1.5 3.5 2.7 7.3 2.6 11.5-.2 3.7-1.5 7.7-4.1 11l13.9 6.9c6.9-4.6 15.3-6.9 23.5-6.9 10.4 0 21 3.3 28.7 11.1 7.8 7.7 11 18.3 11 28.7 0 8.2-2.2 16.4-6.8 23.4l6.9 13.9c3.3-2.5 7.4-3.5 10.7-3.4 4 .1 7.6 1.1 11 2.6 5.1 2.1 10.1 5.3 14.8 9.1L368.8 265c-3.7-4.6-6.9-9.7-9.1-14.7-1.5-3.5-2.5-7.1-2.6-11-.1-3.4.9-7.4 3.4-10.7l-13.8-7c-6.9 4.7-15.2 6.9-23.5 6.9-10.4 0-21-3.3-28.7-11-7.7-7.7-11-18.3-11-28.7 0-8.3 2.2-16.6 6.9-23.5l-7-13.9c-3.2 2.6-7.2 3.9-10.9 4.1-4.2.1-8-1.1-11.6-2.6-5-2.3-9.7-5.7-14.1-9.5zm182.8 41.3l-54.5 54.6c0 .6.2 2.1 1.1 3.9 1.6 4.1 5.5 9.8 10 14.4 4.4 4.8 9.8 8.7 13.5 10.4 1.9.8 3.3 1.1 3.8 1h.2l55.1-55.1c-.1-.6-.3-1.8-1.2-3.5-1.8-3.9-5.8-9.4-10.5-14-4.7-4.7-10.1-8.7-14-10.5-1.8-.9-2.9-1.1-3.5-1.2zM403.7 269l-.1.1c0 .1.3 0 .1-.1zm-296.1-25.5l-54.43 54.6c.1.6.31 1.8 1.15 3.6 1.85 3.9 5.86 9.3 10.53 14 4.65 4.6 10.08 8.7 13.99 10.5 1.76.9 2.98 1.1 3.55 1.2l55.21-55.2v-.1c0-.5-.2-2-1.1-3.9-1.7-3.8-5.7-9-10.4-13.5-4.7-4.4-10.3-8.3-14.4-10-2-.9-3.5-1.1-4.1-1.2zm30.6 53.3l-15.4 15.3 77 77 15.4-15.3-15-29.9 4.6-4.5c3.5-3.5 5.8-9.8 5.8-16.1 0-6.4-2.3-12.6-5.8-16h-.1v-.1c-3.4-3.5-9.6-5.9-16-5.9s-12.6 2.4-16.1 5.9l-4.5 4.6zm-28 28l-16.04 16c-3.35 3.3-8.2 4.6-12.15 4.5-3.96-.2-7.43-1.4-10.8-3-4.87-2.3-9.57-5.5-13.99-9.4L26.9 363.2c-11.48 11.5-13.27 26.2-8.23 43.8 5.02 17.7 17.52 37 33.45 52.9 15.95 16 35.32 28.5 52.88 33.5 17.6 5 32.3 3.2 43.8-8.3l30.3-30.3c-3.9-4.4-7.1-9.1-9.4-14-1.6-3.4-2.8-6.8-3-10.8-.2-4 1.1-8.8 4.5-12.2l16-16zm129 50.3l-54.6 54.5c.1.6.3 1.8 1.2 3.6 1.8 3.8 5.9 9.3 10.5 14 4.7 4.6 10.1 8.7 14 10.5 1.8.8 3 1 3.6 1.1l55.1-55v-.2c0-.5-.2-1.9-1-3.8-1.7-3.8-5.7-9.1-10.4-13.6-4.7-4.4-10.3-8.3-14.4-10-1.9-.9-3.4-1.1-4-1.1zm29.8 28.7c0 .2.1-.1 0-.1z'
            />
          </svg> */}
            </Text>
          </Flex>
        </Box>
        <Flex
          mt={{
            initial: '4',
            lg: '0',
          }}
          // justify={{
          //   initial: 'start',

          //   lg: 'center',
          // }}
          justify="center"
          align="center"
          flexGrow={{
            initial: '1',
            lg: '1',
          }}
          width={{
            initial: '100%',
            lg: 'auto',
          }}
        >
          {' '}
          {selected === 'FE' && (
            <>
              <Typewriter text={codeSnippet} />
            </>
          )}
          {selected === 'TM' && <p>tm</p>}
          {selected === 'SK8' && (
            <Flex
              className="sk8"
              overflow="hidden"
              // align="center"
              maxWidth={{
                initial: '95%',
                lg: '500px',
              }}
              maxHeight={{
                initial: '300px',
                lg: '500px',
              }}
            >
              <Sk8 />
            </Flex>
          )}
        </Flex>
      </Flex>
    </motion.div>
  );
}
