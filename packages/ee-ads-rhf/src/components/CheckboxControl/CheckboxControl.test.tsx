import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { CheckboxControl } from './CheckboxControl';
import userEvent from '@testing-library/user-event';

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
  const onSubmit = vi.fn();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

describe('CheckboxControl', () => {
  it('renders with label and input', () => {
    render(
      <Wrapper>
        <CheckboxControl<FormValues>
          name="remote"
          label="Is the meeting remote?"
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
          label="Is the meeting remote?"
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
          label="Is the meeting remote?"
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
        <CheckboxControl
          name="remote"
          label="Is the meeting remote?"
          description="This field is required"
        />
      </Wrapper>,
    );

    expect(screen.getByText(/This field is required/i)).toBeInTheDocument();
  });

  it('shows description id in aria-describedby', () => {
    const description = 'This field is required';
    render(
      <Wrapper>
        <CheckboxControl
          name="remote"
          label="Is the meeting remote?"
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
            <CheckboxControl
              name="remote"
              label="Is the meeting remote?"
              registerOptions={{
                required: 'This field is required',
              }}
            />
            <button type="submit">Submit</button>
          </form>
        </FormProvider>
      );
    };

    render(<Component />);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(await screen.findByText(/This field is required/i)).toBeVisible();

    const checkbox = screen.getByLabelText(/is the meeting remote/i);
    expect(checkbox.getAttribute('aria-describedby')).toMatch(/remote-error/);
  });

  it('hides the error message when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <CheckboxControl<FormValues>
          name="remote"
          label="Is the meeting remote?"
          registerOptions={{
            required: 'This field is required',
          }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    // error message should NOT appear
    expect(
      screen.queryByText(/This field is required/i),
    ).not.toBeInTheDocument();

    await waitFor(() => {
      const input = screen.getByLabelText(/Is the meeting remote/i);
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  it('does not add error to aria-describedby when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <CheckboxControl<FormValues>
          name="remote"
          label="Is the meeting remote?"
          registerOptions={{
            required: 'This field is required',
          }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      const input = screen.getByLabelText(/Is the meeting remote/i);
      expect(input.getAttribute('aria-describedby')).not.toMatch(
        /remote-error/,
      );
    });
  });

  it('does not render when shouldShow returns false', () => {
    render(
      <Wrapper>
        <CheckboxControl
          name="remote"
          label="Is the meeting remote?"
          shouldShow={() => false}
        />
      </Wrapper>,
    );

    expect(
      screen.queryByLabelText(/Is the meeting remote/i),
    ).not.toBeInTheDocument();
  });

  it('renders when shouldShow returns true', () => {
    render(
      <Wrapper>
        <CheckboxControl
          name="remote"
          label="Is the meeting remote?"
          shouldShow={() => true}
        />
      </Wrapper>,
    );

    expect(screen.getByLabelText(/Is the meeting remote/i)).toBeInTheDocument();
  });

  it('re-renders when shouldShow depends on watched value', async () => {
    const user = userEvent.setup();

    const ConditionalForm = () => {
      const methods = useForm<{ remote: boolean; showField: boolean }>({
        defaultValues: { remote: false, showField: false },
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

          <CheckboxControl<{ remote: boolean; showField: boolean }>
            name="remote"
            label="Is the meeting remote?"
            shouldShow={(watch) => watch('showField')}
          />
        </FormProvider>
      );
    };

    render(<ConditionalForm />);

    // Initially hidden
    expect(
      screen.queryByLabelText(/Is the meeting remote/i),
    ).not.toBeInTheDocument();

    // Toggle checkbox - field should appear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(
      await screen.findByLabelText(/Is the meeting remote/i),
    ).toBeInTheDocument();

    // Toggle checkbox - field should disappear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(
      screen.queryByLabelText(/Is the meeting remote/i),
    ).not.toBeInTheDocument();
  });
});
