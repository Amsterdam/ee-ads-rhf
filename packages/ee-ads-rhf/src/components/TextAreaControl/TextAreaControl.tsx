import {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
  ReactElement,
  Ref,
} from 'react';
import {
  Controller,
  type FieldValues,
  type RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import {
  ErrorMessage,
  Field,
  Label,
  Paragraph,
  TextArea,
  TextAreaProps,
} from '@amsterdam/design-system-react';
import clsx from 'clsx';
import { FormControlBase } from '../../types';

export type TextAreaControlProps<TFieldValues extends FieldValues> =
  TextAreaProps &
    FormControlBase<TFieldValues> & {
      wrapperProps?: ComponentPropsWithoutRef<'div'>;
      hideFieldError?: boolean;
      hideErrorMessage?: boolean;
    };

// This interface allows us to use a generic type argum/ent in parent components
// to specify the shape of the form value
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface TextAreaControlComponent extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: TextAreaControlProps<TFieldValues> & {
      ref?: Ref<HTMLTextAreaElement>;
    },
  ): ReactElement | null;
}

export const TextAreaControl = forwardRef(function TextAreaControl<
  TFieldValues extends FieldValues = FieldValues,
>(
  {
    name,
    label,
    description,
    registerOptions,
    id,
    cols,
    rows,
    wrapperProps,
    hideFieldError = false,
    hideErrorMessage = false,
    ...attributes
  }: TextAreaControlProps<TFieldValues>,
  ref: Ref<HTMLTextAreaElement>,
) {
  const { control } = useFormContext();

  const identifier = id || name;
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

            <TextArea
              id={identifier}
              cols={cols}
              rows={rows}
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
}) as TextAreaControlComponent;

TextAreaControl.displayName = 'TextAreaControl';
