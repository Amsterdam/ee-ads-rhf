import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { RadioControl } from './RadioControl';
import { FormProvider } from '../FormProvider/FormProvider';
import { SubmitHandler } from 'react-hook-form';
import userEvent from '@testing-library/user-event';

type FormValues = {
  color: string;
};

describe('RadioControl', () => {
  it('renders with label and radio', () => {
    render(
      <FormProvider defaultValues={{ color: '' }} onSubmit={vi.fn()}>
        <RadioControl<FormValues>
          label="Test Label"
          name="color"
          options={['Green', 'Yellow']}
        />
      </FormProvider>,
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Green')).toBeInTheDocument();
    expect(screen.getByText('Yellow')).toBeInTheDocument();
  });

  it('renders with object options', () => {
    render(
      <FormProvider defaultValues={{ color: '' }} onSubmit={vi.fn()}>
        <RadioControl<FormValues>
          label="Test Label"
          name="color"
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ]}
        />
      </FormProvider>,
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Red')).toBeInTheDocument();
    expect(screen.getByText('Blue')).toBeInTheDocument();
  });

  it('handles user input and submits updated value', async () => {
    const user = userEvent.setup();
    const onSubmitMock: SubmitHandler<FormValues> = vi.fn();
    render(
      <FormProvider defaultValues={{ color: '' }} onSubmit={onSubmitMock}>
        <RadioControl<FormValues>
          label="Test Label"
          name="color"
          options={['Green', 'Yellow']}
        />
        <button type="submit">Submit</button>
      </FormProvider>,
    );

    await user.click(screen.getByText('Yellow'));
    await user.click(screen.getByText('Submit'));
    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        { color: 'Yellow' },
        expect.anything(),
      );
    });
  });

  it('renders with initial value', () => {
    render(
      <FormProvider defaultValues={{ color: 'Yellow' }} onSubmit={vi.fn()}>
        <RadioControl<FormValues>
          label="Test Label"
          name="color"
          options={['Green', 'Yellow']}
        />
      </FormProvider>,
    );

    const greenRadio = screen.getByRole('radio', { name: 'Green' });
    const yellowRadio = screen.getByRole('radio', { name: 'Yellow' });

    expect(yellowRadio).toBeChecked();
    expect(greenRadio).not.toBeChecked();
  });

  it('renders description', () => {
    render(
      <FormProvider defaultValues={{ color: '' }} onSubmit={vi.fn()}>
        <RadioControl<FormValues>
          label="Test Label"
          name="color"
          description={
            <span data-testid="custom-description">Custom description</span>
          }
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ]}
        />
      </FormProvider>,
    );

    expect(screen.getByTestId('custom-description')).toBeInTheDocument();
  });

  it('shows description id in aria-describedby', () => {
    const description = 'This is a description';
    render(
      <FormProvider defaultValues={{ color: '' }} onSubmit={vi.fn()}>
        <RadioControl<FormValues>
          label="Test Label"
          name="color"
          description={description}
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ]}
        />
      </FormProvider>,
    );

    const fieldset = screen.getByText('Test Label').parentNode;
    expect(fieldset).toHaveAttribute('aria-describedby', 'color-description');
    expect(screen.getByText(description)).toHaveAttribute(
      'id',
      'color-description',
    );
  });

  it('shows error message', async () => {
    render(
      <FormProvider defaultValues={{ country: '' }} onSubmit={vi.fn()}>
        <RadioControl<FormValues>
          label="Test Label"
          name="color"
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ]}
          registerOptions={{ required: 'Color is required' }}
        />
        <button type="submit">Submit</button>
      </FormProvider>,
    );

    await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(await screen.findByText('Color is required')).toBeInTheDocument();
  });
});
