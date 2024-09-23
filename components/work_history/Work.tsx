"use client";
import { Heading, Box } from '@radix-ui/themes'
import React, { useState } from 'react'

interface WorkHistoryProps {
    company: string;
    location: string;
    title: string;
    date: string;
    workItems: string[];
  }
  
  const WorkHistory: React.FC<WorkHistoryProps> = ({
    company,
    location,
    title,
    date,
    workItems
  }) => {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
      setShowMore(!showMore);
    };
  
    const itemsToShow = showMore ? workItems : workItems.slice(0, 2);
  
  return (
   <Box mt="6">
       <Heading size='6' weight='regular' className='work_title' >
          <Box as='span' >

            {company}
          </Box>
          <Box as='span'  className="work_info">{location}
          </Box>
            </Heading>
          <Heading size='5' weight='regular' className='work_title'>
          <Box as='span'  >
            {title}
            </Box>
            <Box as='span'  className="work_info">
             {date}
              </Box> </Heading>
              <ul className="work_list">
        {itemsToShow.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {workItems.length > 2 && (
        <a href="#" onClick={handleToggle}>
          {showMore ? 'Show less...' : 'Show more...'}
        </a>
      )}
   </Box>
  )
}

export default WorkHistory