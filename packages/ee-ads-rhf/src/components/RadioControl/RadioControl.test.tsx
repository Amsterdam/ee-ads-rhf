import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SubmitHandler, useForm } from 'react-hook-form';
import userEvent from '@testing-library/user-event';
import { ReactNode } from 'react';
import { RadioControl } from './RadioControl';
import { FormProvider } from '../FormProvider/FormProvider';
import {
  SubmitHandler,
  useForm,
  FormProvider as RHFFormProvider,
} from 'react-hook-form';
import userEvent from '@testing-library/user-event';

type FormValues = {
  color: string;
};

const Wrapper = ({
  children,
  defaultValues = { color: '' },
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

describe('RadioControl', () => {
  it('renders with label and radio', () => {
    render(
      <Wrapper>
        <RadioControl<FormValues>
          label="Test Label"
          name="color"
          options={['Green', 'Yellow']}
        />
      </Wrapper>,
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Green')).toBeInTheDocument();
    expect(screen.getByText('Yellow')).toBeInTheDocument();
  });

  it('renders with object options', () => {
    render(
      <Wrapper>
        <RadioControl<FormValues>
          label="Test Label"
          name="color"
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ]}
        />
      </Wrapper>,
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Red')).toBeInTheDocument();
    expect(screen.getByText('Blue')).toBeInTheDocument();
  });

  it('handles user input and submits updated value', async () => {
    const user = userEvent.setup();
    const onSubmitMock: SubmitHandler<FormValues> = vi.fn();
    render(
      <Wrapper onSubmit={onSubmitMock}>
        <RadioControl<FormValues>
          label="Test Label"
          name="color"
          options={['Green', 'Yellow']}
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    await user.click(screen.getByText('Yellow'));
    await user.click(screen.getByText('Submit'));
    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        { color: 'Yellow' },
        expect.anything(),
      );
    });
  });

  it('renders with initial value', () => {
    render(
      <Wrapper defaultValues={{ color: 'Yellow' }}>
        <RadioControl<FormValues>
          label="Test Label"
          name="color"
          options={['Green', 'Yellow']}
        />
      </Wrapper>,
    );

    const greenRadio = screen.getByRole('radio', { name: 'Green' });
    const yellowRadio = screen.getByRole('radio', { name: 'Yellow' });

    expect(yellowRadio).toBeChecked();
    expect(greenRadio).not.toBeChecked();
  });

  it('renders description', () => {
    render(
      <Wrapper>
        <RadioControl<FormValues>
          label="Test Label"
          name="color"
          description={
            <span data-testid="custom-description">Custom description</span>
          }
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ]}
        />
      </Wrapper>,
    );

    expect(screen.getByTestId('custom-description')).toBeInTheDocument();
  });

  it('shows description id in aria-describedby', () => {
    const description = 'This is a description';
    render(
      <Wrapper>
        <RadioControl<FormValues>
          label="Test Label"
          name="color"
          description={description}
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ]}
        />
      </Wrapper>,
    );

    const fieldset = screen.getByText('Test Label').parentNode;
    expect(fieldset).toHaveAttribute('aria-describedby', 'color-description');
    expect(screen.getByText(description)).toHaveAttribute(
      'id',
      'color-description',
    );
  });

  it('shows error message', async () => {
    render(
      <Wrapper>
        <RadioControl<FormValues>
          label="Test Label"
          name="color"
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ]}
          registerOptions={{ required: 'Color is required' }}
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(await screen.findByText('Color is required')).toBeInTheDocument();
  });

  it('hides the error message when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <RadioControl<FormValues>
          label="Test Label"
          name="color"
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ]}
          registerOptions={{ required: 'Color is required' }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      // error message should NOT appear
      expect(screen.queryByText(/Color is required/i)).not.toBeInTheDocument();
    });
  });

  it('does not render when shouldShow returns false', () => {
    render(
      <Wrapper>
        <RadioControl<FormValues>
          name="color"
          label="Test Label"
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ]}
          shouldShow={() => false}
        />
      </Wrapper>,
    );

    expect(screen.queryByLabelText(/Test Label/i)).not.toBeInTheDocument();
  });

  it('renders when shouldShow returns true', () => {
    render(
      <Wrapper>
        <RadioControl<FormValues>
          name="color"
          label="Test Label"
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ]}
          shouldShow={() => true}
        />
      </Wrapper>,
    );

    expect(
      screen.getByRole('radiogroup', { name: /Test Label/i }),
    ).toBeInTheDocument();
  });

  it('re-renders when shouldShow depends on watched value', async () => {
    const user = userEvent.setup();

    const ConditionalForm = () => {
      const methods = useForm<{ color: string; showField: boolean }>({
        defaultValues: { color: '', showField: false },
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

          <RadioControl<{ color: string; showField: boolean }>
            name="color"
            label="Test Label"
            options={[
              { label: 'Red', value: 'red' },
              { label: 'Blue', value: 'blue' },
            ]}
            shouldShow={(watch) => watch('showField')}
          />
        </RHFFormProvider>
      );
    };

    render(<ConditionalForm />);

    // Initially hidden
    expect(
      screen.queryByRole('radiogroup', { name: /Test Label/i }),
    ).not.toBeInTheDocument();

    // Toggle checkbox - field should appear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(
      await screen.findByRole('radiogroup', { name: /Test Label/i }),
    ).toBeInTheDocument();

    // Toggle checkbox - field should disappear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(
      screen.queryByRole('radiogroup', { name: /Test Label/i }),
    ).not.toBeInTheDocument();
  });
});
