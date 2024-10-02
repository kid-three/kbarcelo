'use client';

import React, { useState } from 'react';

import { Flex, Heading, Box, Text } from '@radix-ui/themes';
import Head from 'next/head';
import WorkHistory from '@/components/work_history/Work';
const page = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <Flex overflowY="visible">
      <Box p="4">
        <Heading size="4" weight="regular" className="section_title sticky">
          // personal info <span> / work history</span>
        </Heading>
        <Box mt="3">
          <WorkHistory
            company="Infracommerce Latam"
            location="Mexico City, Mexico · Remote"
            date="Nov 2022 - Sep 2024"
            title="Engineering Manager"
            workItems={[
              'Led and managed a diverse team of 50 Front End Developers spread across 6 countries maintaining operations for 60 Ecommerce websites including: Pandora (MX, CO, CL, PE, PA), Vans MX, Levis MX, Reebok (CO, CL, PE, PA) Coca-Cola CL amongst others.',
              'Designed and developed a platform to help manage our front end infrastructure of more than 2400 repositories, track releases realtime, easily search codebase componentes and tag and catalog components for reusability. NextJs, GraphQL, Strapi, Azure Web Apps.',
              'Created a task force to completely document and audit the existing code base. Audited 60% of code base and increased documentation from 15% of total repositories to 95%.',
              'Successfully defined, documented and communicated the scope and extent of services to internal and external clients when there was none previously.',
              'Implemented time tracking dashboards for the entire team showing time per team, project, and tasks to help complete a merger of 3 companies (Summa Solutions, BrandLive, Ecomsur).',
            ]}
          />
          <WorkHistory
            company="Infracommerce Latam"
            location="Mexico City, Mexico · Remote"
            date="Sep 2021 - Nov 2022"
            title="Asistant Manager of Innovation and Development"
            workItems={[
              'Tasked with investigating and implementing the latest in technology and services for eCommerce platforms.',
              'Created and led a team specialized in migrating our legacy Vtex CMS customers into Vtex IO. Migrated 10 stores in 14 months. Increasing delivery output by 120% and eliminating all unmaintainable Legacy Codebase.',
              'Started new partnerships with leading SaaS providers such as Contentful, Sales Layer, Talon.One, Elastic Path and more.',
              'Created and led a team to investigate all aspects of Composable Commerce and to create a proof of concept that we can show our future clients.',
            ]}
          />

          <WorkHistory
            company="Ecomsur (now Infracommerce Latam)"
            location="Mexico City, Mexico · Remote"
            date="May 202 - Sep 2021"
            title="SR Front End Developer"
            workItems={[
              'Senior Front End web developer in charge of creating and launching ecommerce stores for major multinational corporations including The North Face MX, Timberland MX, CasaIdeas CO, Philips (MX, CL) amongst others.',
              'Recruited, hired and trained 20 Junior developers to create and operate advanced VtexIO Websites (ReactJS, GraphQL, NodeJS) without a Human Resources team.',
              'Pioneered the use of React, GraphQL and NodeJS as bases for developing the front end of our eCommerce offerings.',
              'Pioneered the use of JIRA from a simple hour recording tool to its intended use for project management, implementing correct use of Sprints and Agile methodologies.',
              'Created an onboarding process for remote devs that was later adopted by the entire Technology division and HR for new employee onboarding.',
              'Created and led a team specialized in migrating our legacy Vtex CMS customers into Vtex IO. Migrated 10 stores in 14 months. Increasing delivery output by 120% and eliminating all unmaintainable Legacy Codebase.',
              'Launched the first site fully developed in VTEX IO by Ecomsur while VTEX IO was still in BETA.',
              'Designed mockups and wireframes for Auteco, Cial, Grupo Uribe and Consturmart using Figma.',
            ]}
          />
          <WorkHistory
            location="Mexico City, Mexico"
            company="Atomic 32"
            date="Apr 2019 - May 2020"
            title="Front End Developer"
            workItems={[
              'Front End Web developer in charge of creating custom apps for customers in the fintech sector.',
              'Developed Fibro app for Capital Tech using ReactJS, ReactStrap and custom CSS. Finctinalties included downloading of financial statements, reconciliation of invoices and financial planning.',
              'Developed Inland Boat Club boat rental app using NextJS, GraphQL and Strapi V3 as backend',
            ]}
          />

          <WorkHistory
            company="CODE Ingenieria"
            location="Mexico City, Mexico"
            date="April 2017 - May 2019"
            title="Front End Developer"
            workItems={[
              '- Responsible for setting development guidelines and practices for current and future front end development work at CODE Ing.',

              "Designed UI/UX and all Front End interfaces for Alumni, a brand new 'Educational' web app commissioned by Fundacion Manuel Moreno.",

              'Created custom JS frameworks based on NodeJS, Webpack and Gulp.',
            ]}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default page;
