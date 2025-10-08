import React, { ComponentPropsWithoutRef } from 'react';
import Component, { FileInputControlProps as OriginalFileInputControlProps } from '../../FileInputControl/FileInputControl';
import { FieldValues, FormProvider, RegisterOptions, useForm } from 'react-hook-form';

export type FileInputControlProps = Partial<OriginalFileInputControlProps<any>> & {
  label?: string;
  name?: string;
};

export const FileInputControl = ({
  label = 'FileInput',
  name = 'example',
  description,
  registerOptions,
  wrapperProps,
  ...props
}: FileInputControlProps) => {
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