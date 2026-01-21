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
import {
  Controller,
  Path,
  useFormContext,
  UseFormWatch,
  type FieldValues,
  type RegisterOptions,
} from 'react-hook-form';
import clsx from 'clsx';
import { FormControlBase } from '../../types';

// Merge design-system and react-hook-form types
export type TimeControlProps<TFieldValues extends FieldValues> =
  TimeInputProps &
    FormControlBase<TFieldValues> & {
      wrapperProps?: ComponentPropsWithoutRef<'div'>;
      hideFieldError?: boolean;
      hideErrorMessage?: boolean;
      shouldShow?: boolean | ((watch: UseFormWatch<TFieldValues>) => boolean);
      registerOptions?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
      attributes?: ComponentPropsWithoutRef<'input'>;
    };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface TimeControlComponent extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: TimeControlProps<TFieldValues> & {
      ref?: Ref<HTMLInputElement>;
    },
  ): ReactElement | null;
}

export const TimeControl = forwardRef(function TimeControl<
  TFieldValues extends FieldValues = FieldValues,
>(
  {
    name,
    label,
    description,
    registerOptions,
    id,
    wrapperProps,
    hideFieldError = false,
    hideErrorMessage = false,
    shouldShow = true,
    ...attributes
  }: TimeControlProps<TFieldValues>,
  ref: Ref<HTMLInputElement>,
) {
  const { control, watch } = useFormContext<TFieldValues>();
  const isVisible =
    typeof shouldShow === 'function' ? shouldShow(watch) : shouldShow;

  if (!isVisible) {
    return null;
  }

  const identifier = id || name;
  const descriptionId = `${identifier}-description`;
  const errorId = `${identifier}-error`;

  const required = registerOptions?.required;
  const optional = !required;

  return (
    <Controller
      name={name}
      control={control}
      rules={registerOptions}
      render={({ field, fieldState }) => {
        const errorMessage = fieldState.error?.message;
        const hasError = !!fieldState.error;

        return (
          <Field invalid={!hideFieldError && hasError} {...wrapperProps}>
            {label && (
              <Label htmlFor={identifier} optional={optional}>
                {label}
              </Label>
            )}
            {!!description &&
              (typeof description === 'string' ? (
                <Paragraph id={descriptionId} size="small">
                  {description}
                </Paragraph>
              ) : (
                <div id={descriptionId}>{description}</div>
              ))}
            {!hideErrorMessage && hasError && (
              <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>
            )}

            <TimeInput
              id={identifier}
              invalid={hasError}
              aria-describedby={clsx(
                { [descriptionId]: !!descriptionId },
                { [errorId]: !hideErrorMessage && hasError },
              )}
              // Controlled props from RHF
              {...field}
              {...attributes}
              ref={ref}
            />
          </Field>
        );
      }}
    />
  );
}) as TimeControlComponent;

TimeControl.displayName = 'TimeControl';
