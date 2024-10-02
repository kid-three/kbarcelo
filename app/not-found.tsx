import { Flex, Box } from '@radix-ui/themes';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Flex justify="center">
      <Box>
        <h2>Nothing Here!</h2>
        <p>Sorry, but the page you are looking for does not exist.</p>
        <Link href="/">Return Home</Link>
      </Box>
    </Flex>
  );
}
