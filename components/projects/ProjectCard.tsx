import { Cross1Icon } from '@radix-ui/react-icons';
import {
  Box,
  Button,
  Card,
  Dialog,
  Flex,
  IconButton,
  Inset,
  Separator,
  Strong,
  Text,
  TextField,
} from '@radix-ui/themes';
import Image from 'next/image';
import React from 'react';
import Markdown from 'react-markdown';

interface ProjectCardProps {
  projectTitle: string;
  projectNumber: number;
  projectImage: string;
  projectDescription: string;
  projectLink: string;
  shortDescription: string;
  date: string;
  company: string;
  repo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectTitle,
  projectNumber,
  projectImage,
  projectDescription,
  projectLink,
  shortDescription,
  date,
  company,
  repo,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Box className="project_card_container">
          <Flex gap="4" mb="3">
            {/* <Box className="project_number"> Project {projectNumber}</Box> */}
            <Box className="project_title">// {projectTitle}</Box>
          </Flex>
          <Card asChild size="2">
            <a href="#">
              <Inset clip="padding-box" side="top" pb="current">
                <Image
                  src={
                    `/kbarcelo/${projectImage}` || '/kbarcelo/projects/tnf.png'
                  }
                  alt="Bold typography"
                  style={{
                    display: 'block',
                    objectFit: 'cover',
                    width: '100%',
                    height: 200,
                    backgroundColor: 'var(--gray-5)',
                  }}
                  height={200}
                  width={300}
                />
              </Inset>
              <Text as="p" size="3">
                {shortDescription}
              </Text>
            </a>
          </Card>
        </Box>
      </Dialog.Trigger>

      <Dialog.Content
        maxWidth={{ initial: 'calc(100vw - 32px)', lg: '900px' }}
        className="dialog_content"
      >
        <Flex gap="3" mb="3" justify="between">
          <Dialog.Title mb="0">{projectTitle}</Dialog.Title>
          <Dialog.Close>
            <IconButton variant="soft" size="1">
              <Cross1Icon />
            </IconButton>
          </Dialog.Close>
        </Flex>
        <Flex
          direction="column"
          // justify="center"
          align="center"
          maxHeight="80dvh"
          overflowY="auto"
        >
          <Box maxWidth="500px">
            <Image
              src={`/kbarcelo/${projectImage}` || '/kbarcelo/projects/tnf.png'}
              alt="Bold typography"
              style={{
                display: 'block',
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--gray-5)',
              }}
              height={250}
              width={300}
            />
          </Box>
          <Box width="100%">
            <Text as="p">Year: {date}</Text>
            <Text as="p">Company:{company}</Text>
          </Box>
          <Separator my="3" size="4" />
          <Markdown>{projectDescription}</Markdown>
          <Flex gap="2">
            <Button asChild color="gray" variant="outline">
              <a href={projectLink} target="_blank">
                Visit project
              </a>
            </Button>
            {repo && (
              <Button asChild variant="outline">
                <a href={repo} target="_blank">
                  Visit Repository
                </a>
              </Button>
            )}
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ProjectCard;
