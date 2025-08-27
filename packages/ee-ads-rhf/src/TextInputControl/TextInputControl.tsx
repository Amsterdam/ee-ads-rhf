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
import {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
  ReactElement,
  Ref,
} from 'react';

// Merge design-system and react-hook-form types
export type TextInputControlProps<TFieldValues extends FieldValues> =
  TextInputProps &
    FormControlBase<TFieldValues> &
    // This component is wrapped in a `<Field>` component, which returns a `div`
    ComponentPropsWithoutRef<'div'>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface TextInputControlComponent extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: TextInputControlProps<TFieldValues> & {
      ref?: Ref<HTMLDivElement>;
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
    ...attributes
  }: TextInputControlProps<TFieldValues>,
  ref: Ref<HTMLDivElement>,
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
            ref={ref}
            data-testid={`${identifier}-text-input-wrapper`}
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
              {...register(name, registerOptions as RegisterOptions)}
              {...attributes}
              aria-describedby={clsx(
                { [descriptionId]: !!descriptionId },
                { [errorId]: hasError },
              )}
              id={identifier}
              invalid={hasError}
              // Avoid the `required` prop when using ReactHookForm otherwise
              // the user is presented :invalid form fields on load before
              // touching the fields and gets inconsistent validation UX
              // required={!!required}
            />
          </Field>
        );
      }}
    </FormControl>
  );
}) as TextInputControlComponent;

TextInputControl.displayName = 'TextInputControl';

export default TextInputControl;
