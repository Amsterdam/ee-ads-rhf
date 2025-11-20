import { PropsWithChildren } from 'react';
import {
  FieldValues,
  FormProvider as RHFFormProvider,
  SubmitHandler,
  useForm,
  // UseFormProps,
} from 'react-hook-form';

export interface FormProviderProps<TFieldValues extends FieldValues>
  extends PropsWithChildren {
  form: ReturnType<typeof useForm<T>>;
  onSubmit: SubmitHandler<TFieldValues>;
  noValidate?: boolean;
}

export const FormProvider = <TFieldValues extends FieldValues>({
  form,
  onSubmit,
  noValidate = true,
  children,
}: FormProviderProps<TFieldValues>) => {
  return (
    <RHFFormProvider {...form}>
      {/* Enable noValidate to prevent browser validation blocking JS */}
      <form noValidate={noValidate} onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </RHFFormProvider>
  );
};
