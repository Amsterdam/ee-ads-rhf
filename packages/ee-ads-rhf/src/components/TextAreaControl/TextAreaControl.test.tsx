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
        <TextAreaControl name="message" label="Comments" />
      </Wrapper>,
    );

    // Use regex lookup as textArea label can include (whitespace and
    // `(niet verplicht)`)
    const textarea = screen.getByLabelText(/Comments/i);
    expect(textarea).toBeInTheDocument();
  });

  it('handles user typing', async () => {
    render(
      <Wrapper>
        <TextAreaControl name="message" label="Comments" />
      </Wrapper>,
    );

    // Use regex lookup as textArea label can include (whitespace and
    // `(niet verplicht)`)
    const textarea = screen.getByLabelText(/Comments/i) as HTMLTextAreaElement;
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
        <TextAreaControl name="message" label="Comments" />
      </Wrapper>,
    );

    // Use regex lookup as textArea label can include (whitespace and
    // `(niet verplicht)`)
    const textarea = screen.getByLabelText(/Comments/i) as HTMLTextAreaElement;
    expect(textarea.value).toBe(
      'A placeat harum est sint eaque et aperiam quis et voluptas deleniti id expedita modi aut magnam minima. Vel quaerat dolores ut explicabo similique aut expedita molestiae quo doloremque temporibus ut veniam quos.',
    );
  });

  it('renders description when provided', () => {
    render(
      <Wrapper>
        <TextAreaControl
          name="message"
          label="Comments"
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
        <TextAreaControl
          name="message"
          label="Comments"
          description={description}
        />
      </Wrapper>,
    );

    // Use regex lookup as textArea label can include (whitespace and
    // `(niet verplicht)`)
    const textarea = screen.getByLabelText(/Comments/i);
    const describedBy = textarea.getAttribute('aria-describedby');
    expect(describedBy).toMatch(/message-description/);

    const descriptionElement = document.getElementById('message-description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(description);
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
    const textarea = screen.getByLabelText(/Your message/i);
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

  it('does not render when shouldShow returns false', () => {
    render(
      <Wrapper>
        <TextAreaControl
          name="message"
          label="Comments"
          shouldShow={() => false}
        />
      </Wrapper>,
    );

    expect(screen.queryByLabelText(/Comments/i)).not.toBeInTheDocument();
  });

  it('renders when shouldShow returns true', () => {
    render(
      <Wrapper>
        <TextAreaControl
          name="message"
          label="Comments"
          shouldShow={() => true}
        />
      </Wrapper>,
    );

    expect(screen.getByLabelText(/Comments/i)).toBeInTheDocument();
  });

  it('re-renders when shouldShow depends on watched value', async () => {
    const user = userEvent.setup();

    const ConditionalForm = () => {
      const methods = useForm<{ message: string; showField: boolean }>({
        defaultValues: { message: '', showField: false },
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

          <TextAreaControl<{ message: string; showField: boolean }>
            name="message"
            label="Comments"
            shouldShow={(watch) => watch('showField')}
          />
        </FormProvider>
      );
    };

    render(<ConditionalForm />);

    // Initially hidden
    expect(screen.queryByLabelText(/Comments/i)).not.toBeInTheDocument();

    // Toggle checkbox - field should appear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(await screen.findByLabelText(/Comments/i)).toBeInTheDocument();

    // Toggle checkbox - field should disappear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(screen.queryByLabelText(/Comments/i)).not.toBeInTheDocument();
  });
});
