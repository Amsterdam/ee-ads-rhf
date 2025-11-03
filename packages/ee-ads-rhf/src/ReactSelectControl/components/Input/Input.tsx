import { GroupBase, InputProps, components } from 'react-select';
import { SelectOption } from '../../../types';

type ExtendedInputProps<IsMulti extends boolean> = InputProps<
  SelectOption,
  IsMulti,
  GroupBase<SelectOption>
> & {
  selectProps?: InputProps<
    SelectOption,
    IsMulti,
    GroupBase<SelectOption>
  >['selectProps'] & {
    customAriaDescribedBy?: string;
  };
};

function Input<IsMulti extends boolean = false>(
  props: ExtendedInputProps<IsMulti>,
) {
  return (
    <components.Input
      {...props}
      aria-describedby={[
        props['aria-describedby'] ?? '',
        props.selectProps?.customAriaDescribedBy ?? '',
      ].join(' ')}
    />
  );
}

export default Input;
