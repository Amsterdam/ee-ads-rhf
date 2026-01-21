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
  PasswordInput,
  type PasswordInputProps,
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

export type PasswordInputControlProps<TFieldValues extends FieldValues> =
  PasswordInputProps &
    FormControlBase<TFieldValues> & {
      wrapperProps?: ComponentPropsWithoutRef<'div'>;
      hideFieldError?: boolean;
      hideErrorMessage?: boolean;
      shouldShow?: boolean | ((watch: UseFormWatch<TFieldValues>) => boolean);
      registerOptions?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
      attributes?: ComponentPropsWithoutRef<'input'>;
    };

interface PasswordInputControlComponent
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: PasswordInputControlProps<TFieldValues> & {
      ref?: Ref<HTMLInputElement>;
    },
  ): ReactElement | null;
}

export const PasswordInputControl = forwardRef(function PasswordInputControl<
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
  }: PasswordInputControlProps<TFieldValues>,
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
        const hasError = !!errorMessage;

        return (
          <Field invalid={!hideFieldError && hasError} {...wrapperProps}>
            {label && (
              <Label htmlFor={identifier} optional={optional}>
                {label}
              </Label>
            )}
            {description && (
              <Paragraph size="small" id={descriptionId}>
                {description}
              </Paragraph>
            )}
            {!hideErrorMessage && hasError && (
              <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>
            )}

            <PasswordInput
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
}) as PasswordInputControlComponent;

PasswordInputControl.displayName = 'PasswordInputControl';
