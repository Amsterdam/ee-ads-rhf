import React from 'react';
import {
  SwitchControl as Component,
  SwitchControlProps as OriginalSwitchControlProps,
} from '@amsterdam/ee-ads-rhf-lib';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

// Re-export the props type but make form-specific props optional for Storybook
export type SwitchControlProps = Partial<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  OriginalSwitchControlProps<any>
> & {
  label?: string;
  name?: string;
};

export const SwitchControl = ({
  label = 'Do you accept the terms?',
  name = 'example',
  description,
  registerOptions,
  wrapperProps,
  hideFieldError = false,
  hideErrorMessage = false,
  ...props
}: SwitchControlProps) => {
  const methods = useForm<FieldValues>({
    defaultValues: {
      [name]: false,
    },
  });

  return (
    <FormProvider {...methods}>
      <Component<{ [name]: boolean }>
        label={label}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={name as any}
        description={description}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        registerOptions={registerOptions as any}
        wrapperProps={wrapperProps}
        hideFieldError={hideFieldError}
        hideErrorMessage={hideErrorMessage}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      />
    </FormProvider>
  );
};
