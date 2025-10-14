import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { PasswordInputControl } from './PasswordInputControl';
import userEvent from '@testing-library/user-event';

type FormValues = {
  password: string;
};

const Wrapper = ({
  children,
  defaultValues = { password: '' },
}: {
  children: React.ReactNode;
  defaultValues?: Partial<FormValues>;
}) => {
  const methods = useForm<FormValues>({ defaultValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('PasswordInput', () => {
  it('renders with label and password input', () => {
    render(
      <Wrapper>
        <PasswordInputControl<FormValues>
          name="password"
          label="Your Password"
          testId="password"
        />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/Your Password/i);
    expect(input).toBeInTheDocument();
  });

  it('handles user typing', async () => {
    const user = userEvent.setup();
    render(
      <Wrapper>
        <PasswordInputControl
          name="password"
          label="Password"
          testId="password"
        />
      </Wrapper>,
    );

    const input = screen.getByTestId('password') as HTMLInputElement;
    await user.type(input, 'secret123');
    expect(input.value).toBe('secret123');
  });

  it('renders with initial value', () => {
    render(
      <Wrapper defaultValues={{ password: 'preset' }}>
        <PasswordInputControl
          name="password"
          label="Password"
          testId="password"
        />
      </Wrapper>,
    );

    const input = screen.getByTestId('password') as HTMLInputElement;
    expect(input.value).toBe('preset');
  });

  it('renders description when provided', () => {
    render(
      <Wrapper>
        <PasswordInputControl
          name="password"
          label="Password"
          description="Use at least 8 characters."
          testId="password"
        />
      </Wrapper>,
    );

    expect(screen.getByText('Use at least 8 characters.')).toBeInTheDocument();
    expect(screen.getByTestId('password-description')).toHaveAttribute(
      'id',
      'password-description',
    );
  });

  it('shows description id in aria-describedby', () => {
    render(
      <Wrapper>
        <PasswordInputControl
          name="password"
          label="Password"
          description="Your secure password"
          testId="password"
        />
      </Wrapper>,
    );

    const input = screen.getByTestId('password');
    expect(input).toHaveAttribute(
      'aria-describedby',
      expect.stringContaining('password-description'),
    );
  });

  it('shows error message when invalid', async () => {
    const Component = () => {
      const methods = useForm<FormValues>({
        defaultValues: { password: '' },
        mode: 'onSubmit',
      });

      const onSubmit = vi.fn();

      return (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <PasswordInputControl<FormValues>
              name="password"
              label="Your Password"
              registerOptions={{ required: 'Password is required' }}
              testId="password"
            />
            <button type="submit">Submit</button>
          </form>
        </FormProvider>
      );
    };

    render(<Component />);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(await screen.findByText(/Password is required/i)).toBeVisible();

    // Use regex lookup as textArea label can include (whitespace and
    // `(niet verplicht)`)
    const textarea = screen.getByLabelText(/Your Password/i);
    expect(textarea.getAttribute('aria-describedby')).toMatch(/password-error/);
  });
});
