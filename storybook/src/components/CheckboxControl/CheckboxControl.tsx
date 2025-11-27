import React from 'react';
import {
  CheckboxControl as Component,
  CheckboxControlProps as OriginalCheckboxControlProps,
} from '@amsterdam/ee-ads-rhf-lib';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

// Re-export the props type but make form-specific props optional for Storybook
export type CheckboxControlProps = Partial<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  OriginalCheckboxControlProps<any>
> & {
  label?: string;
  name?: string;
};

export const CheckboxControl = ({
  label = 'Do you accept the terms?',
  name = 'example',
  description,
  registerOptions,
  wrapperProps,
  hideFieldError = false,
  hideErrorMessage = false,
  shouldShow = true,
  ...props
}: CheckboxControlProps) => {
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
        shouldShow={shouldShow}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      />
    </FormProvider>
  );
};
