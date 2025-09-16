import { PropsWithChildren } from 'react';
import {
  FieldValues,
  FormProvider as RHFFormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from 'react-hook-form';

interface FormProviderProps<TFieldValues extends FieldValues>
  extends PropsWithChildren {
  mode?: 'onChange' | 'onSubmit' | 'onBlur' | 'onTouched' | 'all' | undefined;
  noValidate?: boolean;
  onSubmit: SubmitHandler<TFieldValues>;
  defaultValues: UseFormProps<TFieldValues>['defaultValues'];
}

const FormProvider = <TFieldValues extends FieldValues>({
  mode = 'onChange',
  noValidate = true,
  onSubmit,
  children,
  defaultValues,
}: FormProviderProps<TFieldValues>) => {
  const methods = useForm<TFieldValues>({
    mode,
    defaultValues,
  });

  return (
    <RHFFormProvider {...methods}>
      {/* Enable noValidate to prevent browser validation blocking JS */}
      <form noValidate={noValidate} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </RHFFormProvider>
  );
};

export default FormProvider;
