import type { Meta, StoryObj } from '@storybook/react-vite';
import ContactForm from './ContactForm';

const meta = {
  title: 'Examples/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
          import { useState } from 'react'
          import { useForm } from 'react-hook-form'
          import { zodResolver } from '@hookform/resolvers/zod'
          import {
            Alert,
            Button,
            Grid,
            Heading,
            InvalidFormAlert,
            Paragraph
          } from '@amsterdam/design-system-react'
          import {
            FormProvider,
            mapErrorsToAlert,
            TextAreaControl,
            TextInputControl
          } from '@amsterdam/ee-ads-rhf'
          import contactFormSchema from './schema'
          import Loader from './components/Loader/Loader'

          export default function ContactForm() {
            const form = useForm({
              resolver: zodResolver(contactFormSchema),
              defaultValues: { name: '', email: '', message: '' }
            })

            const [isLoading, setIsLoading] = useState(false)
            const [isSubmitted, setIsSubmitted] = useState(false)

            const onSubmit = async data => {
              setIsLoading(true)
              setTimeout(() => setIsSubmitted(true), 1500)
            }

            const showErrors = Object.keys(form.formState.errors).length > 0
            const alertErrors = mapErrorsToAlert(form.formState.errors)

            if (isSubmitted) {
              return (
                <Grid paddingBottom="x-large" paddingTop="large">
                  <Grid.Cell span={{ narrow: 4, medium: 8, wide: 6 }}>
                    <Heading level={1} size="level-3">Contact form</Heading>
                    <Alert heading="Success!" headingLevel={2} severity="success">
                      <Paragraph>The form has been sent</Paragraph>
                    </Alert>
                  </Grid.Cell>
                </Grid>
              )
            }

            return (
              <Grid paddingBottom="x-large" paddingTop="large">
                <Grid.Cell span={{ narrow: 4, medium: 8, wide: 8 }}>
                  <Heading level={1} size="level-3">Contact form</Heading>

                  <FormProvider form={form} onSubmit={onSubmit}>
                    {isLoading && <Loader />}
                    {showErrors && (
                      <InvalidFormAlert
                        errors={alertErrors}
                        headingLevel={4}
                      />
                    )}

                    <TextInputControl
                      label="Name"
                      name="name"
                      registerOptions={{ required: true }}
                      disabled={isLoading}
                    />

                    <TextInputControl
                      label="E-mail address"
                      type="email"
                      name="email"
                      registerOptions={{ required: true }}
                      disabled={isLoading}
                    />

                    <TextAreaControl
                      label="Comments"
                      name="message"
                      registerOptions={{ required: true }}
                      disabled={isLoading}
                    />

                    <Button type="submit">Submit</Button>
                  </FormProvider>
                </Grid.Cell>
              </Grid>
            )
          }
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
