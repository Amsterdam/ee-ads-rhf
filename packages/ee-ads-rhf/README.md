# ee-ads-rhf

A package combining [Amsterdam Design System](https://designsystem.amsterdam/) form components and [React Hook Form](https://react-hook-form.com).

## Installation

To install the package use `npm i @amsterdam/ee-ads-rhf`

This package depends on the following libraries being installed in your project:

```bash
npm i react react-dom react-hook-form
npm i @amsterdam/design-system-assets @amsterdam/design-system-css @amsterdam/design-system-react @amsterdam/design-system-react-icons @amsterdam/design-system-tokens
```

## Usage

```tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  InvalidFormAlert,
  Grid,
  Heading,
} from '@amsterdam/design-system-react';
import {
  FormProvider,
  mapErrorsToAlert,
  TextInputControl,
} from '@amsterdam/ee-ads-rhf';
import z from 'zod/v4';
import { zodResolver } from '@hookform/resolvers/zod';

const exampleFormSchema = z.object({
  name: z
    .string({
      error: () => 'Naam is verplicht',
    })
    .min(1, { error: 'Naam is verplicht' }),
});

export type ExampleFormData = z.infer<typeof exampleFormSchema>;

const Home = () => {
  const form = useForm<ExampleFormData>({
    resolver: zodResolver(exampleFormSchema),
    defaultValues: {
      name: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  // onSubmit will only fire if the form is valid
  const onSubmit = async (data: ExampleFormData) => {
    setIsLoading(true);
  };

  const showErrors = Object.keys(form.formState.errors).length > 0;
  const alertErrors = mapErrorsToAlert(form.formState.errors);

  return (
    <Grid paddingBottom="x-large" paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 8 }}>
        <Heading className="ams-mb-s" level={1}>
          Pagina titel
        </Heading>

        <FormProvider form={form} onSubmit={onSubmit}>
          {showErrors && (
            <InvalidFormAlert
              errors={alertErrors}
              headingLevel={4}
              className="ams-mb-m"
              data-testid="error-alert"
            />
          )}

          <TextInputControl<ExampleFormData>
            label="Naam"
            name="name"
            registerOptions={{ required: true }}
            wrapperProps={{ className: 'ams-mb-m' }}
            disabled={isLoading}
          />

          <div>
            <Button type="submit">Verzenden</Button>
          </div>
        </FormProvider>
      </Grid.Cell>
    </Grid>
  );
};
```

For more examples check out the [project storybook](https://amsterdam.github.io/ee-ads-rhf/).

## How to use this repo?

- `npm run dev` to watch for file changes and automatically rebuild the package
- `npm run build` to build the package

## How to publish

This project uses [Release Please](https://github.com/googleapis/release-please) and [Semantic Versioning](https://semver.org/), which will automatically run on successful merges to `main`. This action is followed by an NPM publish step.

## How to contribute to this repo?

Simply create and submit an issue or pull request. You can also contact us via Teams (DV - Enablement) or Slack (#dv-enablement).
