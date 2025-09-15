import {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
  ReactElement,
  Ref,
} from 'react';
import {
  Field,
  Label,
  Paragraph,
  DateInput,
  type DateInputProps,
  ErrorMessage,
} from '@amsterdam/design-system-react';
import {
  Controller,
  useFormContext,
  type FieldValues,
  type RegisterOptions,
} from 'react-hook-form';
import clsx from 'clsx';
import { FormControlBase } from '../types';

// Merge design-system and react-hook-form types
export type DateControlProps<TFieldValues extends FieldValues> =
  DateInputProps &
    FormControlBase<TFieldValues> &
    // This component is wrapped in a `<Field>` component, which returns a `div`
    ComponentPropsWithoutRef<'div'> & {
      wrapperProps?: ComponentPropsWithoutRef<'div'>;
    };

// This interface allows us to use a generic type argument in parent components to specify the shape of the form value
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface DateControlComponent extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: DateControlProps<TFieldValues> & {
      ref?: Ref<HTMLInputElement>;
    },
  ): ReactElement | null;
}

const DateControl = forwardRef(function DateControl<
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
  }: DateControlProps<TFieldValues>,
  ref: Ref<HTMLInputElement>,
) {
  const { control } = useFormContext();

  const identifier = testId || id || name;
  const descriptionId = `${identifier}-description`;
  const errorId = `${identifier}-error`;

  const required = registerOptions?.required;
  const optional = !required;

  return (
    <Controller
      name={name}
      control={control}
      rules={registerOptions as RegisterOptions}
      render={({ field, fieldState }) => {
        const errorMessage = fieldState.error?.message;
        const hasError = !!fieldState.error;

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
            {/* TODO description as ReactNode or Text */}
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

            <DateInput
              id={identifier}
              invalid={hasError}
              aria-describedby={clsx(
                { [descriptionId]: !!descriptionId },
                { [errorId]: hasError },
              )}
              // Controlled props from RHF
              {...field}
              {...attributes}
              data-testid={identifier}
              ref={ref}
            />
          </Field>
        );
      }}
    />
  );
}) as DateControlComponent;

export default DateControl;
