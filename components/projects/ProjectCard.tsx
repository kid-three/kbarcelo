import { Box, Card, Flex, Inset, Strong, Text } from '@radix-ui/themes';
import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  projectTitle: string;
  projectNumber: number;
  projectImage: string;
  projectDescription: string;
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectTitle,
  projectNumber,
  projectImage,
  projectDescription,
  projectLink,
}) => {
  return (
    <Box className="project_card_container">
      <Flex gap="4" mb="3">
        {/* <Box className="project_number"> Project {projectNumber}</Box> */}
        <Box className="project_title">// {projectTitle}</Box>
      </Flex>
      <Card asChild size="2">
        <a href={projectLink} target="_blank">
          <Inset clip="padding-box" side="top" pb="current">
            <Image
              src={projectImage || '/projects/tnf.png'}
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
            {projectDescription}
          </Text>
        </a>
      </Card>
    </Box>
  );
};

export default ProjectCard;
