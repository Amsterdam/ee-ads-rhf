import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('TextInputControl', () => {
  it('renders with label and input', () => {
    render(
      <Wrapper>
        <TextInputControl<FormValues> name="name" label="Your Name" />
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
    const Component = () => {
      const methods = useForm<FormValues>({
        defaultValues: { name: '' },
        mode: 'onSubmit',
      });

      const onSubmit = vi.fn();

      return (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <TextInputControl<FormValues>
              name="name"
              label="Your Name"
              registerOptions={{ required: 'A name is required' }}
            />
            <button type="submit">Submit</button>
          </form>
        </FormProvider>
      );
    };

    render(<Component />);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(await screen.findByText(/A name is required/i)).toBeVisible();

    // Use regex lookup as textArea label can include (whitespace and
    // `(niet verplicht)`)
    const textarea = screen.getByLabelText(/Your Name/i);
    expect(textarea.getAttribute('aria-describedby')).toMatch(/name-error/);
  });
});
