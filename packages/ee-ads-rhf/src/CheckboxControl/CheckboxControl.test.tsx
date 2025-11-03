import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { CheckboxControl } from './CheckboxControl';

type FormValues = {
  remote: boolean;
};

const Wrapper = ({
  children,
  defaultValues = { remote: false },
}: {
  children: React.ReactNode;
  defaultValues?: Partial<FormValues>;
}) => {
  const methods = useForm<FormValues>({ defaultValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('CheckboxControl', () => {
  it('renders with label and input', () => {
    render(
      <Wrapper>
        <CheckboxControl<FormValues>
          name="remote"
          label="is the meeting remote?"
        />
      </Wrapper>,
    );

    const checkbox = screen.getByLabelText(
      /is the meeting remote/i,
    ) as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBe(checkbox);
    expect(checkbox.type).toBe('checkbox');
  });

  it('handles user input', () => {
    render(
      <Wrapper>
        <CheckboxControl<FormValues>
          name="remote"
          label="is the meeting remote?"
        />
      </Wrapper>,
    );

    const checkbox = screen.getByLabelText(
      /is the meeting remote/i,
    ) as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  it('renders initial value', () => {
    render(
      <Wrapper defaultValues={{ remote: true }}>
        <CheckboxControl<FormValues>
          name="remote"
          label="is the meeting remote?"
        />
      </Wrapper>,
    );

    const checkbox = screen.getByLabelText(
      /is the meeting remote/i,
    ) as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('renders description', () => {
    render(
      <Wrapper>
        <CheckboxControl<FormValues>
          name="remote"
          label="is the meeting remote?"
          description="For remote meetings a video call invite will be sent in advance"
        />
      </Wrapper>,
    );

    expect(
      screen.getByText(
        /For remote meetings a video call invite will be sent in advance/i,
      ),
    ).toBeInTheDocument();
  });

  it('shows description id in aria-describedby', () => {
    const description =
      'For remote meetings a video call invite will be sent in advance';
    render(
      <Wrapper>
        <CheckboxControl<FormValues>
          name="remote"
          label="is the meeting remote?"
          description={description}
        />
      </Wrapper>,
    );

    const checkbox = screen.getByLabelText(/is the meeting remote/i);
    const describedBy = checkbox.getAttribute('aria-describedby');
    expect(describedBy).toMatch(/remote-description/);
    expect(screen.getByText(description)).toHaveAttribute(
      'id',
      'remote-description',
    );
  });

  it('shows error message when invalid', async () => {
    const Component = () => {
      const methods = useForm<FormValues>({
        defaultValues: { remote: false },
        mode: 'onSubmit',
      });

      const onSubmit = vi.fn();

      return (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <CheckboxControl<FormValues>
              name="remote"
              label="is the meeting remote?"
              registerOptions={{
                required:
                  'For remote meetings a video call invite will be sent in advance',
              }}
            />
            <button type="submit">Submit</button>
          </form>
        </FormProvider>
      );
    };

    render(<Component />);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(
      await screen.findByText(
        /For remote meetings a video call invite will be sent in advance/i,
      ),
    ).toBeVisible();

    const checkbox = screen.getByLabelText(/is the meeting remote/i);
    expect(checkbox.getAttribute('aria-describedby')).toMatch(/remote-error/);
  });
});
