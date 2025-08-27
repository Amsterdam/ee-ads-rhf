import {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
  ReactElement,
  Ref,
} from 'react';
import {
  ErrorMessage,
  Field,
  Label,
  Paragraph,
  TimeInput,
  type TimeInputProps,
} from '@amsterdam/design-system-react';
import type { FieldValues, RegisterOptions } from 'react-hook-form';
import clsx from 'clsx';
import FormControl from '../FormControl/FormControl';
import { FormControlBase } from '../types';

// Merge design-system and react-hook-form types
export type TimeControlProps<TFieldValues extends FieldValues> =
  TimeInputProps &
    FormControlBase<TFieldValues> & {
      wrapperProps?: ComponentPropsWithoutRef<'div'>;
    };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface TimeControlComponent extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: TimeControlProps<TFieldValues> & {
      ref?: Ref<HTMLInputElement>;
    },
  ): ReactElement | null;
}

const TimeControl = forwardRef(function TimeControl<
  TFieldValues extends FieldValues = FieldValues,
>(
  {
    name,
    label,
    description,
    registerOptions,
    id,
    testId,
    wrapperProps,
    ...attributes
  }: TimeControlProps<TFieldValues>,
  ref: Ref<HTMLInputElement>,
) {
  const identifier = testId || id || name;
  const descriptionId = `${identifier}-description`;
  const errorId = `${identifier}-error`;

  const required = registerOptions?.required;
  const optional = !required;

  return (
    <FormControl>
      {({ register, formState }) => {
        const errorMessage = formState.errors[name]?.message?.toString();
        const hasError = !!formState.errors[name];

        return (
          <Field
            invalid={hasError}
            data-testid={`${identifier}-text-input-wrapper`}
            {...wrapperProps}
          >
            {label && (
              <Label
                htmlFor={identifier}
                data-testid={`${identifier}-label`}
                optional={optional}
              >
                {label}
              </Label>
            )}
            {description && (
              <Paragraph
                size="small"
                id={descriptionId}
                data-testid={descriptionId}
              >
                {description}
              </Paragraph>
            )}
            {hasError && (
              <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>
            )}

            {/* TODO spread values last or first - and can `register` interfere with the invalid/disabled props? */}
            <TimeInput
              aria-describedby={clsx(
                { [descriptionId]: !!descriptionId },
                { [errorId]: hasError },
              )}
              {...register(name, registerOptions as RegisterOptions)}
              id={identifier}
              data-testid={identifier}
              invalid={hasError}
              ref={ref}
              {...attributes}
            />
          </Field>
        );
      }}
    </FormControl>
  );
}) as TimeControlComponent;

export default TimeControl;
