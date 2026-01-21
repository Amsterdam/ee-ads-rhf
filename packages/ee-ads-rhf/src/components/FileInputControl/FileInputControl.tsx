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
  FileInput,
  type FileInputProps,
} from '@amsterdam/design-system-react';
import {
  Controller,
  Path,
  useFormContext,
  UseFormWatch,
  type FieldValues,
  type RegisterOptions,
} from 'react-hook-form';
import clsx from 'clsx';
import { FormControlBase } from '../../types';

export type FileInputControlProps<TFieldValues extends FieldValues> =
  FileInputProps &
    FormControlBase<TFieldValues> & {
      wrapperProps?: ComponentPropsWithoutRef<'div'>;
      hideFieldError?: boolean;
      hideErrorMessage?: boolean;
      shouldShow?: boolean | ((watch: UseFormWatch<TFieldValues>) => boolean);
      registerOptions?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
      attributes?: ComponentPropsWithoutRef<'input'>;
    };

interface FileInputControlComponent
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: FileInputControlProps<TFieldValues> & {
      ref?: Ref<HTMLInputElement>;
    },
  ): ReactElement | null;
}

export const FileInputControl = forwardRef(function FileInputControl<
  TFieldValues extends FieldValues = FieldValues,
>(
  {
    name,
    label,
    description,
    registerOptions,
    id,
    wrapperProps,
    hideFieldError = false,
    hideErrorMessage = false,
    shouldShow = true,
    ...attributes
  }: FileInputControlProps<TFieldValues>,
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
        const hasError = !!errorMessage;

        return (
          <Field invalid={!hideFieldError && hasError} {...wrapperProps}>
            {label && (
              <Label htmlFor={identifier} optional={optional}>
                {label}
              </Label>
            )}
            {description && (
              <Paragraph size="small" id={descriptionId}>
                {description}
              </Paragraph>
            )}
            {!hideErrorMessage && hasError && (
              <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>
            )}

            <FileInput
              id={identifier}
              aria-describedby={clsx(
                { [descriptionId]: !!descriptionId },
                { [errorId]: !hideErrorMessage && hasError },
              )}
              // Limited controlled props from RHF
              onChange={(e) => {
                const files = e.target.files;
                field.onChange(files && files.length > 0 ? files : null);
              }}
              name={field.name}
              {...attributes}
              ref={ref}
            />
          </Field>
        );
      }}
    />
  );
}) as FileInputControlComponent;

FileInputControl.displayName = 'FileInputControl';
