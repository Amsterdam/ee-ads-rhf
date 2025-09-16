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
  Select,
  type SelectProps,
} from '@amsterdam/design-system-react';
import {
  Controller,
  useFormContext,
  type FieldValues,
  type RegisterOptions,
} from 'react-hook-form';
import clsx from 'clsx';
import { FormControlBase, SelectGroup, SelectOption } from '../types';

// Merge design-system and react-hook-form types
export type SelectControlProps<TFieldValues extends FieldValues> =
  SelectProps &
    FormControlBase<TFieldValues> &
    // This component is wrapped in a `<Field>` component, which returns a `div`
    ComponentPropsWithoutRef<'div'> & {
      options: { group: string; options: { label: string; value: string }[] }[] | { label: string; value: string; }[] | string[];
      wrapperProps?: ComponentPropsWithoutRef<'div'>;
    };

interface SelectControlComponent extends ForwardRefExoticComponent<any> {
  <TFieldValues extends FieldValues = FieldValues>(
    props: SelectControlProps<TFieldValues> & {
      ref?: Ref<HTMLSelectElement>;
    },
  ): ReactElement | null;
}

const SelectControl = forwardRef(function SelectControl<
  TFieldValues extends FieldValues = FieldValues,
>(
  {
    name,
    label,
    description,
    options,
    registerOptions,
    id,
    testId,
    wrapperProps,
    ...attributes
  }: SelectControlProps<TFieldValues>,
  ref: Ref<HTMLSelectElement>,
) {
  const { control } = useFormContext();

  const identifier = testId || id || name;
  const descriptionId = `${identifier}-description`;
  const errorId = `${identifier}-error`;

  const required = registerOptions?.required;
  const optional = !required;

  function renderStringOptions(options: string[], identifier: string) {
    return options.map((option, index) => (
      <Select.Option value={option} key={`${identifier}-${index}`}>
        {option}
      </Select.Option>
    ))
  }

  function renderObjectOptions(options: SelectOption[], identifier: string) {
    return options.map((opt, index) => (
      <Select.Option value={opt.value} key={`${identifier}-${index}`}>
        {opt.label}
      </Select.Option>
    ))
  }

  function renderGroupedOptions(groups: SelectGroup[], identifier: string) {
    return groups.map((group, gIndex) => (
      <Select.Group label={group.group} key={`${identifier}-g${gIndex}`}>
        {group.options.map((opt, oIndex) => (
          <Select.Option
            value={opt.value}
            key={`${identifier}-g${gIndex}-o${oIndex}`}
          >
            {opt.label}
          </Select.Option>
        ))}
      </Select.Group>
    ))
  }

  function renderOptions(
    options: string[] | SelectOption[] | SelectGroup[],
    identifier: string
  ) {
    if (options.length === 0) return null

    if (typeof options[0] === 'string') {
      return renderStringOptions(options as string[], identifier)
    }

    if ('group' in (options[0] as any)) {
      return renderGroupedOptions(options as SelectGroup[], identifier)
    }

    return renderObjectOptions(options as SelectOption[], identifier)
  }

  const children = renderOptions(options, identifier)

  return (
    <Controller
      name={name}
      control={control}
      rules={registerOptions as RegisterOptions}
      render={({ field, fieldState }) => {
        const errorMessage = fieldState.error?.message;
        const hasError = !!fieldState.error;

        return (
          <Field className="ams-mb-m" invalid={hasError} {...wrapperProps}>
            <Label htmlFor={identifier}>{label}</Label>
            {!!description && (
              typeof description === 'string' ? (
                <Paragraph id={`${identifier}-description`} size="small">
                  {description}
                </Paragraph>
              ) : (
                description
              )
            )}
            {hasError && <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>}

            <Select
              aria-describedby={clsx(
                { [`${identifier}-description`]: description },
                { [`${identifier}-error`]: hasError }
              )}
              id={identifier}
              invalid={hasError}
              {...field}
              {...attributes}
              data-testid={identifier}
              ref={ref}
            >
              {children}
            </Select>
          </Field>
        );
      }}
    />
  );
}) as SelectControlComponent;

export default SelectControl;
