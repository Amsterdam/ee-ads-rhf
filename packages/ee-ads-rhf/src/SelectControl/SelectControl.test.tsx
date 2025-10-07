import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SelectControl from './SelectControl';
import userEvent from '@testing-library/user-event';
import { SubmitHandler } from 'react-hook-form';
import FormProvider from '../FormProvider/FormProvider';

type FormValues = {
  country: string;
};

describe('SelectControl', () => {
  it('renders with label, select and options', () => {
    render(
      <FormProvider defaultValues={{ country: '' }} onSubmit={vi.fn()}>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          options={['A', 'B', 'C']}
        />
      </FormProvider>,
    );

    // Use regex lookup as select label can include (whitespace and
    // `(niet verplicht)`)
    expect(screen.getByLabelText(/Test Label/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Test Label/i)).toHaveAttribute(
      'id',
      'country',
    );
    expect(screen.getByRole('option', { name: 'A' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'B' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'C' })).toBeInTheDocument();
  });

  it('renders with object options', () => {
    render(
      <FormProvider defaultValues={{ country: '' }} onSubmit={vi.fn()}>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          options={[
            {
              label: 'Option 1',
              value: 'option1',
            },
            {
              label: 'Option 2',
              value: 'option2',
            },
            {
              label: 'Option 3',
              value: 'option3',
            },
          ]}
        />
      </FormProvider>,
    );

    // Use regex lookup as select label can include (whitespace and
    // `(niet verplicht)`)
    expect(screen.getByLabelText(/Test Label/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Test Label/i)).toHaveAttribute(
      'id',
      'country',
    );
    expect(
      screen.getByRole('option', { name: 'Option 1' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Option 2' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Option 3' }),
    ).toBeInTheDocument();
  });

  it('renders with grouped options', () => {
    render(
      <FormProvider defaultValues={{ country: '' }} onSubmit={vi.fn()}>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          options={[
            {
              group: 'Group 1',
              options: [
                { label: 'Grouped Label 1', value: 'group-1-label-1' },
                { label: 'Grouped Label 2', value: 'group-1-label-2' },
              ],
            },
            {
              group: 'Group 2',
              options: [
                { label: 'Grouped Label 3', value: 'group-2-label-1' },
                { label: 'Grouped Label 4', value: 'group-2-label-2' },
              ],
            },
          ]}
        />
      </FormProvider>,
    );

    // Use regex lookup as select label can include (whitespace and
    // `(niet verplicht)`)
    expect(screen.getByLabelText(/Test Label/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Test Label/i)).toHaveAttribute(
      'id',
      'country',
    );
    expect(screen.getByRole('group', { name: 'Group 1' })).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Grouped Label 1' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Grouped Label 2' }),
    ).toBeInTheDocument();
  });

  it('handles user input and submits updated value', async () => {
    const onSubmitMock: SubmitHandler<FormValues> = vi.fn();
    render(
      <FormProvider defaultValues={{ country: '' }} onSubmit={onSubmitMock}>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          options={['A', 'B', 'C']}
        />
        <button type="submit">Submit</button>
      </FormProvider>,
    );

    // Use regex lookup as select label can include (whitespace and
    // `(niet verplicht)`)
    fireEvent.change(screen.getByLabelText(/Test Label/i), {
      target: { value: 'B' },
    });
    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        { country: 'B' },
        expect.anything(),
      );
    });
  });

  it('renders with initial value', () => {
    render(
      <FormProvider defaultValues={{ country: 'C' }} onSubmit={vi.fn()}>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          options={['A', 'B', 'C']}
        />
      </FormProvider>,
    );

    // Use regex lookup as select label can include (whitespace and
    // `(niet verplicht)`)
    const select = screen.getByLabelText(/Test Label/i);
    expect(select).toHaveValue('C');
  });

  it('renders description', () => {
    render(
      <FormProvider defaultValues={{ country: '' }} onSubmit={vi.fn()}>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          description={
            <span data-testid="custom-description">Custom description</span>
          }
          options={['A', 'B', 'C']}
        />
      </FormProvider>,
    );

    expect(screen.getByTestId('custom-description')).toBeInTheDocument();
  });

  it('shows description id in aria-describedby', () => {
    const description = 'This is a description';
    render(
      <FormProvider defaultValues={{ country: '' }} onSubmit={vi.fn()}>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          description={description}
          options={['A', 'B', 'C']}
        />
      </FormProvider>,
    );

    // Use regex lookup as select label can include (whitespace and
    // `(niet verplicht)`)
    const select = screen.getByLabelText(/Test Label/i);

    expect(select).toHaveAttribute('aria-describedby', 'country-description');
    expect(screen.getByText(description)).toHaveAttribute(
      'id',
      'country-description',
    );
  });

  it('shows error message', async () => {
    render(
      <FormProvider defaultValues={{ country: '' }} onSubmit={vi.fn()}>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          options={['A', 'B', 'C']}
          registerOptions={{ required: 'Country is required' }}
        />
        <button type="submit">Submit</button>
      </FormProvider>,
    );

    await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(await screen.findByText('Country is required')).toBeInTheDocument();
  });
});
