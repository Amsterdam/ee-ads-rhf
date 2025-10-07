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

  it('renders with initial value', () => {
    render(
      <FormProvider defaultValues={{ notify: true }} onSubmit={vi.fn()}>
        <SwitchControl<FormValues>
          label="Test Label"
          name="notify"
          testId="switch-input"
        />
      </FormProvider>,
    );

    const input = screen.getByTestId('switch-input') as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it('renders description', () => {
    render(
      <FormProvider defaultValues={{ notify: false }} onSubmit={vi.fn()}>
        <SwitchControl<FormValues>
          label="Test Label"
          name="notify"
          description={
            <span data-testid="custom-description">Custom description</span>
          }
          testId="switch-input"
        />
      </FormProvider>,
    );

    expect(screen.getByTestId('custom-description')).toBeInTheDocument();
  });

  it('shows description id in aria-describedby', () => {
    const description = 'This is a description';
    render(
      <FormProvider defaultValues={{ notify: false }} onSubmit={vi.fn()}>
        <SwitchControl<FormValues>
          label="Test Label"
          name="notify"
          description={description}
          testId="switch-input"
        />
      </FormProvider>,
    );

    const label = screen.getByLabelText('Test Label');
    expect(label).toHaveAttribute(
      'aria-describedby',
      'switch-input-description',
    );
    expect(screen.getByText(description)).toHaveAttribute(
      'id',
      'switch-input-description',
    );
  });

  it('shows error message when invalid', async () => {
    const Component = () => {
      const onSubmitMock = vi.fn();

      return (
        <FormProvider defaultValues={{ notify: false }} onSubmit={onSubmitMock}>
          <SwitchControl<FormValues>
            label="Test Label"
            name="notify"
            registerOptions={{
              required: 'This field is required',
            }}
            testId="switch-input"
          />
          <button type="submit">Submit</button>
        </FormProvider>
      );
    };

    render(<Component />);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(await screen.findByText(/This field is required/i)).toBeVisible();

    const checkbox = screen.getByTestId('switch-input');
    expect(checkbox.getAttribute('aria-describedby')).toMatch(
      /switch-input-error/,
    );
  });
});
