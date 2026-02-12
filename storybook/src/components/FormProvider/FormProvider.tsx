import { Button, Grid } from '@amsterdam/design-system-react';
import {
  CheckboxControl,
  FormProvider as FormProviderComponent,
  type FormProviderProps as OriginalFormProviderProps,
  TextInputControl,
} from '@amsterdam/ee-ads-rhf-lib';
import { useForm, type FieldValues } from 'react-hook-form';

type FormProviderProps = Omit<
  OriginalFormProviderProps<FieldValues>,
  'form' | 'onSubmit' | 'children'
> & {
  useGrid?: boolean;
};

interface FormData {
  name: string;
  email: string;
  checkbox: boolean;
}

export const FormProvider = ({
  useGrid = false,
  gridProps,
  noValidate,
}: FormProviderProps) => {
  const form = useForm<FieldValues>({
    defaultValues: {
      example: '',
    },
  });

  return (
    <FormProviderComponent
      form={form}
      onSubmit={(data) => {
        console.log('submitted', data);
      }}
      useGrid={useGrid}
      gridProps={gridProps}
      noValidate={noValidate}
    >
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 5 }}>
        <TextInputControl<FormData>
          label="Name"
          name="name"
          registerOptions={{
            required: true,
          }}
          className="ams-mb-m"
        />
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 5 }}>
        <TextInputControl<FormData>
          label="E-mailadres"
          type="email"
          name="email"
          registerOptions={{
            required: true,
          }}
          className="ams-mb-m"
        />
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 5 }}>
        <CheckboxControl<FormData>
          label="A checkbox label"
          name="checkbox"
          className="ams-mb-m"
        />
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 12 }}>
        <Button type="submit">Verzenden</Button>
      </Grid.Cell>
    </FormProviderComponent>
  );
};
