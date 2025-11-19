import { MultiValue, SingleValue } from 'react-select';
import { SelectOption } from '../../types';

export type SelectValue<IsMulti extends boolean> = IsMulti extends true
  ? MultiValue<SelectOption>
  : SingleValue<SelectOption>;

export type ReactSelectValue =
  | SingleValue<SelectOption>
  | MultiValue<SelectOption>;
