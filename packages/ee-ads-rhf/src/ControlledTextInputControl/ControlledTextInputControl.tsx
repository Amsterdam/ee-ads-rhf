// This file is an example of a RHF 'controlled' component using the TextInputControl
// Controlled: RHF hands you a field object (value, onChange, etc.) and you feed those into your component.
// Uncontrolled: RHF sets up the input to manage its own state (via the DOM) and RHF just listens to changes.
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
  TextInput,
  type TextInputProps,
} from '@amsterdam/design-system-react';
import {
  Controller,
  useFormContext,
  type FieldValues,
  type RegisterOptions,
} from 'react-hook-form';
import clsx from 'clsx';
import { FormControlBase } from '../types';

export type ControlledTextInputControlProps<TFieldValues extends FieldValues> =
  TextInputProps &
    FormControlBase<TFieldValues> & {
      wrapperProps?: ComponentPropsWithoutRef<'div'>;
    };

interface ControlledTextInputControlComponent
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: ControlledTextInputControlProps<TFieldValues> & {
      ref?: Ref<HTMLInputElement>;
    },
  ): ReactElement | null;
}

const ControlledTextInputControl = forwardRef(
  function ControlledTextInputControl<
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
    }: ControlledTextInputControlProps<TFieldValues>,
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
          const hasError = !!errorMessage;

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

              <TextInput
                id={identifier}
                data-testid={identifier}
                invalid={hasError}
                aria-describedby={clsx(
                  { [descriptionId]: !!descriptionId },
                  { [errorId]: hasError },
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
  },
) as ControlledTextInputControlComponent;

ControlledTextInputControl.displayName = 'ControlledTextInputControl';

export default ControlledTextInputControl;
