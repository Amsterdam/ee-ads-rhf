import React, { ComponentPropsWithoutRef } from 'react';
import Component, { PasswordInputControlProps as OriginalPasswordInputControlProps } from '../../PasswordInputControl/PasswordInputControl';
import { FieldValues, FormProvider, RegisterOptions, useForm } from 'react-hook-form';

// Re-export the props type but make form-specific props optional for Storybook
export type PasswordInputControlProps = Partial<OriginalPasswordInputControlProps<any>> & {
  label?: string;
  name?: string;
};

export const PasswordInputControl = ({
  label = 'Password',
  name = 'example',
  description,
  registerOptions,
  wrapperProps,
  ...props
}: PasswordInputControlProps) => {
  const methods = useForm<FieldValues>({ defaultValues: {
    [name]: ''
  } });

  return (
    <FormProvider {...methods}>
      <Component<{ [name]: string }>
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
