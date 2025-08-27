import {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
  ReactElement,
  Ref,
} from 'react';
import { FieldValues, RegisterOptions } from 'react-hook-form';
import {
  ErrorMessage,
  Field,
  Label,
  Paragraph,
  TextArea,
  TextAreaProps,
} from '@amsterdam/design-system-react';
import clsx from 'clsx';
import FormControl from '../FormControl/FormControl';
import { FormControlBase } from '../types';

export type TextAreaControlProps<
  TFieldValues extends FieldValues = FieldValues,
> = TextAreaProps &
  FormControlBase<TFieldValues> & {
    wrapperProps?: ComponentPropsWithoutRef<'div'>;
  };

// This interface allows us to use a generic type argum/ent in parent components to specify the shape of the form value
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface TextAreaControlComponent extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: TextAreaControlProps<TFieldValues> & {
      ref?: Ref<HTMLTextAreaElement>;
    },
  ): ReactElement | null;
}

const TextAreaControl = forwardRef(function TextAreaControl<
  TFieldValues extends FieldValues = FieldValues,
>(
  {
    name,
    label,
    description,
    registerOptions,
    id,
    testId,
    cols,
    wrapperProps,
    ...attributes
  }: TextAreaControlProps<TFieldValues>,
  ref: Ref<HTMLTextAreaElement>,
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
            data-testid={`${identifier}-textarea-input-wrapper`}
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
            <TextArea
              {...register(name, registerOptions as RegisterOptions)}
              {...attributes}
              aria-describedby={clsx(
                { [descriptionId]: !!descriptionId },
                { [errorId]: hasError },
              )}
              id={identifier}
              data-testid={identifier}
              cols={cols}
              invalid={hasError}
              ref={ref}
            />
          </Field>
        );
      }}
    </FormControl>
  );
}) as TextAreaControlComponent;

TextAreaControl.displayName = 'TextAreaControl';

export default TextAreaControl;
