import {
  SelectInput as Component,
  SelectInputProps as OriginalSelectInputProps,
} from '@amsterdam/ee-ads-rhf';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

// Re-export the props type but make form-specific props optional for Storybook
export type SelectInputProps = Partial<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  OriginalSelectInputProps<any>
> & {
  label?: string;
  name?: string;
};

export const SelectInput = ({
  isClearable = true,
  isDisabled = false,
  isMulti,
  options,
  id = 'example',
  name = 'example',
  required = false,
  value = undefined,
  customAriaDescribedBy = undefined,
  menuPortalTarget = document.body,
  ref,
  error,
  onChange = () => {},
  onBlur = () => {},
  ...props
}: SelectInputProps) => {
  const methods = useForm<FieldValues>({
    defaultValues: {
      [name]: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <Component
        id={id}
        ref={ref}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isMulti={isMulti}
        options={options}
        required={required}
        value={value}
        error={error}
        customAriaDescribedBy={customAriaDescribedBy}
        menuPortalTarget={menuPortalTarget}
        onChange={onChange}
        onBlur={onBlur}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      />
    </FormProvider>
  );
};
