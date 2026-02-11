import type { Meta, StoryObj } from '@storybook/react-vite';
import BookingForm from './BookingForm';

const meta = {
  title: 'Examples/BookingForm',
  component: BookingForm,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
          import { useCallback, useState } from 'react'
          import { SubmitHandler, useForm } from 'react-hook-form'
          import { FormProvider } from '@amsterdam/ee-ads-rhf'
          import { zodResolver } from '@hookform/resolvers/zod'
          import { Page, PageHeader } from '@amsterdam/design-system-react'
          import Loader from './components/Loader/Loader'
          import StepIntro from './components/StepIntro/StepIntro'
          import SuccessContent from './components/SuccessContent/SuccessContent'
          import StepPersonalDetails from './components/StepPersonalDetails/StepPersonalDetails'
          import StepAppointment from './components/StepAppointment/StepAppointment'
          import StepConfirm from './components/StepConfirm/StepConfirm'
          import bookingFormSchema from './schema'

          export default function BookingForm() {
            const [currentStep, setCurrentStep] = useState(0)
            const [isLoading, setIsLoading] = useState(false)
            const [isSubmitted, setIsSubmitted] = useState(false)

            const nowDateTime = new Date()
            const nowDate = new Date().toISOString().split('T')[0]

            const form = useForm({
              resolver: zodResolver(bookingFormSchema),
              defaultValues: {
                name: '',
                email: '',
                startDate: nowDateTime.toISOString().split('T')[0],
                startTime: '',
                endDate: '',
                endTime: '',
                comments: ''
              }
            })

            const onValidSubmit = useCallback(async () => {
              try {
                setIsLoading(true)
                setTimeout(() => {
                  setIsLoading(false)
                  setIsSubmitted(true)
                }, 1500)
              } catch (error) {
                console.log('form error', error)
              }
            }, [])

            const handleNextStep = () => {
              setCurrentStep(currentStep + 1)
            }

            const steps = [
              <StepIntro onButtonClick={() => setCurrentStep(1)} key="step-0" />,
              <StepPersonalDetails
                disabled={isLoading}
                onPrevButtonClick={() => setCurrentStep(0)}
                onNextButtonClick={handleNextStep}
                key="step-1"
              />,
              <StepAppointment
                minDateValue={nowDate}
                disabled={isLoading}
                onPrevButtonClick={() => setCurrentStep(1)}
                onNextButtonClick={handleNextStep}
                key="step-2"
              />,
              <StepConfirm
                disabled={isLoading}
                onPrevButtonClick={() => setCurrentStep(2)}
                key="step-3"
              />
            ]

            return (
              <Page>
                <PageHeader className="ams-mb-xl" />
                {isLoading && !isSubmitted && <Loader />}
                <FormProvider form={form} onSubmit={onValidSubmit}>
                  {!isSubmitted ? steps[currentStep] : <SuccessContent />}
                </FormProvider>
              </Page>
            )
          }
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BookingForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
