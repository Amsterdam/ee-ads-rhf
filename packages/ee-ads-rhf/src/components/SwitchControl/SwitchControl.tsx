import {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
  ReactElement,
  Ref,
} from 'react';
import {
  Controller,
  Path,
  useFormContext,
  UseFormWatch,
  type FieldValues,
  type RegisterOptions,
} from 'react-hook-form';
import {
  Field,
  Paragraph,
  type CheckboxProps,
  ErrorMessage,
  Label,
  Row,
  Switch,
} from '@amsterdam/design-system-react';
import clsx from 'clsx';
import { FormControlBase } from '../../types';

// Merge design-system and react-hook-form types
export type SwitchControlProps<TFieldValues extends FieldValues> =
  CheckboxProps &
    FormControlBase<TFieldValues> & {
      wrapperProps?: ComponentPropsWithoutRef<'div'>;
      hideFieldError?: boolean;
      hideErrorMessage?: boolean;
      shouldShow?: boolean | ((watch: UseFormWatch<TFieldValues>) => boolean);
      registerOptions?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
      attributes?: ComponentPropsWithoutRef<'div'>;
    };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface SwitchControlComponent extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: SwitchControlProps<TFieldValues> & {
      ref?: Ref<HTMLInputElement>;
    },
  ): ReactElement | null;
}

export const SwitchControl = forwardRef(function SwitchControl<
  TFieldValues extends FieldValues = FieldValues,
>(
  {
    name,
    label,
    description,
    registerOptions,
    id,
    disabled,
    wrapperProps,
    hideFieldError = false,
    hideErrorMessage = false,
    shouldShow = true,
    ...attributes
  }: SwitchControlProps<TFieldValues>,
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

  return (
    <Controller
      name={name}
      control={control}
      rules={registerOptions}
      render={({ field, fieldState }) => {
        const errorMessage = fieldState.error?.message;
        const hasError = !!fieldState.error;

        return (
          <Field invalid={!hideFieldError && hasError} {...wrapperProps}>
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

            <Row>
              <Label htmlFor={identifier}>{label}</Label>
              <Switch
                id={identifier}
                disabled={disabled}
                aria-describedby={clsx(
                  { [descriptionId]: !!description && !!descriptionId },
                  { [errorId]: !hideErrorMessage && hasError },
                )}
                checked={!!field.value}
                // Controlled props from RHF
                {...field}
                {...attributes}
                ref={ref}
              />
            </Row>
          </Field>
        );
      }}
    />
  );
}) as SwitchControlComponent;

SwitchControl.displayName = 'SwitchControl';
