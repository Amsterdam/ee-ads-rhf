import { components, DropdownIndicatorProps, GroupBase } from 'react-select';
import { ChevronDownIcon } from '@amsterdam/design-system-react-icons';
import { SelectOption } from '../../../types';

const DropdownIndicator = (
  props: DropdownIndicatorProps<SelectOption, boolean, GroupBase<SelectOption>>,
) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
