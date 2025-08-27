// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css'
import {
  TextInputControl,
  TextAreaControl,
  CheckboxControl,
  DateControl,
  TimeControl,
} from '../../ee-ads-rhf/dist';
import { FormProvider, useForm } from 'react-hook-form';
import {
  Grid,
  Breadcrumb,
  Heading,
  Button,
  Row,
} from '@amsterdam/design-system-react';

interface AppFormData {
  name: string;
  email: string;
  comment: string;
  startDate: string;
  startTime: string;
  terms: boolean;
}

// TODO make className prop work on *Control components
// TODO ...attributes prop for Control components?
// TODO file input (+ file list?)
// TODO password input
// TODO radio
// TODO select
// TODO react-select
// TODO switch
function App() {
  const methods = useForm<AppFormData>({
    // Uncomment for validation onChange
    // mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      comment: '',
      startDate: '',
      startTime: '',
      terms: false,
    },
  });

  return (
    <Grid paddingBottom="x-large" paddingTop="large">
      <Grid.Cell
        span={{ narrow: 4, medium: 5, wide: 7 }}
        start={{ narrow: 1, medium: 2, wide: 3 }}
      >
        <Breadcrumb>
          <Breadcrumb.Link>Home</Breadcrumb.Link>
        </Breadcrumb>
        <Heading className="ams-mb-m" level={1}>
          Contact
        </Heading>

        <FormProvider {...methods}>
          <TextInputControl<{ email: string }>
            label="E-mailadres"
            name="email"
            type="email"
            testId="booking-create-email"
            registerOptions={{ required: 'This field is required.' }}
          />
          <TextAreaControl<{ comments: string }>
            label="Additional comments"
            name="comments"
            testId="booking-create-comments"
            className="ams-mb-m"
          />
          <CheckboxControl<{ terms: boolean }>
            label="Do you accept the terms?"
            name="terms"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            className="ams-mb-m"
          />
          <DateControl<{ startDate: string }>
            label="Start date"
            name="startDate"
            testId="booking-create-start-date"
            registerOptions={{
              required: 'This field is required.',
            }}
            // min={nowDate}
          />
          <TimeControl<{ startTime: string }>
            label="Start time"
            name="startTime"
            testId="booking-create-start-time"
            registerOptions={{ required: 'This field is required.' }}
            className="ams-mb-m"
          />

          <Row>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Row>
        </FormProvider>
      </Grid.Cell>
    </Grid>
  );
}

export default App;
