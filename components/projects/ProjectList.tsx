import ProjectCard from '@/components/projects/ProjectCard';
import { Box, Flex, Grid } from '@radix-ui/themes';
import React from 'react';
import projects from './projects.json';

interface ProjectListProps {
  selectedTags: string[];
}

const ProjectList: React.FC<ProjectListProps> = ({ selectedTags }) => {
  const selectedProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTags.every((tag: string) => project.tag.includes(tag))
        );

  console.log(selectedProjects);
  return (
    <Flex justify="center" p="3">
      <Grid columns={{ initial: '1', md: '3' }} gap="5" width="auto">
        {selectedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            projectLink={project.projectLink}
            projectImage={project.projectImage}
            projectNumber={project.projectNumber}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            shortDescription={project.shortDescription}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default ProjectList;
