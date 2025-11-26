import { ClearIndicatorProps, components, GroupBase } from 'react-select';
import { CloseIcon } from '@amsterdam/design-system-react-icons';
import { SelectOption } from '../../../../types';

const ClearIndicator = (
  props: ClearIndicatorProps<SelectOption, boolean, GroupBase<SelectOption>>,
) => (
  <components.ClearIndicator {...props}>
    <CloseIcon />
  </components.ClearIndicator>
);

export default ClearIndicator;
