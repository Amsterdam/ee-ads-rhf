import {
  ReactSelectControl as Component,
  ReactSelectControlProps as OriginalReactSelectControlProps,
} from '@amsterdam/ee-ads-rhf-lib';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

// Re-export the props type but make form-specific props optional for Storybook
export type ReactSelectControlProps = Partial<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  OriginalReactSelectControlProps<any>
> & {
  label?: string;
  name?: string;
};

export const ReactSelectControl = ({
  label = 'Type',
  name = 'example',
  options = [],
  isMulti = false,
  description,
  registerOptions,
  wrapperProps,
  hideFieldError = false,
  hideErrorMessage = false,
  ...props
}: ReactSelectControlProps) => {
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
        options={options}
        isMulti={isMulti}
        description={description}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        registerOptions={registerOptions as any}
        wrapperProps={wrapperProps}
        hideFieldError={hideFieldError}
        hideErrorMessage={hideErrorMessage}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      />
    </FormProvider>
  );
};
