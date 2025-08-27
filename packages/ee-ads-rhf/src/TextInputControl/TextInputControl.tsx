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
import type { FieldValues, RegisterOptions } from 'react-hook-form';
import clsx from 'clsx';
import FormControl from '../FormControl/FormControl';
import { FormControlBase } from '../types';

// Merge design-system and react-hook-form types
export type TextInputControlProps<TFieldValues extends FieldValues> =
  TextInputProps &
    FormControlBase<TFieldValues> & {
      wrapperProps?: ComponentPropsWithoutRef<'div'>;
    };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface TextInputControlComponent extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: TextInputControlProps<TFieldValues> & {
      ref?: Ref<HTMLInputElement>;
    },
  ): ReactElement | null;
}

const TextInputControl = forwardRef(function TextInputControl<
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
  }: TextInputControlProps<TFieldValues>,
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

            {/* TODO spread values last or first - and can `register` interfere with the invalid/disabled props? */}
            <TextInput
              {...register(name, registerOptions as RegisterOptions)}
              {...attributes}
              aria-describedby={clsx(
                { [descriptionId]: !!descriptionId },
                { [errorId]: hasError },
              )}
              id={identifier}
              invalid={hasError}
              ref={ref}
            />
          </Field>
        );
      }}
    </FormControl>
  );
}) as TextInputControlComponent;

TextInputControl.displayName = 'TextInputControl';

export default TextInputControl;
