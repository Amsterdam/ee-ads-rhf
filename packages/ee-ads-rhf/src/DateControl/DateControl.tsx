import {
  Field,
  Label,
  Paragraph,
  DateInput,
  type DateInputProps,
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
export type DateControlProps<TFieldValues extends FieldValues> =
  DateInputProps &
    FormControlBase<TFieldValues> &
    // This component is wrapped in a `<Field>` component, which returns a `div`
    ComponentPropsWithoutRef<'div'>;

// This interface allows us to use a generic type argum/ent in parent components to specify the shape of the form value
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface DateControlComponent extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: DateControlProps<TFieldValues> & {
      ref?: Ref<HTMLDivElement>;
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
    ...attributes
  }: DateControlProps<TFieldValues>,
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
        const hasError = !!formState.errors[name];

        return (
          <Field data-testid={`${identifier}-text-input-wrapper`} ref={ref}>
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
            <DateInput
              aria-describedby={clsx(
                { [descriptionId]: !!descriptionId },
                { [errorId]: hasError },
              )}
              {...attributes}
              {...register(name, registerOptions as RegisterOptions)}
              id={identifier}
              data-testid={identifier}
              invalid={hasError}
            />
          </Field>
        );
      }}
    </FormControl>
  );
}) as DateControlComponent;

export default DateControl;
