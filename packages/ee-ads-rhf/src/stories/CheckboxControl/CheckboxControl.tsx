import React from 'react';
import Component, {
  CheckboxControlProps as OriginalCheckboxControlProps,
} from '../../CheckboxControl/CheckboxControl';
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      />
    </FormProvider>
  );
};
