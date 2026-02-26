import React from 'react';
import {
  CheckboxControlGroup as Component,
  CheckboxControlGroupProps as OriginalCheckboxControlGroupProps,
} from '@amsterdam/ee-ads-rhf';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

// Re-export the props type but make form-specific props optional for Storybook
export type CheckboxControlGroupProps = Partial<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  OriginalCheckboxControlGroupProps<any>
> & {
  label?: string;
  name?: string;
};

export const CheckboxControlGroup = ({
  label = 'Which options do you prefer?',
  name = 'example',
  options = [],
  columns,
  description,
  registerOptions,
  wrapperProps,
  hideErrorMessage = false,
  shouldShow = true,
  ...props
}: CheckboxControlGroupProps) => {
  const methods = useForm<FieldValues>({
    defaultValues: {
      [name]: [],
    },
  });

  return (
    <FormProvider {...methods}>
      <Component<{ [name]: string[] }>
        label={label}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={name as any}
        description={description}
        options={options}
        columns={columns}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        registerOptions={registerOptions as any}
        wrapperProps={wrapperProps}
        hideErrorMessage={hideErrorMessage}
        shouldShow={shouldShow}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      />
    </FormProvider>
  );
};
