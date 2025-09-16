import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormProvider from '../FormProvider/FormProvider';
import SwitchControl from './SwitchControl';
import { SubmitHandler } from 'react-hook-form';

type FormValues = {
  notify: boolean;
};

describe('SwitchControl', () => {
  it('renders with label and input', () => {
    render(
      <FormProvider defaultValues={{ notify: false }} onSubmit={vi.fn()}>
        <SwitchControl<FormValues> label="Test Label" name="notify" />
      </FormProvider>,
    );

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('handles user input and submits updated value', async () => {
    const onSubmitMock: SubmitHandler<FormValues> = vi.fn();
    render(
      <FormProvider defaultValues={{ notify: false }} onSubmit={onSubmitMock}>
        <SwitchControl<FormValues>
          label="Test Label"
          name="notify"
          testId="switch-input"
        />
        <button type="submit">Submit</button>
      </FormProvider>,
    );

    const input = screen.getByTestId('switch-input') as HTMLInputElement;
    expect(input.checked).toBe(false);

    fireEvent.click(input);
    expect(input.checked).toBe(true);

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        { notify: true },
        expect.anything(),
      );
    });
  });

  // it('renders with initial value', () => {
  // });

  // it('renders description', () => {
  // });

  // it('shows description id in aria-describedby', () => {
  // });

  // it('shows error message', async () => {
  // });
});
