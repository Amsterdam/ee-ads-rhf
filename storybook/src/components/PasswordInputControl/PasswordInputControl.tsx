import {
  PasswordInputControl as Component,
  PasswordInputControlProps as OriginalPasswordInputControlProps,
} from '@amsterdam/ee-ads-rhf';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

// Re-export the props type but make form-specific props optional for Storybook
export type PasswordInputControlProps = Partial<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  OriginalPasswordInputControlProps<any>
> & {
  label?: string;
  name?: string;
};

export const PasswordInputControl = ({
  label = 'Password',
  name = 'example',
  description,
  registerOptions,
  wrapperProps,
  hideFieldError = false,
  hideErrorMessage = false,
  shouldShow = true,
  ...props
}: PasswordInputControlProps) => {
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
        hideFieldError={hideFieldError}
        hideErrorMessage={hideErrorMessage}
        shouldShow={shouldShow}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      />
    </FormProvider>
  );
};
