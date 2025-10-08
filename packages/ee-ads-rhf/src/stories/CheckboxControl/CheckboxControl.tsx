import React, { ComponentPropsWithoutRef } from 'react';
import Component, { CheckboxControlProps as OriginalCheckboxControlProps } from '../../CheckboxControl/CheckboxControl';
import { FieldValues, FormProvider, RegisterOptions, useForm } from 'react-hook-form';

// Re-export the props type but make form-specific props optional for Storybook
export type CheckboxControlProps = Partial<OriginalCheckboxControlProps<any>> & {
  label?: string;
  name?: string;
};

export const CheckboxControl = ({
  label = 'Do you accept the terms?',
  name = 'example',
  description,
  registerOptions,
  wrapperProps,
  ...props
}: CheckboxControlProps) => {
  const methods = useForm<FieldValues>({ defaultValues: {
    [name]: false
  } });

  return (
    <FormProvider {...methods}>
      <Component<{ example: boolean }>
        label={label}
        name={name as any}
        description={description}
        registerOptions={registerOptions as any}
        wrapperProps={wrapperProps}
        {...props as any}
      />
    </FormProvider>
  );
};
