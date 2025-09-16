import { ReactElement } from 'react';
import { FieldValues, Path, FieldPath, RegisterOptions } from 'react-hook-form';

export type FormControlBase<TFieldValues extends FieldValues = FieldValues> = {
  name: Path<TFieldValues>;
  label?: string;
  description?: string | ReactElement;
  registerOptions?: RegisterOptions<TFieldValues, FieldPath<TFieldValues>>;
  testId?: string;
  rules?: Omit<
    RegisterOptions<TFieldValues, FieldPath<TFieldValues>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
};

export type SelectOption = { label: string; value: string };
export type SelectGroup = { group: string; options: SelectOption[] };
