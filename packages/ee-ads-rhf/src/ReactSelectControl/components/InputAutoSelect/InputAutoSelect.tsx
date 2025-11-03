import { Ref } from 'react';
import Select, {
  Props as SelectProps,
  ActionMeta,
  SelectInstance,
  GroupBase,
} from 'react-select';
import ClearIndicator from '../ClearIndicator/ClearIndicator';
import DropdownIndicator from '../DropdownIndicator/DropdownIndicator';
import Input from '../Input/Input';
import { ReactSelectValue } from '../../types';
import { SelectOption } from '../../../types';
import './InputAutoSelect.scss';

export type InputAutoSelectProps<IsMulti extends boolean = false> = Omit<
  SelectProps<SelectOption, IsMulti, GroupBase<SelectOption>>,
  'onChange' | 'value' | 'options'
> & {
  options: SelectOption[] | undefined;
  value?: ReactSelectValue;
  onChange: (
    newValue: ReactSelectValue,
    actionMeta: ActionMeta<SelectOption>,
  ) => void;
  // 'any' will save a lot of complicated extra types to handle the isMulti
  // prop
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: Ref<SelectInstance<SelectOption, any> | null>;
  error?: string;
  customAriaDescribedBy?: string;
};

// This is a wrapper for React-Select with Amsterdam Design System styling
// @see https://react-select.com/props for more props
// WARNING: The following prop types are unstyled and untested:
// - isLoading
// - isRtl
const InputAutoSelect = <IsMulti extends boolean = false>({
  isClearable = true,
  isDisabled = false,
  isMulti,
  options,
  id = undefined,
  name = undefined,
  required = false,
  value = undefined,
  customAriaDescribedBy = undefined,
  menuPortalTarget = document.body,
  ref,
  error,
  onChange,
  onBlur,
  ...eventHandlers
}: InputAutoSelectProps<IsMulti>) => (
  <Select
    options={options}
    isClearable={isClearable}
    isDisabled={isDisabled}
    isMulti={isMulti}
    unstyled
    aria-errormessage={error}
    aria-invalid={!!error}
    customAriaDescribedBy={customAriaDescribedBy}
    className="react-select__container"
    classNamePrefix="react-select"
    components={{
      // Override these components to use ADS SVG icons
      ClearIndicator,
      DropdownIndicator,
      Input,
    }}
    noOptionsMessage={() => 'Geen opties'}
    inputId={id}
    name={name}
    required={required}
    value={value}
    menuPortalTarget={menuPortalTarget}
    ref={ref}
    onChange={onChange}
    onBlur={onBlur}
    {...eventHandlers}
    styles={{
      container: (baseStyles, state) => ({
        ...{
          ...baseStyles,
          outline: state.isFocused ? '2px solid -webkit-focus-ring-color' : '0',
        },
        ...(error
          ? {
              borderColor: 'var(--ams-select-invalid-border-color)',
            }
          : {}),
      }),
      clearIndicator: (baseStyles) => ({
        ...baseStyles,
        color: 'rgb(102, 102, 102)',
      }),
      input: (baseStyles) => ({
        ...baseStyles,
        background: 'transparent',
        color: 'var(--ams-text-input-color)',
        font: 'var(--ams-text-input-font-weight) var(--ams-text-input-font-size) var(--ams-text-input-font-family)',
        lineHeight: 'var(--ams-text-input-line-height)',
        margin: '0px',
        opacity: 1,
        padding: '0',
      }),
      option: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: state.isFocused ? 'rgb(222, 235, 255)' : 'transparent',
        fontSize: 'var(--ams-text-input-font-size)',
      }),
    }}
  />
);
export default InputAutoSelect;
