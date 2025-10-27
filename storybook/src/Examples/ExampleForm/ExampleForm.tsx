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
  SwitchControl,
  PasswordInputControl,
  FileInputControl,
  ReactSelectControl,
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

export function ExampleForm() {
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
    notification: false,
    password: '',
    attachment: '',
    districtAutoComplete: [],
    districtAutoCompleteMulti: [
      { label: 'Nieuwe Kerk e.o.', value: 'nieuwe-kerk' },
      { label: 'Stationsplein e.o.', value: 'stationsplein' },
    ],
  };

  const onSubmit = useCallback(async (data: AppFormData) => {
    try {
      console.log('Submit form!', data);

      // If the form data includes a file field somewhere
      // Before sending to any API you need to convert JSON to FormDdata
      // const formData = new FormData();

      // Object.entries(data).forEach(([key, value]) => {
      //   if (value instanceof FileList) {
      //     // Add all files (could be multiple)
      //     Array.from(value).forEach((file) => formData.append(key, file));
      //   } else if (typeof value === 'object' && value !== null) {
      //     // Optional: stringify nested objects
      //     formData.append(key, JSON.stringify(value));
      //   } else {
      //     formData.append(key, String(value));
      //   }
      // });
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
            registerOptions={{
              required: 'This field is required.',
            }}
            wrapperProps={{
              className: 'ams-mb-m',
            }}
          />

          <SwitchControl<{ notification: boolean }>
            label="Do you want a notification?"
            name="notification"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            registerOptions={{ required: 'The terms are required.' }}
            wrapperProps={{
              className: 'ams-mb-m',
            }}
          />

          <PasswordInputControl<{ password: string }>
            label="Password"
            name="password"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            registerOptions={{ required: 'A password is required.' }}
            wrapperProps={{
              className: 'ams-mb-m',
            }}
          />

          <FileInputControl<{ attachment: string }>
            label="Attachment"
            name="attachment"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            registerOptions={{}}
            wrapperProps={{
              className: 'ams-mb-m',
            }}
          />

          <ReactSelectControl<{ districtAutoComplete: string[] }>
            label="Gebieden autocomplete"
            name="districtAutoComplete"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            options={districts[0].options}
            registerOptions={{}}
            wrapperProps={{
              className: 'ams-mb-m',
            }}
          />

          <ReactSelectControl<{ districtAutoCompleteMulti: string[] }>
            label="Gebieden autocomplete (multiple)"
            name="districtAutoCompleteMulti"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            isMulti
            options={districts[1].options}
            registerOptions={{}}
            wrapperProps={{
              className: 'ams-mb-m',
            }}
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
