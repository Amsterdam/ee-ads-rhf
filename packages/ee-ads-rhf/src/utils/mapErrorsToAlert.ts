import { ErrorLink } from '@amsterdam/design-system-react';
import { FieldErrors, FieldValues } from 'react-hook-form';

const mapErrorsToAlert = (errors: FieldErrors<FieldValues>) => {
  return Object.entries(errors).map(([key, error]) => {
    const target = document.querySelector(`[name="${key}"]`);

    return {
      id: `#${target?.id}`,
      label: error?.message,
    };
  }) as ErrorLink[];
};

export default mapErrorsToAlert;
