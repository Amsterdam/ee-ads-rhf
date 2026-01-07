import {
  Alert,
  Button,
  Grid,
  Heading,
  InvalidFormAlert,
  Paragraph,
} from '@amsterdam/design-system-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormProvider,
  mapErrorsToAlert,
  RadioControl,
  TextAreaControl,
  TextInputControl,
} from '@amsterdam/ee-ads-rhf-lib';
import { zodResolver } from '@hookform/resolvers/zod';
import contactFormSchema, { ContactFormData } from './schema';
import Loader from './components/Loader/Loader';

// This is a simple React Hook Form example that validates using a Zod schema
// on change
const ContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // onSubmit will only fire if the form is valid
  const onSubmit = async (data: ContactFormData) => {
    console.log('Form data:', data);

    /**
     * If form is valid use setTimeout to Simulate API call
     * - Here's where validation can happen
     * - Here's where you can show a post-submission success component
     * or redirect the user to a new page
     */
    setIsLoading(true);

    setTimeout(() => {
      setIsSubmitted(true);
    }, 1500);
  };

  const showErrors = Object.keys(form.formState.errors).length > 0;
  const alertErrors = mapErrorsToAlert(form.formState.errors);

  if (isSubmitted) {
    return (
      <Grid paddingBottom="x-large" paddingTop="large">
        <Grid.Cell
          span={{ narrow: 4, medium: 8, wide: 6 }}
          className="ams-mb-xl"
        >
          <Heading level={1} size="level-3" className="ams-mb-m">
            Contact form
          </Heading>

          <Alert heading="Success!" headingLevel={2} severity="success">
            <Paragraph>
              The form has been sent. We have received your details.
            </Paragraph>
          </Alert>
        </Grid.Cell>
      </Grid>
    );
  }

  return (
    <Grid paddingBottom="x-large" paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 8 }} className="ams-mb-xl">
        <Heading level={1} size="level-3" className="ams-mb-m">
          Contact form
        </Heading>

        <Paragraph className="ams-mb-m">
          This form is a simple contact form with three required fields. It
          validates on submit.
        </Paragraph>

        <Paragraph className="ams-mb-m">
          The goal of this demo is to illustrate the most basic form validation
          scenario. Each field is required and the email must follow a valid
          format. Unlike more complex forms, no cross-field rules are needed —
          making it a clean example of straightforward validation.
        </Paragraph>

        <FormProvider form={form} onSubmit={onSubmit}>
          {/* Fake loader to simulate API request */}
          {isLoading && <Loader />}
          {showErrors && (
            <InvalidFormAlert
              errors={alertErrors}
              headingLevel={4}
              className="ams-mb-m"
              data-testid="error-alert"
            />
          )}

          <TextInputControl<ContactFormData>
            label="Name"
            name="name"
            registerOptions={{ required: true }}
            className="ams-mb-m"
            disabled={isLoading}
          />

          <TextInputControl<ContactFormData>
            label="E-mail address"
            type="email"
            name="email"
            registerOptions={{
              required: true,
            }}
            className="ams-mb-m"
            disabled={isLoading}
          />

          <TextAreaControl<ContactFormData>
            label="Comments"
            name="message"
            registerOptions={{ required: true }}
            className="ams-mb-m"
            disabled={isLoading}
          />

          <RadioControl
            label="Radio example"
            name="radio_example"
            options={[
              { label: 'Example 1', value: '1' },
              { label: 'Example 2', value: '2' },
              { label: 'Example 3', value: '3' },
            ]}
            id="radio-example"
            wrapperProps={{
              className: 'ams-mb-l',
            }}
            className="ams-mb-l"
          />

          <div>
            <Button type="submit">Submit</Button>
          </div>
        </FormProvider>
      </Grid.Cell>
    </Grid>
  );
};

export default ContactForm;
