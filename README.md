# ee-ads-rhf

Team responsible: Engineering Enablement team

## Aims of this repo

This repository aims to provide a package combining [React Hook Form](https://react-hook-form.com) with [Amsterdam Design System](https://designsystem.amsterdam/) form components.

## Installation

To install the package use `npm i @amsterdam/ee-ads-rhf`

This package depends on the following libraries being installed in your project:

```bash
npm i react react-dom react-hook-form
npm i @amsterdam/design-system-assets @amsterdam/design-system-css @amsterdam/design-system-react @amsterdam/design-system-react-icons @amsterdam/design-system-tokens
```

## Usage

```tsx
import {
  Button,
  InvalidFormAlert,
} from '@amsterdam/design-system-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormProvider,
  mapErrorsToAlert,
  TextInputControl,
} from '@amsterdam/ee-ads-rhf';

type ExampleFormData {
  name: string;
}

const ExampleForm = () => {
  const form = useForm<ExampleFormData>({
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
        className="ams-mb-m"
        disabled={isLoading}
      />
      
      <Button type="submit">Verzenden</Button>
    </FormProvider>
  );
}
```

For more examples including validation handling, check out the [project storybook](https://musical-adventure-jzmw123.pages.github.io/demo-develop/).

## Workflow

This project is a Node.js monorepo application with two workspaces:

### Workspaces

- `packages/ee-ads-rhf` - A library wrapping [Amsterdam Design System](https://designsystem.amsterdam/) form components with [React Hook Form](https://react-hook-form.com)
- `storybook` - A Storybook site with demos of the package's components and form examples.

## How to use this repo?

- `npm run dev` for dev watch mode; load storybook at `http://localhost:6006`
- `npm run build` to build the package

## How to publish

This project uses [Release Please](https://github.com/googleapis/release-please) and [Semantic Versioning](https://semver.org/), which will automatically run on successful merges to `main`. This action is followed by an NPM publish step.

## How to contribute to this repo?

Simply create and submit an issue or pull request. You can also contact us via Teams (DV - Enablement) or Slack (#dv-enablement).
