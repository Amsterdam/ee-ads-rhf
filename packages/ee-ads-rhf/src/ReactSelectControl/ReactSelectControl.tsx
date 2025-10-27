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
  Label,
  Paragraph,
  ErrorMessage,
} from '@amsterdam/design-system-react';
import InputAutoSelect from './components/InputAutoSelect/InputAutoSelect';
import { ReactSelectValue } from './types';
import { FormControlBase, SelectOption } from '../types';
import { SelectInstance } from 'react-select';

export type ReactSelectControlProps<TFieldValues extends FieldValues> =
  FormControlBase<TFieldValues> &
    ComponentPropsWithoutRef<'div'> & {
      label: string;
      description?: React.ReactNode;
      options?: SelectOption[];
      isMulti?: boolean;
      required?: boolean;
      wrapperProps?: ComponentPropsWithoutRef<'div'>;
      inputProps?: Omit<
        ComponentPropsWithoutRef<typeof InputAutoSelect>,
        'value' | 'onChange' | 'options'
      >;
    };

interface ReactSelectControlComponent
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: ReactSelectControlProps<TFieldValues> & {
      ref?: Ref<HTMLInputElement>;
    },
  ): ReactElement | null;
}

export const ReactSelectControl = forwardRef(function ReactSelectControl<
  TFieldValues extends FieldValues = FieldValues,
>(
  {
    name,
    label,
    description,
    options = [],
    registerOptions,
    id,
    testId,
    isMulti = false,
    required,
    wrapperProps,
    inputProps,
  }: ReactSelectControlProps<TFieldValues>,
  ref: Ref<SelectInstance<SelectOption> | null>,
) {
  const { control } = useFormContext();

  const identifier = testId || id || name;
  const descriptionId = `${identifier}-description`;
  const errorId = `${identifier}-error`;

  const optional = !registerOptions?.required && !required;

  return (
    <Controller
      name={name}
      control={control}
      rules={registerOptions as RegisterOptions}
      render={({ field, fieldState }) => {
        const { onChange, value } = field;
        const hasError = !!fieldState.error;
        const errorMessage = fieldState.error?.message;

        function handleChange(newValue: ReactSelectValue) {
          onChange(newValue);
        }

        return (
          <Field invalid={hasError} {...wrapperProps}>
            <Label htmlFor={identifier} optional={optional}>
              {label}
            </Label>

            {!!description &&
              (typeof description === 'string' ? (
                <Paragraph id={descriptionId} size="small">
                  {description}
                </Paragraph>
              ) : (
                <div id={descriptionId}>{description}</div>
              ))}

            {hasError && (
              <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>
            )}

            <InputAutoSelect
              id={identifier}
              ref={ref}
              options={options}
              isMulti={isMulti}
              required={required}
              value={value}
              onChange={handleChange}
              aria-describedby={[
                description ? descriptionId : '',
                hasError ? errorId : '',
              ]
                .filter(Boolean)
                .join(' ')}
              data-testid={identifier}
              {...inputProps}
            />
          </Field>
        );
      }}
    />
  );
}) as ReactSelectControlComponent;

ReactSelectControl.displayName = 'ReactSelectControl';
