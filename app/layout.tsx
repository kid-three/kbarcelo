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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
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
