import Component, {
  TextAreaControlProps as OriginalTextAreaControlProps,
} from '../../TextAreaControl/TextAreaControl';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

// Re-export the props type but make form-specific props optional for Storybook
export type TextAreaControlProps = Partial<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  OriginalTextAreaControlProps<any>
> & {
  label?: string;
  name?: string;
};

export const TextAreaControl = ({
  label = 'Message',
  name = 'example',
  description,
  registerOptions,
  wrapperProps,
  ...props
}: TextAreaControlProps) => {
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
