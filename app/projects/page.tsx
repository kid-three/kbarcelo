import ProjectCard from '@/components/projects/ProjectCard';
import { Box, Flex, Grid } from '@radix-ui/themes';
import React from 'react';

const projects = () => {
  return (
    <Flex justify="center" p="3">
      <Grid columns={{ initial: '1', md: '3' }} gap="5" width="auto">
        <ProjectCard
          projectLink="https://www.thenorthface.com.mx"
          projectImage="/projects/tnf.png"
          projectNumber={1}
          projectTitle="the_north_face MX"
          projectDescription="Brand new website developed for Ecomsur as their first project in Vtex IO platform. The website is fully responsive and has a lot of custom components and features. First project delivered in ReactJS and with Version Control. 2020 - 2023"
        />
        <ProjectCard
          projectLink="https://www.pandoraoficial.com.mx"
          projectImage="/projects/pandora.png"
          projectNumber={1}
          projectTitle="pandora MX/CL/CO/PE/PA/AR"
          projectDescription="Developed the entire LatAm ecommerce market for Pandora. Included two complete redesigns of the website simulatneously done in 5 countries. 2020 - 2024"
        />

        <ProjectCard
          projectLink="#"
          projectImage="/projects/isma.png"
          projectNumber={1}
          projectTitle="ISMA Platform"
          projectDescription="Platform to help manage our front end infrastructure of more than 2400 repositories, track releases realtime, easily search codebase componentes and tag and catalog components for reusability. NextJs, GraphQL, Strapi, Azure Web Apps. 2023 - 2024 "
        />

        <ProjectCard
          projectLink="https://www.thenorthface.com.mx"
          projectImage="/projects/tnf.png"
          projectNumber={1}
          projectTitle="the_north_face MX"
          projectDescription="Brand new website developed for Ecomsur as their first project in Vtex IO platform. The website is fully responsive and has a lot of custom components and features. First project delivered in ReactJS and with Version Control. 2020 - 2023"
        />

        <ProjectCard
          projectLink="https://www.thenorthface.com.mx"
          projectImage="/projects/tnf.png"
          projectNumber={1}
          projectTitle="the_north_face MX"
          projectDescription="Brand new website developed for Ecomsur as their first project in Vtex IO platform. The website is fully responsive and has a lot of custom components and features. First project delivered in ReactJS and with Version Control. 2020 - 2023"
        />
      </Grid>
    </Flex>
  );
};

export default projects;
