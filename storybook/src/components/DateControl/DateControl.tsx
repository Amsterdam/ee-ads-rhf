import {
  DateControl as Component,
  DateControlProps as OriginalDateControlProps,
} from '@amsterdam/ee-ads-rhf-lib';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
