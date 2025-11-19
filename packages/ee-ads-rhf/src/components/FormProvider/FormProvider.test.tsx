import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { FormProvider } from './FormProvider';
import { useFormContext } from 'react-hook-form';

function EmailInput() {
  const { register } = useFormContext<{ email: string }>();
  return <input {...register('email')} data-testid="email-input" />;
}

describe('FormProvider', () => {
  it('renders children inside the form', () => {
    render(
      <FormProvider onSubmit={vi.fn()} defaultValues={{ email: '' }}>
        <div data-testid="child">Test</div>
      </FormProvider>,
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('sets noValidate by default', () => {
    const { container } = render(
      <FormProvider onSubmit={vi.fn()} defaultValues={{ email: '' }}>
        <input name="email" />
      </FormProvider>,
    );

    expect(container.querySelector('form')).toHaveAttribute('novalidate');
  });

  it('respects noValidate={false}', () => {
    const { container } = render(
      <FormProvider
        onSubmit={vi.fn()}
        defaultValues={{ email: '' }}
        noValidate={false}
      >
        <input name="email" />
      </FormProvider>,
    );

    expect(container.querySelector('form')).not.toHaveAttribute('novalidate');
  });

  it('calls onSubmit with defaultValues', async () => {
    const onSubmitMock = vi.fn();

    render(
      <FormProvider
        onSubmit={onSubmitMock}
        defaultValues={{ email: 'test@example.com' }}
      >
        <button type="submit">Submit</button>
      </FormProvider>,
    );

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        { email: 'test@example.com' },
        expect.anything(),
      );
    });
  });

  it('submits updated values', async () => {
    const handleSubmit = vi.fn();

    render(
      <FormProvider onSubmit={handleSubmit} defaultValues={{ email: '' }}>
        <EmailInput />
        <button type="submit">Submit</button>
      </FormProvider>,
    );

    fireEvent.change(screen.getByTestId('email-input'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith(
        { email: 'test@example.com' },
        expect.anything(),
      );
    });
  });
});
