import {
  TimeControl as Component,
  TimeControlProps as OriginalTimeControlProps,
} from '@amsterdam/ee-ads-rhf-lib';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

// Re-export the props type but make form-specific props optional for Storybook
export type TimeControlProps = Partial<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  OriginalTimeControlProps<any>
> & {
  label?: string;
  name?: string;
};

export const TimeControl = ({
  label = 'Start time',
  name = 'example',
  description,
  registerOptions,
  wrapperProps,
  ...props
}: TimeControlProps) => {
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
