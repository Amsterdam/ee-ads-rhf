import {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
  ReactElement,
  Ref,
} from 'react';
import {
  Controller,
  useFormContext,
  type FieldValues,
  type RegisterOptions,
} from 'react-hook-form';
import {
  Field,
  Checkbox,
  Paragraph,
  type CheckboxProps,
  ErrorMessage,
} from '@amsterdam/design-system-react';
import clsx from 'clsx';
import { FormControlBase } from '../types';

// Merge design-system and react-hook-form types
export type CheckboxControlProps<TFieldValues extends FieldValues> =
  CheckboxProps &
    FormControlBase<TFieldValues> & {
      wrapperProps?: ComponentPropsWithoutRef<'div'>;
    };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface CheckboxControlComponent extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: CheckboxControlProps<TFieldValues> & {
      ref?: Ref<HTMLInputElement>;
    },
  ): ReactElement | null;
}

const CheckboxControl = forwardRef(function CheckboxControl<
  TFieldValues extends FieldValues = FieldValues,
>(
  {
    name,
    label,
    description,
    registerOptions,
    id,
    disabled,
    testId,
    indeterminate,
    icon,
    wrapperProps,
    ...attributes
  }: CheckboxControlProps<TFieldValues>,
  ref: Ref<HTMLInputElement>,
) {
  const { control } = useFormContext();

  const identifier = testId || id || name;
  const descriptionId = `${identifier}-description`;
  const errorId = `${identifier}-error`;

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
            data-testid={`${identifier}-checkbox-wrapper`}
            invalid={hasError}
            {...wrapperProps}
          >
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

            <Checkbox
              id={identifier}
              invalid={hasError}
              disabled={disabled}
              indeterminate={indeterminate}
              icon={icon}
              aria-describedby={clsx(
                { [descriptionId]: !!descriptionId },
                { [errorId]: hasError },
              )}
              checked={field.value}
              // Controlled props from RHF
              {...field}
              {...attributes}
              data-testid={identifier}
              ref={ref}
            >
              {label && label}
            </Checkbox>
          </Field>
        );
      }}
    />
  );
}) as CheckboxControlComponent;

CheckboxControl.displayName = 'CheckboxControl';

export default CheckboxControl;
