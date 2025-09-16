import { useCallback } from 'react';
import {
  FormProvider,
  TextInputControl,
  TextAreaControl,
  CheckboxControl,
  DateControl,
  TimeControl,
  SelectControl,
  RadioControl,
} from '@amsterdam/ee-ads-rhf-lib';
import {
  Grid,
  Breadcrumb,
  Heading,
  Button,
  Row,
} from '@amsterdam/design-system-react';
import districts from './districts';

interface AppFormData {
  name: string;
  email: string;
  comment: string;
  startDate: string;
  startTime: string;
  terms: boolean;
}

function App() {
  const defaultValues = {
    email: '',
    comment: '',
    startDate: '',
    startTime: '',
    terms: false,
    district: 'elandsgrachtbuurt',
    region: 'Noord-Holland',
    country: 'nl',
    gender: 'm',
  };

  const onSubmit = useCallback(async (data: AppFormData) => {
    try {
      console.log('Submit form!', data);
    } catch (error) {
      console.log('form error!', error);
    }
  }, []);

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

        <FormProvider onSubmit={onSubmit} defaultValues={defaultValues}>
          <TextInputControl<{ email: string }>
            label="E-mailadres"
            name="email"
            type="email"
            registerOptions={{ required: 'This field is required.' }}
            testId="create-email"
            wrapperProps={{
              className: 'ams-mb-m',
            }}
          />
          <TextAreaControl<{ comments: string }>
            label="Additional comments"
            name="comments"
            testId="create-comments"
            wrapperProps={{
              className: 'ams-mb-m',
            }}
          />
          <Row className="ams-mb-m">
            <DateControl<{ startDate: string }>
              label="Start date"
              name="startDate"
              testId="create-start-date"
              registerOptions={{
                required: 'This field is required.',
              }}
            />
            <TimeControl<{ startTime: string }>
              label="Start time"
              name="startTime"
              testId="create-start-time"
              registerOptions={{ required: 'This field is required.' }}
            />
          </Row>

          <CheckboxControl<{ terms: boolean }>
            label="Do you accept the terms?"
            name="terms"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            registerOptions={{ required: 'The terms are required.' }}
            wrapperProps={{
              className: 'ams-mb-m',
            }}
          />

          {/* Select grouped option example */}
          <SelectControl<{ district: string }>
            label="Gebied"
            name="district"
            registerOptions={{}}
            wrapperProps={{
              className: 'ams-mb-m',
            }}
            options={districts}
          />

          {/* Select flat array option example */}
          <SelectControl<{ region: string }>
            label="Province"
            name="region"
            registerOptions={{}}
            wrapperProps={{
              className: 'ams-mb-m',
            }}
            options={['Flevoland', 'Noord-Holland']}
          />

          {/* Select standard option example */}
          <SelectControl<{ country: string }>
            label="Country"
            name="country"
            description={<em>description text here</em>}
            registerOptions={{}}
            wrapperProps={{
              className: 'ams-mb-m',
            }}
            options={[
              {
                label: 'Belgium',
                value: 'be',
              },
              {
                label: 'The Netherlands',
                value: 'nl',
              },
              {
                label: 'United Kingdom',
                value: 'uk',
              },
            ]}
          />

          <RadioControl<{ gender: string }>
            label="Gender"
            description="Description text goes here..."
            name="gender"
            registerOptions={{
              required: 'This field is required.',
            }}
            wrapperProps={{
              className: 'ams-mb-m',
            }}
            options={[
              {
                label: 'Female',
                value: 'f',
              },
              {
                label: 'Male',
                value: 'm',
              },
            ]}
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
