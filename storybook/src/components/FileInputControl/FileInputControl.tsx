import {
  FileInputControl as Component,
  FileInputControlProps as OriginalFileInputControlProps,
} from '@amsterdam/ee-ads-rhf';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

export type FileInputControlProps = Partial<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  OriginalFileInputControlProps<any>
> & {
  label?: string;
  name?: string;
};

export const FileInputControl = ({
  label = 'FileInput',
  name = 'example',
  description,
  registerOptions,
  wrapperProps,
  hideFieldError = false,
  hideErrorMessage = false,
  shouldShow = true,
  ...props
}: FileInputControlProps) => {
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
