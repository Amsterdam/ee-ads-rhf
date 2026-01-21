import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { ReactNode } from 'react';
import {
  FormProvider as RHFFormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { SelectControl } from './SelectControl';
import { FormProvider } from '../FormProvider';
// import { FormProvider } from '../FormProvider/FormProvider';

type FormValues = {
  country: string;
};

const Wrapper = ({
  children,
  defaultValues = { country: '' },
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

describe('SelectControl', () => {
  it('renders with label, select and options', () => {
    render(
      <Wrapper>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          options={['A', 'B', 'C']}
        />
      </Wrapper>,
    );

    // Use regex lookup as select label can include (whitespace and
    // `(niet verplicht)`)
    expect(screen.getByLabelText(/Test Label/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Test Label/i)).toHaveAttribute(
      'id',
      'country',
    );
    expect(screen.getByRole('option', { name: 'A' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'B' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'C' })).toBeInTheDocument();
  });

  it('renders with object options', () => {
    render(
      <Wrapper>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          options={[
            {
              label: 'Option 1',
              value: 'option1',
            },
            {
              label: 'Option 2',
              value: 'option2',
            },
            {
              label: 'Option 3',
              value: 'option3',
            },
          ]}
        />
      </Wrapper>,
    );

    // Use regex lookup as select label can include (whitespace and
    // `(niet verplicht)`)
    expect(screen.getByLabelText(/Test Label/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Test Label/i)).toHaveAttribute(
      'id',
      'country',
    );
    expect(
      screen.getByRole('option', { name: 'Option 1' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Option 2' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Option 3' }),
    ).toBeInTheDocument();
  });

  it('renders with grouped options', () => {
    render(
      <Wrapper>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          options={[
            {
              group: 'Group 1',
              options: [
                { label: 'Grouped Label 1', value: 'group-1-label-1' },
                { label: 'Grouped Label 2', value: 'group-1-label-2' },
              ],
            },
            {
              group: 'Group 2',
              options: [
                { label: 'Grouped Label 3', value: 'group-2-label-1' },
                { label: 'Grouped Label 4', value: 'group-2-label-2' },
              ],
            },
          ]}
        />
      </Wrapper>,
    );

    // Use regex lookup as select label can include (whitespace and
    // `(niet verplicht)`)
    expect(screen.getByLabelText(/Test Label/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Test Label/i)).toHaveAttribute(
      'id',
      'country',
    );
    expect(screen.getByRole('group', { name: 'Group 1' })).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Grouped Label 1' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Grouped Label 2' }),
    ).toBeInTheDocument();
  });

  it('handles user input and submits updated value', async () => {
    const onSubmitMock: SubmitHandler<FormValues> = vi.fn();
    render(
      <Wrapper onSubmit={onSubmitMock}>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          options={['A', 'B', 'C']}
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    // Use regex lookup as select label can include (whitespace and
    // `(niet verplicht)`)
    fireEvent.change(screen.getByLabelText(/Test Label/i), {
      target: { value: 'B' },
    });
    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        { country: 'B' },
        expect.anything(),
      );
    });
  });

  it('renders with initial value', () => {
    render(
      <Wrapper defaultValues={{ country: 'C' }}>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          options={['A', 'B', 'C']}
        />
      </Wrapper>,
    );

    // Use regex lookup as select label can include (whitespace and
    // `(niet verplicht)`)
    const select = screen.getByLabelText(/Test Label/i);
    expect(select).toHaveValue('C');
  });

  it('renders description', () => {
    render(
      <Wrapper>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          description={
            <span data-testid="custom-description">Custom description</span>
          }
          options={['A', 'B', 'C']}
        />
      </Wrapper>,
    );

    expect(screen.getByTestId('custom-description')).toBeInTheDocument();
  });

  it('shows description id in aria-describedby', () => {
    const description = 'This is a description';
    render(
      <Wrapper>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          description={description}
          options={['A', 'B', 'C']}
        />
      </Wrapper>,
    );

    // Use regex lookup as select label can include (whitespace and
    // `(niet verplicht)`)
    const select = screen.getByLabelText(/Test Label/i);

    expect(select).toHaveAttribute('aria-describedby', 'country-description');

    const descriptionElement = document.getElementById('country-description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(description);
  });

  it('shows error message', async () => {
    render(
      <Wrapper>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          options={['A', 'B', 'C']}
          registerOptions={{ required: 'Country is required' }}
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(await screen.findByText('Country is required')).toBeInTheDocument();
  });

  it('hides the error message when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          options={['A', 'B', 'C']}
          registerOptions={{ required: 'Country is required' }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    // error message should NOT appear
    expect(screen.queryByText(/Country is required/i)).not.toBeInTheDocument();

    await waitFor(() => {
      const input = screen.getByLabelText(/Test Label/i);
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  it('does not add error to aria-describedby when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <SelectControl<FormValues>
          label="Test Label"
          name="country"
          options={['A', 'B', 'C']}
          registerOptions={{ required: 'Country is required' }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      const input = screen.getByLabelText(/Test Label/i);
      expect(input.getAttribute('aria-describedby')).not.toMatch(
        /country-error/,
      );
    });
  });

  it('does not render when shouldShow returns false', () => {
    render(
      <Wrapper>
        <SelectControl
          name="country"
          label="Test Label"
          options={['A', 'B', 'C']}
          shouldShow={() => false}
        />
      </Wrapper>,
    );

    expect(screen.queryByLabelText(/Test Label/i)).not.toBeInTheDocument();
  });

  it('renders when shouldShow returns true', () => {
    render(
      <Wrapper>
        <SelectControl
          name="country"
          label="Test Label"
          options={['A', 'B', 'C']}
          shouldShow={() => true}
        />
      </Wrapper>,
    );

    expect(screen.getByLabelText(/Test Label/i)).toBeInTheDocument();
  });

  it('re-renders when shouldShow depends on watched value', async () => {
    const user = userEvent.setup();

    const ConditionalForm = () => {
      const methods = useForm<{ country: string; showField: boolean }>({
        defaultValues: { country: '', showField: false },
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

          <SelectControl<{ country: string; showField: boolean }>
            name="country"
            label="Test Label"
            options={[
              {
                label: 'Option 1',
                value: 'option1',
              },
              {
                label: 'Option 2',
                value: 'option2',
              },
            ]}
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
