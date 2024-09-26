import { Flex, Checkbox, Text } from '@radix-ui/themes';
// import React from 'react';

// interface ProjectCheckboxProps {
//   value: string;
//   checked?: boolean;
//   onChange: (value: string, checked: boolean) => void;
// }

// const ProjectCheckbox: React.FC<ProjectCheckboxProps> = ({
//   value,
//   checked,
//   onChange
// }) => {

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         onChange(value, event.target.checked);
//       };
//   return (
//     <Text as="label" size="2">
//       <Flex gap="2">
//         <Checkbox variant="soft" checked={checked} onChange={handleChange} />
//         {value}
//       </Flex>
//     </Text>
//   );
// };

// export default ProjectCheckbox;

import React from 'react';

interface ProjectCheckboxProps {
  value: string;
  checked: boolean;
  onChange: (value: string, checked: boolean) => void;
}

const ProjectCheckbox: React.FC<ProjectCheckboxProps> = ({
  value,
  checked,
  onChange,
}) => {
  const handleChange = () => {
    onChange(value, !checked);
  };

  return (
    <Text as="label" size="2">
      <Flex gap="2">
        <Checkbox
          variant="soft"
          checked={checked}
          onCheckedChange={handleChange}
        />
        {value}
      </Flex>
    </Text>
  );
};

export default ProjectCheckbox;
