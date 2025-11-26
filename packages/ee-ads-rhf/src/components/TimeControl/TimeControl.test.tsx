import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { TimeControl } from './TimeControl';

type FormValues = {
  startTime: string;
};

const Wrapper = ({
  children,
  defaultValues = { startTime: '' },
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

describe('TimeControl', () => {
  it('renders with label and input', () => {
    render(
      <Wrapper>
        <TimeControl<FormValues> name="startTime" label="Start time" />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/start time/i) as HTMLInputElement;
    expect(input).toBeInTheDocument();
  });

  it('handles user input', () => {
    render(
      <Wrapper>
        <TimeControl<FormValues> name="startTime" label="Start time" />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/start time/i) as HTMLInputElement;
    expect(input.value).toBe('');

    fireEvent.input(input, { target: { value: '12:02' } });
    expect(input.value).toBe('12:02');
  });

  it('renders initial value', () => {
    render(
      <Wrapper defaultValues={{ startTime: '12:02' }}>
        <TimeControl<FormValues> name="startTime" label="Start time" />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/start time/i) as HTMLInputElement;
    expect(input.value).toBe('12:02');
  });

  it('renders description', () => {
    render(
      <Wrapper>
        <TimeControl<FormValues>
          name="startTime"
          label="Start time"
          description="Please enter a start time."
        />
      </Wrapper>,
    );

    expect(screen.getByText(/please enter a start time/i)).toBeInTheDocument();
  });

  it('shows description id in aria-describedby', () => {
    const description = 'We need this to verify your age.';
    render(
      <Wrapper>
        <TimeControl<FormValues>
          name="startTime"
          label="Start time"
          description={description}
        />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/start time/i);
    const describedBy = input.getAttribute('aria-describedby');
    expect(describedBy).toMatch(/startTime-description/);
    expect(screen.getByText(description)).toHaveAttribute(
      'id',
      'startTime-description',
    );
  });

  it('shows error message when invalid', async () => {
    render(
      <Wrapper>
        <TimeControl<FormValues>
          name="startTime"
          label="Start time"
          registerOptions={{ required: 'Start time is required' }}
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      const input = screen.getByLabelText(/start time/i);
      expect(input.getAttribute('aria-describedby')).toMatch(/startTime-error/);
    });
  });

  it('hides the error message when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <TimeControl<FormValues>
          name="startTime"
          label="Start time"
          registerOptions={{ required: 'Start time is required' }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    // error message should NOT appear
    expect(
      screen.queryByText(/Start time is required/i),
    ).not.toBeInTheDocument();

    await waitFor(() => {
      const input = screen.getByLabelText(/Start time/i);
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  it('does not add error to aria-describedby when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <TimeControl<FormValues>
          name="startTime"
          label="Start time"
          registerOptions={{ required: 'Start time is required' }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      const input = screen.getByLabelText(/Start time/i);
      expect(input.getAttribute('aria-describedby')).not.toMatch(
        /startTime-error/i,
      );
    });
  });
});
