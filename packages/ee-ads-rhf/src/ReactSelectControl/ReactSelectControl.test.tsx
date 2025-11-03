import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { SubmitHandler } from 'react-hook-form';
import { FormProvider } from '../FormProvider/FormProvider';
import { ReactSelectControl } from './ReactSelectControl';

// A simple type for form values
type FormValues = {
  color: { label: string; value: string } | null;
};

describe('ReactSelectControl', () => {
  const options = [
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
  ];

  it('renders label and options', () => {
    render(
      <FormProvider defaultValues={{ color: null }} onSubmit={vi.fn()}>
        <ReactSelectControl<FormValues>
          name="color"
          label="Favorite Color"
          options={options}
        />
      </FormProvider>,
    );

    // The label should render
    expect(screen.getByText('Favorite Color')).toBeInTheDocument();

    // React Select renders a combobox (input)
    const combo = screen.getByRole('combobox');
    expect(combo).toBeInTheDocument();
    expect(combo).toHaveAttribute('id', 'color');
  });

  it('renders a description when provided', () => {
    render(
      <FormProvider defaultValues={{ color: null }} onSubmit={vi.fn()}>
        <ReactSelectControl<FormValues>
          name="color"
          label="Favorite Color"
          description="Pick your favorite"
          options={options}
        />
      </FormProvider>,
    );

    expect(screen.getByText('Pick your favorite')).toBeInTheDocument();
    const combo = screen.getByRole('combobox');
    expect(combo).toHaveAttribute(
      'aria-describedby',
      expect.stringContaining('color-description'),
);
  });

  it('shows error message when validation fails', async () => {
    render(
      <FormProvider defaultValues={{ color: null }} onSubmit={vi.fn()}>
        <ReactSelectControl<FormValues>
          name="color"
          label="Favorite Color"
          options={options}
          registerOptions={{ required: 'Color is required' }}
        />
        <button type="submit">Submit</button>
      </FormProvider>,
    );
    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Should show our error message and attach aria-invalid
    expect(await screen.findByText('Color is required')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveAttribute(
      'aria-invalid',
      'true',
    );
  });

  it('submits selected value via react-hook-form', async () => {
    const onSubmitMock: SubmitHandler<FormValues> = vi.fn();

    render(
      <FormProvider defaultValues={{ color: null }} onSubmit={onSubmitMock}>
        <ReactSelectControl<FormValues>
          name="color"
          label="Favorite Color"
          options={options}
        />
        <button type="submit">Submit</button>
      </FormProvider>,
    );

    // open the menu
    const combo = screen.getByRole('combobox');
    await userEvent.click(combo);

    // click an option
    await userEvent.click(screen.getByText('Green'));

    // submit the form
    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        { color: { value: 'green', label: 'Green' } },
        expect.anything(),
      );
    });
  });

  it('renders with initial value', () => {
    render(
      <FormProvider
        defaultValues={{
          color: { value: 'blue', label: 'Blue' },
        }}
        onSubmit={vi.fn()}
      >
        <ReactSelectControl<FormValues>
          name="color"
          label="Favorite Color"
          options={options}
        />
      </FormProvider>,
    );

    expect(screen.getByText('Blue')).toBeInTheDocument();
  });

  it('respects disabled prop', () => {
    render(
      <FormProvider defaultValues={{ color: null }} onSubmit={vi.fn()}>
        <ReactSelectControl<FormValues>
          name="color"
          label="Favorite Color"
          disabled
          options={options}
        />
      </FormProvider>,
    );

    const combo = screen.getByRole('combobox', { hidden: true });
    expect(combo).toBeDisabled();
  });
});
