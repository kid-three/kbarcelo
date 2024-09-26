// import React from 'react';

// const CodeSnippet = () => {
//   return (
//     <div className="typewriter_container">
//       <div className="typewriter">
//         <p>this is code snippet</p>
//       </div>
//     </div>
//   );
// };

// export default CodeSnippet;

import { Box } from '@radix-ui/themes';
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, typingSpeed = 5, delay = 50000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    } else {
      const resetTimeoutId = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, delay);

      return () => clearTimeout(resetTimeoutId);
    }
  }, [index, text, typingSpeed, delay]);

  return (
    <Box
      width={{
        initial: '98%',
        lg: '80%',
      }}
    >
      // code snippet for this very effect
      <Box
        px={{
          initial: '1',
          lg: '4',
        }}
        pb="2"
        mt="2"
        className="typewriter_container"
      >
        <pre className="typewriter">
          <code dangerouslySetInnerHTML={{ __html: displayedText }} />
        </pre>
      </Box>
    </Box>
  );
};
export default Typewriter;
