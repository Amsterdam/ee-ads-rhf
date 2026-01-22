import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactNode } from 'react';
import {
  SubmitHandler,
  useForm,
  FormProvider as RHFFormProvider,
} from 'react-hook-form';
import { FormProvider } from '../FormProvider/FormProvider';
import { SwitchControl } from './SwitchControl';

type FormValues = {
  notify: boolean;
};

const Wrapper = ({
  children,
  defaultValues = { notify: false },
  onSubmit = vi.fn(),
}: {
  children: ReactNode;
  defaultValues?: Partial<FormValues>;
  onSubmit?: SubmitHandler<FormValues>;
}) => {
  const form = useForm<FormValues>({
    defaultValues,
  });

  return (
    <FormProvider form={form} onSubmit={onSubmit}>
      {children}
    </FormProvider>
  );
};

describe('SwitchControl', () => {
  it('renders with label and input', () => {
    render(
      <Wrapper>
        <SwitchControl<FormValues> label="Test Label" name="notify" />
      </Wrapper>,
    );

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('handles user input and submits updated value', async () => {
    const onSubmitMock: SubmitHandler<FormValues> = vi.fn();

    render(
      <Wrapper onSubmit={onSubmitMock}>
        <SwitchControl<FormValues> label="Test Label" name="notify" />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    const input = screen.getByLabelText(/test label/i) as HTMLInputElement;
    expect(input.checked).toBe(false);

    fireEvent.click(input);
    expect(input.checked).toBe(true);

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        { notify: true },
        expect.anything(),
      );
    });
  });

  it('renders with initial value', () => {
    render(
      <Wrapper defaultValues={{ notify: true }}>
        <SwitchControl<FormValues> label="Test Label" name="notify" />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/test label/i) as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it('renders description', () => {
    render(
      <Wrapper defaultValues={{ notify: false }}>
        <SwitchControl<FormValues>
          label="Test Label"
          name="notify"
          description={
            <span data-testid="custom-description">Custom description</span>
          }
        />
      </Wrapper>,
    );

    expect(screen.getByTestId('custom-description')).toBeInTheDocument();
  });

  it('shows description id in aria-describedby', () => {
    const description = 'This is a description';
    render(
      <Wrapper>
        <SwitchControl<FormValues>
          label="Test Label"
          name="notify"
          description={description}
        />
      </Wrapper>,
    );

    const label = screen.getByLabelText('Test Label');
    expect(label).toHaveAttribute('aria-describedby', 'notify-description');

    const descriptionElement = document.getElementById('notify-description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(description);
  });

  it('shows error message when invalid', async () => {
    const Component = () => {
      const onSubmitMock = vi.fn();

      return (
        <Wrapper onSubmit={onSubmitMock}>
          <SwitchControl<FormValues>
            label="Test Label"
            name="notify"
            registerOptions={{
              required: 'This field is required',
            }}
          />
          <button type="submit">Submit</button>
        </Wrapper>
      );
    };

    render(<Component />);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(await screen.findByText(/This field is required/i)).toBeVisible();

    const checkbox = screen.getByLabelText(/test label/i);
    expect(checkbox.getAttribute('aria-describedby')).toMatch(/notify-error/);
  });

  it('hides the error message when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <SwitchControl<FormValues>
          label="Test Label"
          name="notify"
          registerOptions={{
            required: 'This field is required',
          }}
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      // error message should NOT appear
      expect(
        screen.queryByText(/This field is required/i),
      ).not.toBeInTheDocument();
    });
  });

  it('does not add error to aria-describedby when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <SwitchControl<FormValues>
          label="Test Label"
          name="notify"
          registerOptions={{
            required: 'This field is required',
          }}
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      const input = screen.getByLabelText(/Test Label/i);
      expect(input.getAttribute('aria-describedby')).not.toMatch(
        /message-error/,
      );
    });
  });

  it('does not render when shouldShow returns false', () => {
    render(
      <Wrapper>
        <SwitchControl<FormValues>
          name="notify"
          label="Test label"
          shouldShow={() => false}
        />
      </Wrapper>,
    );

    expect(screen.queryByLabelText(/Test label/i)).not.toBeInTheDocument();
  });

  it('renders when shouldShow returns true', () => {
    render(
      <Wrapper>
        <SwitchControl<FormValues>
          name="notify"
          label="Test label"
          shouldShow={() => true}
        />
      </Wrapper>,
    );

    expect(screen.getByLabelText(/Test label/i)).toBeInTheDocument();
  });

  it('re-renders when shouldShow depends on watched value', async () => {
    const user = userEvent.setup();

    const ConditionalForm = () => {
      const methods = useForm<{ notify: string; showField: boolean }>({
        defaultValues: { notify: '', showField: false },
      });

      return (
        <RHFFormProvider {...methods}>
          <label>
            <input
              type="checkbox"
              {...methods.register('showField')}
              aria-label="Toggle field"
            />
          </label>

          <SwitchControl<{ notify: string; showField: boolean }>
            name="notify"
            label="Test label"
            shouldShow={(watch) => watch('showField')}
          />
        </RHFFormProvider>
      );
    };

    render(<ConditionalForm />);

    // Initially hidden
    expect(screen.queryByLabelText(/Test Label/i)).not.toBeInTheDocument();

    // Toggle checkbox - field should appear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(await screen.findByLabelText(/Test Label/i)).toBeInTheDocument();

    // Toggle checkbox - field should disappear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(screen.queryByLabelText(/Test Label/i)).not.toBeInTheDocument();
  });
});
