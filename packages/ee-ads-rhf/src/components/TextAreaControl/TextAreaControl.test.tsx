import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { TextAreaControl } from './TextAreaControl';
import userEvent from '@testing-library/user-event';

type FormValues = {
  message: string;
};

const Wrapper = ({
  children,
  defaultValues = { message: '' },
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

describe('TextAreaControl', () => {
  it('renders with label and textarea', () => {
    render(
      <Wrapper>
        <TextAreaControl<FormValues> name="message" label="Your Message" />
      </Wrapper>,
    );

    // Use regex lookup as textArea label can include (whitespace and
    // `(niet verplicht)`)
    const textarea = screen.getByLabelText(/Your Message/i);
    expect(textarea).toBeInTheDocument();
  });

  it('handles user typing', async () => {
    render(
      <Wrapper>
        <TextAreaControl<FormValues> name="message" label="Your Message" />
      </Wrapper>,
    );

    // Use regex lookup as textArea label can include (whitespace and
    // `(niet verplicht)`)
    const textarea = screen.getByLabelText(
      /Your Message/i,
    ) as HTMLTextAreaElement;
    expect(textarea.value).toBe('');

    await userEvent.type(
      textarea,
      'Lorem ipsum dolor sit amet. Qui molestiae laudantium in velit blanditiis sed sequi reprehenderit et minus unde nam fugit aperiam. Sit aliquid sapiente non odio accusamus eum modi galisum. Et voluptatem facilis eum rerum dolores aut ducimus expedita cum consectetur quidem.',
    );
    expect(textarea.value).toBe(
      'Lorem ipsum dolor sit amet. Qui molestiae laudantium in velit blanditiis sed sequi reprehenderit et minus unde nam fugit aperiam. Sit aliquid sapiente non odio accusamus eum modi galisum. Et voluptatem facilis eum rerum dolores aut ducimus expedita cum consectetur quidem.',
    );
  });

  it('renders with initial value', () => {
    render(
      <Wrapper
        defaultValues={{
          message:
            'A placeat harum est sint eaque et aperiam quis et voluptas deleniti id expedita modi aut magnam minima. Vel quaerat dolores ut explicabo similique aut expedita molestiae quo doloremque temporibus ut veniam quos.',
        }}
      >
        <TextAreaControl<FormValues> name="message" label="Your Message" />
      </Wrapper>,
    );

    // Use regex lookup as textArea label can include (whitespace and
    // `(niet verplicht)`)
    const textarea = screen.getByLabelText(
      /Your Message/i,
    ) as HTMLTextAreaElement;
    expect(textarea.value).toBe(
      'A placeat harum est sint eaque et aperiam quis et voluptas deleniti id expedita modi aut magnam minima. Vel quaerat dolores ut explicabo similique aut expedita molestiae quo doloremque temporibus ut veniam quos.',
    );
  });

  it('renders description when provided', () => {
    render(
      <Wrapper>
        <TextAreaControl<FormValues>
          name="message"
          label="Your Message"
          description="Please enter your full legal name."
        />
      </Wrapper>,
    );

    expect(
      screen.getByText(/please enter your full legal name/i),
    ).toBeInTheDocument();
  });

  it('shows description id in aria-describedby', () => {
    const description = 'Send us your ideas.';
    render(
      <Wrapper>
        <TextAreaControl<FormValues>
          name="message"
          label="Your Message"
          description={description}
        />
      </Wrapper>,
    );

    // Use regex lookup as textArea label can include (whitespace and
    // `(niet verplicht)`)
    const textarea = screen.getByLabelText(/Your Message/i);
    const describedBy = textarea.getAttribute('aria-describedby');
    expect(describedBy).toMatch(/message-description/);
    expect(screen.getByText(description)).toHaveAttribute(
      'id',
      'message-description',
    );
  });

  it('shows error message when invalid', async () => {
    render(
      <Wrapper>
        <TextAreaControl<FormValues>
          name="message"
          label="Your Message"
          registerOptions={{ required: 'Message is required' }}
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(await screen.findByText(/Message is required/i)).toBeVisible();

    // Use regex lookup as textArea label can include (whitespace and
    // `(niet verplicht)`)
    const textarea = screen.getByLabelText(/Your Message/i);
    expect(textarea.getAttribute('aria-describedby')).toMatch(/message-error/);
  });

  it('hides the error message when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <TextAreaControl<FormValues>
          name="message"
          label="Your Message"
          registerOptions={{ required: 'Message is required' }}
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    // error message should NOT appear
    expect(screen.queryByText(/Message is required/i)).not.toBeInTheDocument();

    await waitFor(() => {
      const input = screen.getByLabelText(/Your message/i);
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  it('does not add error to aria-describedby when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <TextAreaControl<FormValues>
          name="message"
          label="Your Message"
          registerOptions={{ required: 'Message is required' }}
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      const input = screen.getByLabelText(/Your message/i);
      expect(input.getAttribute('aria-describedby')).not.toMatch(
        /message-error/,
      );
    });
  });
});
