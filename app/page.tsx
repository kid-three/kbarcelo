"use client";
import { Flex, Text, Button, Container, Box } from "@radix-ui/themes";
import Link from "next/link";
import { RandomReveal } from "react-random-reveal";

export default function Home() {
  return (
    <Flex className='home' height='100%' align='center'>
      <Box className='home_content' p='6'>
        <Text size='3' weight='light'>
          Hello world, I'm
        </Text>
        <br />
        <Text size='9' weight='regular'>
          <RandomReveal
            isPlaying
            duration={2}
            characters='Kinich'
            onComplete={() => ({ shouldRepeat: true, delay: 20 })}
          />
        </Text>
        <br />
        <Text size='9' weight='regular'>
          <RandomReveal
            isPlaying
            duration={3}
            characters='Barceló'
            onComplete={() => ({ shouldRepeat: true, delay: 20 })}
          />
        </Text>
        <br />
        <Text size='5' className='software'>
          {" > Front-end Developer"}
        </Text>
        <Box mt='9'>sds</Box>
      </Box>
      <Box></Box>
    </Flex>
  );
}
