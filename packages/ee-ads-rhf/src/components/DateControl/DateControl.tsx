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
  Path,
  useFormContext,
  UseFormWatch,
  type FieldValues,
  type RegisterOptions,
} from 'react-hook-form';
import clsx from 'clsx';
import { FormControlBase } from '../../types';

// Merge design-system and react-hook-form types
export type DateControlProps<TFieldValues extends FieldValues> =
  DateInputProps &
    FormControlBase<TFieldValues> &
    // This component is wrapped in a `<Field>` component, which returns a `div`
    ComponentPropsWithoutRef<'div'> & {
      wrapperProps?: ComponentPropsWithoutRef<'div'>;
      hideFieldError?: boolean;
      hideErrorMessage?: boolean;
      shouldShow?: boolean | ((watch: UseFormWatch<TFieldValues>) => boolean);
      registerOptions?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
      attributes?: ComponentPropsWithoutRef<'input'>;
    };

// This interface allows us to use a generic type argument in parent components
// to specify the shape of the form value
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface DateControlComponent extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: DateControlProps<TFieldValues> & {
      ref?: Ref<HTMLInputElement>;
    },
  ): ReactElement | null;
}

export const DateControl = forwardRef(function DateControl<
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
  }: DateControlProps<TFieldValues>,
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

            <DateInput
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
}) as DateControlComponent;
