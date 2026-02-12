import type { Meta, StoryObj } from '@storybook/react-vite';
import GridExample from './GridExample';

const meta = {
  title: 'Examples/GridExample',
  component: GridExample,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
        import { useCallback, useState } from 'react';
        import { SubmitHandler, useForm } from 'react-hook-form';
        import {
          CheckboxControl,
          FormProvider,
          TextInputControl,
        } from '@amsterdam/ee-ads-rhf-lib';
        import { Button, Grid, Page, PageHeader } from '@amsterdam/design-system-react';

        interface FormData {
          name: string;
          email: string;
          checkbox: boolean;
        }

        const GridExample = () => {
          const [isLoading, setIsLoading] = useState(false);

          const form = useForm<FormData>({
            defaultValues: {
              name: '',
              email: '',
              checkbox: false,
            },
          });

          const onValidSubmit: SubmitHandler<FormData> = useCallback(async () => {
            try {
              /**
               * Use setTimeout to Simulate API call
               * - Here's where validation can happen
               * - Here's where you can show a post-submission success component
               * or redirect the user to a new page
               */
              setIsLoading(true);

              setTimeout(() => {
                setIsLoading(false);
              }, 1500);
            } catch (error) {
              console.log('form error!', error);
            }
          }, []);

          return (
            <Page>
              <PageHeader className="ams-mb-xl" />
              <FormProvider
                form={form}
                onSubmit={onValidSubmit}
                useGrid
                gridProps={{ paddingBottom: '2x-large', paddingTop: 'large' }}
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
                  <Button type="submit" disabled={isLoading}>
                    Verzenden
                  </Button>
                </Grid.Cell>
              </FormProvider>
            </Page>
          );
        };

        export default GridExample;
        `,
      },
      description: {
        component:
          'It is common to use the amsterdam-design-system Grid system with form templates. This is an example to demonstrate use of the FormProvider `useGrid` and `gridProps` props.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GridExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
