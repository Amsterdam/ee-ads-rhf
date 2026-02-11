import {
  SelectControl as Component,
  SelectControlProps as OriginalSelectControlProps,
} from '@amsterdam/ee-ads-rhf';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

// Re-export the props type but make form-specific props optional for Storybook
export type SelectControlProps = Partial<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  OriginalSelectControlProps<any>
> & {
  label?: string;
  name?: string;
};

export const SelectControl = ({
  label = 'Type',
  name = 'example',
  options = [],
  description,
  registerOptions,
  wrapperProps,
  hideFieldError = false,
  hideErrorMessage = false,
  shouldShow = true,
  ...props
}: SelectControlProps) => {
  const methods = useForm<FieldValues>({
    defaultValues: {
      [name]: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <Component<{ [name]: string }>
        label={label}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={name as any}
        options={options}
        description={description}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        registerOptions={registerOptions as any}
        wrapperProps={wrapperProps}
        hideFieldError={hideFieldError}
        hideErrorMessage={hideErrorMessage}
        shouldShow={shouldShow}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      />
    </FormProvider>
  );
};
