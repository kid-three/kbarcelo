import { Flex, Text, Button, Container, Box } from "@radix-ui/themes";
import Link from "next/link";

export default function Home() {
  return (
    <Flex className='home'>
      <Container>
        <Box className='home_content'>
          <Text size='8' weight='bold'>
            Hello, I'm Kinich Barcelo
          </Text>
          <Text size='5' weight='regular'>
            I'm a software engineer, web developer, and designer.
          </Text>
          <Link href='/about_me'>
            <Button size='2' className='home_button'>
              Learn More
            </Button>
          </Link>
        </Box>
      </Container>
    </Flex>
  );
}
