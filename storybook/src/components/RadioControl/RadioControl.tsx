import {
  RadioControl as Component,
  RadioControlProps as OriginalRadioControlProps,
} from '@amsterdam/ee-ads-rhf-lib';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

// Re-export the props type but make form-specific props optional for Storybook
export type RadioControlProps = Partial<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  OriginalRadioControlProps<any>
> & {
  label?: string;
  name?: string;
};

export const RadioControl = ({
  label = 'Type',
  name = 'example',
  options = [],
  description,
  registerOptions,
  wrapperProps,
  hideErrorMessage = false,
  ...props
}: RadioControlProps) => {
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
        hideErrorMessage={hideErrorMessage}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      />
    </FormProvider>
  );
};
