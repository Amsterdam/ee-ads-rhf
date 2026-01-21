import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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
  const onSubmit = vi.fn();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

describe('PasswordInput', () => {
  it('renders with label and password input', () => {
    render(
      <Wrapper>
        <PasswordInputControl name="password" label="Your Password" />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/Your Password/i);
    expect(input).toBeInTheDocument();
  });

  it('handles user typing', async () => {
    const user = userEvent.setup();
    render(
      <Wrapper>
        <PasswordInputControl name="password" label="Password" />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/password/i) as HTMLInputElement;
    await user.type(input, 'secret123');
    expect(input.value).toBe('secret123');
  });

  it('renders with initial value', () => {
    render(
      <Wrapper defaultValues={{ password: 'preset' }}>
        <PasswordInputControl name="password" label="Password" />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/password/i) as HTMLInputElement;
    expect(input.value).toBe('preset');
  });

  it('renders description when provided', () => {
    render(
      <Wrapper>
        <PasswordInputControl
          name="password"
          label="Password"
          description="Use at least 8 characters."
        />
      </Wrapper>,
    );

    const descriptionText = 'Use at least 8 characters.';

    expect(screen.getByText(descriptionText)).toBeInTheDocument();

    const descriptionElement = document.getElementById('password-description');

    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(descriptionText);
  });

  it('shows description id in aria-describedby', () => {
    render(
      <Wrapper>
        <PasswordInputControl
          name="password"
          label="Password"
          description="Your secure password"
        />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/password/i);
    expect(input).toHaveAttribute(
      'aria-describedby',
      expect.stringContaining('password-description'),
    );
  });

  it('shows error message when invalid', async () => {
    render(
      <Wrapper>
        <PasswordInputControl<FormValues>
          name="password"
          label="Your Password"
          registerOptions={{ required: 'Password is required' }}
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(await screen.findByText(/Password is required/i)).toBeVisible();

    // Use regex lookup as textArea label can include (whitespace and
    // `(niet verplicht)`)
    const textarea = screen.getByLabelText(/Your Password/i);
    expect(textarea.getAttribute('aria-describedby')).toMatch(/password-error/);
  });

  it('hides the error message when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <PasswordInputControl<FormValues>
          name="password"
          label="Your Password"
          registerOptions={{ required: 'Password is required' }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    // error message should NOT appear
    expect(screen.queryByText(/Password is required/i)).not.toBeInTheDocument();

    await waitFor(() => {
      const input = screen.getByLabelText(/Password/i);
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  it('does not add error to aria-describedby when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <PasswordInputControl<FormValues>
          name="password"
          label="Your Password"
          registerOptions={{ required: 'Password is required' }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      const input = screen.getByLabelText(/Your Password/i);
      expect(input.getAttribute('aria-describedby')).not.toMatch(
        /password-error/i,
      );
    });
  });

  it('does not render when shouldShow returns false', () => {
    render(
      <Wrapper>
        <PasswordInputControl
          name="password"
          label="Your Password"
          shouldShow={() => false}
        />
      </Wrapper>,
    );

    expect(screen.queryByLabelText(/Your Password/i)).not.toBeInTheDocument();
  });

  it('renders when shouldShow returns true', () => {
    render(
      <Wrapper>
        <PasswordInputControl
          name="password"
          label="Your Password"
          shouldShow={() => true}
        />
      </Wrapper>,
    );

    expect(screen.getByLabelText(/Your Password/i)).toBeInTheDocument();
  });

  it('re-renders when shouldShow depends on watched value', async () => {
    const user = userEvent.setup();

    const ConditionalForm = () => {
      const methods = useForm<{ password: string; showField: boolean }>({
        defaultValues: { password: '', showField: false },
      });

      return (
        <FormProvider {...methods}>
          <label>
            <input
              type="checkbox"
              {...methods.register('showField')}
              aria-label="Toggle field"
            />
          </label>

          <PasswordInputControl<{ password: string; showField: boolean }>
            name="password"
            label="Your Password"
            shouldShow={(watch) => watch('showField')}
          />
        </FormProvider>
      );
    };

    render(<ConditionalForm />);

    // Initially hidden
    expect(screen.queryByLabelText(/Your Password/i)).not.toBeInTheDocument();

    // Toggle checkbox - field should appear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(await screen.findByLabelText(/Your Password/i)).toBeInTheDocument();

    // Toggle checkbox - field should disappear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(screen.queryByLabelText(/Your Password/i)).not.toBeInTheDocument();
  });
});
