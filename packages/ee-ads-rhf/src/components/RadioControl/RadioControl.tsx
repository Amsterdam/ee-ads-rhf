import {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
  ReactElement,
  Ref,
} from 'react';
import {
  ErrorMessage,
  FieldSet,
  Paragraph,
  Radio,
  RadioProps,
} from '@amsterdam/design-system-react';
import {
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
  UseFormWatch,
} from 'react-hook-form';
import clsx from 'clsx';
import { FormControlBase } from '../../types';

export type RadioControlProps<TFieldValues extends FieldValues = FieldValues> =
  RadioProps &
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
interface RadioControlComponent extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: RadioControlProps<TFieldValues> & {
      ref?: Ref<HTMLInputElement>;
    },
  ): ReactElement | null;
}

export const RadioControl = forwardRef(function RadioControl<
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
  }: RadioControlProps<TFieldValues>,
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
        const hasError = !!fieldState.error;

        const children = options.map((option, index) => {
          const { label, value } =
            typeof option === 'string'
              ? { label: option, value: option }
              : option;

          return (
            <Radio
              key={`${identifier}-${index}`}
              id={`${identifier}-${index}`}
              name={field.name}
              value={value}
              checked={field.value === value}
              invalid={!hideFieldError && hasError}
              onChange={() => field.onChange(value)}
              onBlur={field.onBlur}
              ref={ref}
              {...attributes}
            >
              {label}
            </Radio>
          );
        });

        return (
          <FieldSet
            aria-describedby={clsx(
              { [descriptionId]: !!description && !!descriptionId },
              { [errorId]: !hideErrorMessage && hasError },
            )}
            legend={label ?? ''}
            role="radiogroup"
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
}) as RadioControlComponent;

RadioControl.displayName = 'RadioControl';
