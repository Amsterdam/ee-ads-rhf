import { Grid, GridProps } from '@amsterdam/design-system-react';
import { PropsWithChildren } from 'react';
import {
  FieldValues,
  FormProvider as RHFFormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

export interface FormProviderProps<TFieldValues extends FieldValues>
  extends PropsWithChildren {
  form: ReturnType<typeof useForm<TFieldValues>>;
  onSubmit: SubmitHandler<TFieldValues>;
  noValidate?: boolean;
  useGrid?: boolean;
  gridProps?: GridProps;
}

export const FormProvider = <TFieldValues extends FieldValues>({
  form,
  onSubmit,
  noValidate = true,
  useGrid = false,
  gridProps = {},
  children,
}: FormProviderProps<TFieldValues>) => {
  if (useGrid) {
    return (
      <RHFFormProvider {...form}>
        {/* Enable noValidate to prevent browser validation blocking JS */}
        <form noValidate={noValidate} onSubmit={form.handleSubmit(onSubmit)}>
          <Grid {...gridProps}>{children}</Grid>
        </form>
      </RHFFormProvider>
    );
  }

  return (
    <RHFFormProvider {...form}>
      {/* Enable noValidate to prevent browser validation blocking JS */}
      <form noValidate={noValidate} onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </RHFFormProvider>
  );
};
