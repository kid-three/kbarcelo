// 'use client';

import { Fira_Code } from 'next/font/google';
import './globals.css';
import { Box, Flex, Heading, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import MobileMenu from '@/components/Layout/MobileMenu';
import DesktopMenu from '@/components/Layout/DesktopMenu';
import DesktopFooter from '@/components/Layout/DesktopFooter';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kinich Barcelo',
  description: 'Portfolio website for Kinich Barcelo',
};

const inter = Fira_Code({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          accentColor="amber"
          grayColor="slate"
          radius="small"
          panelBackground="translucent"
          appearance="dark"
          // className='main_container'
        >
          <Box
            p={{ initial: '3', lg: '6' }}
            // p='4'
            className="main_container"
            maxWidth="1500px"
            m="auto"
            height={{
              initial: '100dvh',
              lg: '1000px',
            }}
          >
            <Flex
              direction="column"
              className="page_container"
              overflow="hidden"
            >
              <DesktopMenu />
              <MobileMenu />

              <Box overflowY="scroll" height="100%">
                {children}
              </Box>
              <DesktopFooter />
            </Flex>
          </Box>
        </Theme>
      </body>
    </html>
  );
}
