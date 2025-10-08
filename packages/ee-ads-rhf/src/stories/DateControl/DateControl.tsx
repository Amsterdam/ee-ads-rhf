import React, { ComponentPropsWithoutRef } from 'react';
import Component, { DateControlProps as OriginalDateControlProps } from '../../DateControl/DateControl';
import { FieldValues, FormProvider, RegisterOptions, useForm } from 'react-hook-form';

export type DateControlProps = Partial<OriginalDateControlProps<any>> & {
  label?: string;
  name?: string;
};

export const DateControl = ({
  label = 'Date',
  name = 'example',
  description,
  registerOptions,
  wrapperProps,
  ...props
}: DateControlProps) => {
  const methods = useForm<FieldValues>({ defaultValues: {
    [name]: ''
  } })
  return (
    <FormProvider {...methods}>
      <Component<{ example: string }>
        label={label}
        name={name as any}
        description={description}
        registerOptions={registerOptions as any}
        wrapperProps={wrapperProps}
        {...props as any}
      />
    </FormProvider>
  )
}