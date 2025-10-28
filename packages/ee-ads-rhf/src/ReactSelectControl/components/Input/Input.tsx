import { GroupBase, InputProps, components } from 'react-select';
import { SelectOption } from '../../../types';

type ExtendedInputProps = InputProps<
  SelectOption,
  boolean,
  GroupBase<SelectOption>
> & {
  selectProps?: InputProps<
    SelectOption,
    boolean,
    GroupBase<SelectOption>
  >['selectProps'] & {
    customAriaDescribedBy?: string;
  };
};

const Input = (props: ExtendedInputProps) => (
  <components.Input
    {...props}
    aria-describedby={[
      props['aria-describedby'] ?? '',
      props.selectProps?.customAriaDescribedBy ?? '',
    ].join(' ')}
  />
);

export default Input;
