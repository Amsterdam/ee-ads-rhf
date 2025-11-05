import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { TextInputControl } from './TextInputControl';
import userEvent from '@testing-library/user-event';

type FormValues = {
  name: string;
};

const Wrapper = ({
  children,
  defaultValues = { name: '' },
}: {
  children: React.ReactNode;
  defaultValues?: Partial<FormValues>;
}) => {
  const methods = useForm<FormValues>({ defaultValues });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(() => {})}>{children}</form>
    </FormProvider>
  );
};

describe('TextInputControl', () => {
  it('renders with label and input', () => {
    render(
      <Wrapper>
        <TextInputControl name="name" label="Your Name" />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/Your Name/i);
    expect(input).toBeInTheDocument();
  });

  it('handles user typing', async () => {
    const user = userEvent.setup();
    render(
      <Wrapper>
        <TextInputControl name="name" label="Your Name" />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/Your Name/i) as HTMLInputElement;
    await user.type(input, 'secret123');
    expect(input.value).toBe('secret123');
  });

  it('renders with initial value', () => {
    render(
      <Wrapper defaultValues={{ name: 'Thomas' }}>
        <TextInputControl name="name" label="Your Name" />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/Your Name/i) as HTMLInputElement;
    expect(input.value).toBe('Thomas');
  });

  it('renders description when provided', () => {
    render(
      <Wrapper>
        <TextInputControl
          name="name"
          label="Your Name"
          description="First or last name."
        />
      </Wrapper>,
    );

    expect(screen.getByText('First or last name.')).toBeInTheDocument();
  });

  it('shows description id in aria-describedby', () => {
    render(
      <Wrapper>
        <TextInputControl
          name="name"
          label="Your Name"
          description="First or last name."
        />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/Your Name/i);
    expect(input).toHaveAttribute(
      'aria-describedby',
      expect.stringContaining('name-description'),
    );
  });

  it('shows error message when invalid', async () => {
    render(
      <Wrapper>
        <TextInputControl<FormValues>
          name="name"
          label="Your Name"
          registerOptions={{ required: 'A name is required' }}
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(await screen.findByText(/A name is required/i)).toBeVisible();

    // Use regex lookup as textArea label can include (whitespace and
    // `(niet verplicht)`)
    const textarea = screen.getByLabelText(/Your Name/i);
    expect(textarea.getAttribute('aria-describedby')).toMatch(/name-error/);
  });

  it('hides the error message when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <TextInputControl<FormValues>
          name="name"
          label="Your Name"
          registerOptions={{ required: 'A name is required' }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    // error message should NOT appear
    expect(screen.queryByText(/A name is required/i)).not.toBeInTheDocument();

    await waitFor(() => {
      const input = screen.getByLabelText(/Your Name/i);
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  it('does not add error to aria-describedby when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <TextInputControl<FormValues>
          name="name"
          label="Your Name"
          registerOptions={{ required: 'A name is required' }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      const input = screen.getByLabelText(/Your Name/i);
      expect(input.getAttribute('aria-describedby')).not.toMatch(/name-error/);
    });
  });

  it('does not render when shouldShow returns false', () => {
    render(
      <Wrapper>
        <TextInputControl
          name="name"
          label="Your Name"
          shouldShow={() => false}
        />
      </Wrapper>,
    );

    expect(screen.queryByLabelText(/Your Name/i)).not.toBeInTheDocument();
  });

  it('renders when shouldShow returns true', () => {
    render(
      <Wrapper>
        <TextInputControl
          name="name"
          label="Your Name"
          shouldShow={() => true}
        />
      </Wrapper>,
    );

    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
  });

  it('re-renders when shouldShow depends on watched value', async () => {
    const user = userEvent.setup();

    const ConditionalForm = () => {
      const methods = useForm<{ name: string; showField: boolean }>({
        defaultValues: { name: '', showField: false },
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

          <TextInputControl<{ name: string; showField: boolean }>
            name="name"
            label="Your Name"
            shouldShow={(watch) => watch('showField')}
          />
        </FormProvider>
      );
    };

    render(<ConditionalForm />);

    // Initially hidden
    expect(screen.queryByLabelText(/Your Name/i)).not.toBeInTheDocument();

    // Toggle checkbox - field should appear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(await screen.findByLabelText(/Your Name/i)).toBeInTheDocument();

    // Toggle checkbox - field should disappear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(screen.queryByLabelText(/Your Name/i)).not.toBeInTheDocument();
  });
});
