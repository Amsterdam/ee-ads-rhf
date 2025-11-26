import {
  StandaloneLink,
  Button,
  Grid,
  Heading,
  Paragraph,
  InvalidFormAlert,
} from '@amsterdam/design-system-react';
import { MouseEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { ChevronBackwardIcon } from '@amsterdam/design-system-react-icons';
import {
  DateControl,
  TimeControl,
  mapErrorsToAlert,
} from '@amsterdam/ee-ads-rhf-lib';
import DateTimeFieldset from '../DateTimeFieldset/DateTimeFieldset';
import { BookingFormData } from '../../schema';

interface StepAppointmentProps {
  minDateValue: string;
  disabled?: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
}

const StepAppointment = ({
  minDateValue,
  onPrevButtonClick,
  onNextButtonClick,
}: StepAppointmentProps) => {
  const {
    clearErrors,
    formState: { errors },
    trigger,
    watch,
  } = useFormContext();
  const showErrors = Object.keys(errors).length > 0;
  const alertErrors = mapErrorsToAlert(errors);

  const [startDate] = watch(['startDate']);

  const handleNextButtonClick = async () => {
    const isValid = await trigger([
      'startDate',
      'startTime',
      'endDate',
      'endTime',
    ]);
    if (isValid) onNextButtonClick();
  };

  const handlePrevButtonClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    clearErrors();
    onPrevButtonClick();
  };

  return (
    <>
      <Grid paddingBottom="2x-large" paddingTop="large">
        <Grid.Cell
          span={{ narrow: 4, medium: 5, wide: 7 }}
          start={{ narrow: 1, medium: 2, wide: 3 }}
        >
          <StandaloneLink
            href="#"
            icon={ChevronBackwardIcon}
            onClick={handlePrevButtonClick}
          >
            Vorige vraag
          </StandaloneLink>
        </Grid.Cell>
      </Grid>
      <Grid as="main" id="inhoud" paddingBottom="2x-large" paddingTop="large">
        <Grid.Cell
          span={{ narrow: 4, medium: 5, wide: 7 }}
          start={{ narrow: 1, medium: 2, wide: 3 }}
        >
          {/*
           * Notifying a user of errors is threefold:
           * - We add the error count to the document title, so it is the first
           * thing a screen reader user hears.
           * - We show the Invalid Form Alert at the top of the main container.
           * - We add error messages next to the relevant form fields.
           * For more info, see: https://designsystem.amsterdam/?path=/docs/components-forms-invalid-form-alert--docs
           */}
          {showErrors && (
            <InvalidFormAlert
              errors={alertErrors}
              headingLevel={4}
              className="ams-mb-m"
            />
          )}

          <header aria-labelledby="form-header" className="ams-mb-m ams-gap-xs">
            <Heading aria-hidden id="form-header" level={2} size="level-4">
              Afspraak maken
            </Heading>
            {/*
              * Start by testing your form without a progress indicator to see
              if it’s simple enough that users do not need one.
              * If you do, use a simple one like this one.
              * For more info, see: https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators
              */}
            <Paragraph>Stap 2 van 3: Afspraak</Paragraph>
          </header>

          <DateTimeFieldset
            legend="Startdatum en -tijd"
            fields={['startDate', 'startTime']}
          >
            <DateControl<BookingFormData>
              label="Startdatum"
              name="startDate"
              registerOptions={{
                required: true,
              }}
              min={minDateValue}
            />

            <TimeControl<BookingFormData>
              label="Starttijd"
              name="startTime"
              registerOptions={{ required: true }}
            />
          </DateTimeFieldset>
          <DateTimeFieldset
            legend="Einddatum-tijd"
            fields={['endDate', 'endTime']}
          >
            <DateControl<BookingFormData>
              label="Einddatum"
              name="endDate"
              registerOptions={{
                required: true,
              }}
              min={startDate}
              hideErrorMessage
              hideFieldError
            />

            <TimeControl<BookingFormData>
              label="Eindtijd"
              name="endTime"
              registerOptions={{
                required: true,
              }}
              hideErrorMessage
            />
          </DateTimeFieldset>

          <Button type="button" onClick={handleNextButtonClick}>
            Volgende vraag
          </Button>
        </Grid.Cell>
      </Grid>
    </>
  );
};

export default StepAppointment;
