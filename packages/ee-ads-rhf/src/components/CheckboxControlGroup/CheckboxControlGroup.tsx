import {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
  ReactElement,
  Ref,
} from 'react';
import {
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
  UseFormWatch,
} from 'react-hook-form';
import {
  Checkbox,
  CheckboxProps,
  ErrorMessage,
  FieldSet,
  Paragraph,
} from '@amsterdam/design-system-react';
import clsx from 'clsx';
import { FormControlBase } from '../../types';

export type CheckboxControlGroupProps<
  TFieldValues extends FieldValues = FieldValues,
> = CheckboxProps &
  FormControlBase<TFieldValues> & {
    options: { label: string; value: string }[] | string[];
    wrapperProps?: ComponentPropsWithoutRef<'fieldset'>;
    hideFieldError?: boolean;
    hideErrorMessage?: boolean;
    shouldShow?: boolean | ((watch: UseFormWatch<TFieldValues>) => boolean);
    registerOptions?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
    attributes?: ComponentPropsWithoutRef<'input'>;
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface CheckboxControlGroupComponent extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: CheckboxControlGroupProps<TFieldValues> & {
      ref?: Ref<HTMLInputElement>;
    },
  ): ReactElement | null;
}

export const CheckboxControlGroup = forwardRef(function CheckboxControlGroup<
  TFieldValues extends FieldValues = FieldValues,
>(
  {
    name,
    label,
    description,
    options,
    registerOptions,
    id,
    wrapperProps,
    hideFieldError = false,
    hideErrorMessage = false,
    shouldShow = true,
    ...attributes
  }: CheckboxControlGroupProps<TFieldValues>,
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
        const value: string[] = field.value ?? [];
        const errorMessage = fieldState.error?.message;
        const hasError = !!fieldState.error;

        const children = options.map((option, index) => {
          const { label, value: optionValue } =
            typeof option === 'string'
              ? { label: option, value: option }
              : option;

          const checked = value.includes(optionValue);

          const handleChange = (checked: boolean) => {
            if (checked) {
              field.onChange([...value, optionValue]);
            } else {
              field.onChange(value.filter((v) => v !== optionValue));
            }
          };

          return (
            <Checkbox
              key={`${identifier}-${index}`}
              id={`${identifier}-${index}`}
              name={name}
              checked={checked}
              invalid={!hideFieldError && hasError}
              onChange={(e) => handleChange(e.target.checked)}
              onBlur={field.onBlur}
              ref={ref}
              {...attributes}
            >
              {label}
            </Checkbox>
          );
        });

        return (
          <FieldSet
            aria-describedby={clsx(
              { [descriptionId]: !!description && !!descriptionId },
              { [errorId]: !hideErrorMessage && hasError },
            )}
            legend={label ?? ''}
            optional={optional}
            invalid={!hideFieldError && hasError}
            {...wrapperProps}
          >
            {!!description &&
              (typeof description === 'string' ? (
                <Paragraph id={descriptionId} size="small" className="ams-mb-s">
                  {description}
                </Paragraph>
              ) : (
                description
              ))}

            {!hideErrorMessage && hasError && (
              <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>
            )}

            {children}
          </FieldSet>
        );
      }}
    />
  );
}) as CheckboxControlGroupComponent;

CheckboxControlGroup.displayName = 'CheckboxControlGroup';
