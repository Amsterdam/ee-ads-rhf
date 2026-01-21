import { ReactNode } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {
  useForm,
  FormProvider as RHFFormProvider,
  SubmitHandler,
} from 'react-hook-form';
import userEvent from '@testing-library/user-event';
import { CheckboxControlGroup } from './CheckboxControlGroup';
import { FormProvider } from '../FormProvider/FormProvider';

type FormValues = {
  colors: string[];
};

const Wrapper = ({
  children,
  defaultValues = { colors: [] },
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

describe('CheckboxControlGroup', () => {
  it('renders with label and checkboxes', () => {
    render(
      <Wrapper>
        <CheckboxControlGroup<FormValues>
          label="Test Label"
          name="colors"
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
        <CheckboxControlGroup<FormValues>
          label="Test Label"
          name="colors"
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

  it('handles user input and submits updated values', async () => {
    const user = userEvent.setup();
    const onSubmitMock: SubmitHandler<FormValues> = vi.fn();

    render(
      <Wrapper onSubmit={onSubmitMock}>
        <CheckboxControlGroup<FormValues>
          label="Test Label"
          name="colors"
          options={['Green', 'Yellow']}
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    await user.click(screen.getByText('Green'));
    await user.click(screen.getByText('Yellow'));
    await user.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        { colors: ['Green', 'Yellow'] },
        expect.anything(),
      );
    });
  });

  it('renders with initial values', () => {
    render(
      <Wrapper defaultValues={{ colors: ['Yellow'] }}>
        <CheckboxControlGroup<FormValues>
          label="Test Label"
          name="colors"
          options={['Green', 'Yellow']}
        />
      </Wrapper>,
    );

    const greenCheckbox = screen.getByRole('checkbox', { name: 'Green' });
    const yellowCheckbox = screen.getByRole('checkbox', { name: 'Yellow' });

    expect(yellowCheckbox).toBeChecked();
    expect(greenCheckbox).not.toBeChecked();
  });

  it('renders description', () => {
    render(
      <Wrapper>
        <CheckboxControlGroup<FormValues>
          label="Test Label"
          name="colors"
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
        <CheckboxControlGroup<FormValues>
          label="Test Label"
          name="colors"
          description={description}
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ]}
        />
      </Wrapper>,
    );

    const fieldset = screen.getByText('Test Label').parentNode;
    expect(fieldset).toHaveAttribute('aria-describedby', 'colors-description');
    const descriptionElement = document.getElementById('colors-description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(description);
  });

  it('shows error message', async () => {
    render(
      <Wrapper>
        <CheckboxControlGroup<FormValues>
          label="Test Label"
          name="colors"
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ]}
          registerOptions={{
            validate: (value) =>
              value.length > 0 || 'At least one color is required',
          }}
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(
      await screen.findByText('At least one color is required'),
    ).toBeInTheDocument();
  });

  it('hides the error message when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <CheckboxControlGroup<FormValues>
          label="Test Label"
          name="colors"
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ]}
          registerOptions={{
            validate: (value) =>
              value.length > 0 || 'At least one color is required',
          }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(
        screen.queryByText(/At least one color is required/i),
      ).not.toBeInTheDocument();
    });
  });

  it('does not render when shouldShow returns false', () => {
    render(
      <Wrapper>
        <CheckboxControlGroup<FormValues>
          name="colors"
          label="Test Label"
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ]}
          shouldShow={() => false}
        />
      </Wrapper>,
    );

    expect(
      screen.queryByRole('group', { name: /Test Label/i }),
    ).not.toBeInTheDocument();
  });

  it('renders when shouldShow returns true', () => {
    render(
      <Wrapper>
        <CheckboxControlGroup<FormValues>
          name="colors"
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
      screen.getByRole('group', { name: /Test Label/i }),
    ).toBeInTheDocument();
  });

  it('re-renders when shouldShow depends on watched value', async () => {
    const user = userEvent.setup();

    const ConditionalForm = () => {
      const methods = useForm<{
        colors: string[];
        showField: boolean;
      }>({
        defaultValues: { colors: [], showField: false },
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

          <CheckboxControlGroup<{
            colors: string[];
            showField: boolean;
          }>
            name="colors"
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

    expect(
      screen.queryByRole('group', { name: /Test Label/i }),
    ).not.toBeInTheDocument();

    await user.click(screen.getByLabelText('Toggle field'));
    expect(
      await screen.findByRole('group', { name: /Test Label/i }),
    ).toBeInTheDocument();

    await user.click(screen.getByLabelText('Toggle field'));
    expect(
      screen.queryByRole('group', { name: /Test Label/i }),
    ).not.toBeInTheDocument();
  });
});
