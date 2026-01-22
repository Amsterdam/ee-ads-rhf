import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { DateControl } from './DateControl';
import userEvent from '@testing-library/user-event';

type FormValues = {
  birthDate: string;
};

const Wrapper = ({
  children,
  defaultValues = { birthDate: '' },
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

describe('DateControl', () => {
  it('renders with label and input', () => {
    render(
      <Wrapper>
        <DateControl name="birthDate" label="Date of Birth" />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/date of birth/i) as HTMLInputElement;
    expect(input).toBeInTheDocument();
  });

  it('handles user input', () => {
    render(
      <Wrapper>
        <DateControl name="birthDate" label="Date of Birth" />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/date of birth/i) as HTMLInputElement;
    expect(input.value).toBe('');

    fireEvent.input(input, { target: { value: '2000-01-01' } });
    expect(input.value).toBe('2000-01-01');
  });

  it('renders initial value', () => {
    render(
      <Wrapper defaultValues={{ birthDate: '1990-12-25' }}>
        <DateControl name="birthDate" label="Date of Birth" />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/date of birth/i) as HTMLInputElement;
    expect(input.value).toBe('1990-12-25');
  });

  it('renders description', () => {
    render(
      <Wrapper>
        <DateControl
          name="birthDate"
          label="Date of Birth"
          description="Please enter your birth date."
        />
      </Wrapper>,
    );

    expect(
      screen.getByText(/please enter your birth date/i),
    ).toBeInTheDocument();
  });

  it('shows description id in aria-describedby', () => {
    const description = 'We need this to verify your age.';
    render(
      <Wrapper>
        <DateControl
          name="birthDate"
          label="Date of Birth"
          description={description}
        />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/date of birth/i);
    const describedBy = input.getAttribute('aria-describedby');
    expect(describedBy).toMatch(/birthDate-description/);

    const descriptionElement = document.getElementById('birthDate-description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(description);
  });

  it('shows error message when invalid', async () => {
    const Component = () => {
      const methods = useForm<FormValues>({
        defaultValues: { birthDate: '' },
        mode: 'onSubmit',
      });

      const onSubmit = vi.fn();

      return (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <DateControl
              name="birthDate"
              label="Date of Birth"
              registerOptions={{ required: 'Birth date is required' }}
            />
            <button type="submit">Submit</button>
          </form>
        </FormProvider>
      );
    };

    render(<Component />);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      const input = screen.getByLabelText(/date of birth/i);
      expect(input.getAttribute('aria-describedby')).toMatch(/birthDate-error/);
    });
  });

  it('hides the error message when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <DateControl<FormValues>
          name="birthDate"
          label="Date of Birth"
          registerOptions={{ required: 'Birth date is required' }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    // error message should NOT appear
    expect(
      screen.queryByText(/Date of birth is required/i),
    ).not.toBeInTheDocument();

    await waitFor(() => {
      const input = screen.getByLabelText(/Date of Birth/i);
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  it('does not add error to aria-describedby when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <DateControl<FormValues>
          name="birthDate"
          label="Date of Birth"
          registerOptions={{ required: 'Birth date is required' }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      const input = screen.getByLabelText(/Date of Birth/i);
      expect(input.getAttribute('aria-describedby')).not.toMatch(
        /birthDate-error/,
      );
    });
  });

  it('does not render when shouldShow returns false', () => {
    render(
      <Wrapper>
        <DateControl
          name="birthDate"
          label="Date of Birth"
          shouldShow={() => false}
        />
      </Wrapper>,
    );

    expect(screen.queryByLabelText(/Date of Birth/i)).not.toBeInTheDocument();
  });

  it('renders when shouldShow returns true', () => {
    render(
      <Wrapper>
        <DateControl
          name="birthDate"
          label="Date of Birth"
          shouldShow={() => true}
        />
      </Wrapper>,
    );

    expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument();
  });

  it('re-renders when shouldShow depends on watched value', async () => {
    const user = userEvent.setup();

    const ConditionalForm = () => {
      const methods = useForm<{ birthDate: string; showField: boolean }>({
        defaultValues: { birthDate: '', showField: false },
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

          <DateControl<{ birthDate: string; showField: boolean }>
            name="birthDate"
            label="Date of Birth"
            shouldShow={(watch) => watch('showField')}
          />
        </FormProvider>
      );
    };

    render(<ConditionalForm />);

    // Initially hidden
    expect(screen.queryByLabelText(/Date of Birth/i)).not.toBeInTheDocument();

    // Toggle checkbox - field should appear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(await screen.findByLabelText(/Date of Birth/i)).toBeInTheDocument();

    // Toggle checkbox - field should disappear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(screen.queryByLabelText(/Date of Birth/i)).not.toBeInTheDocument();
  });
});
