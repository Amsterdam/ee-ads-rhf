import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { FileInputControl } from './FileInputControl';
import userEvent from '@testing-library/user-event';

type FormValues = {
  attachment: string;
};

const Wrapper = ({
  children,
  defaultValues = { attachment: '' },
}: {
  children: React.ReactNode;
  defaultValues?: Partial<FormValues>;
}) => {
  const methods = useForm<FormValues>({ defaultValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('FileInputControl', () => {
  it('renders with label and input', () => {
    render(
      <Wrapper>
        <FileInputControl name="attachment" label="Your documents" />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/Your documents/i);
    expect(input).toBeInTheDocument();
  });

  it('handles user file selection', async () => {
    const user = userEvent.setup();

    render(
      <Wrapper>
        <FileInputControl name="attachment" label="Your documents" />
      </Wrapper>,
    );

    const fileInput = screen.getByLabelText(
      /Your documents/i,
    ) as HTMLInputElement;
    const mockFile = new File(['file content'], 'example.txt', {
      type: 'text/plain',
    });

    await user.upload(fileInput, mockFile);

    // Check that the input’s files property contains the uploaded file
    expect(fileInput.files).toHaveLength(1);
    expect(fileInput.files?.[0]).toStrictEqual(mockFile);
    expect(fileInput.files?.[0].name).toBe('example.txt');
  });

  it('renders description when provided', () => {
    const description = 'Please select your documents.';

    render(
      <Wrapper>
        <FileInputControl
          name="attachment"
          label="Your documents"
          description={description}
        />
      </Wrapper>,
    );

    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('shows description id in aria-describedby', () => {
    render(
      <Wrapper>
        <FileInputControl
          name="attachment"
          label="Your documents"
          description="Please select your documents."
        />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/Your documents/i);

    expect(input).toHaveAttribute(
      'aria-describedby',
      expect.stringContaining('attachment-description'),
    );
  });

  it('hides the error message when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <FileInputControl<FormValues>
          name="attachment"
          label="Your documents"
          description="Please select your documents."
          registerOptions={{ required: 'Your documents is required' }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    // error message should NOT appear
    expect(
      screen.queryByText(/Your documents is required/i),
    ).not.toBeInTheDocument();
  });

  it('does not add error to aria-describedby when hideErrorMessage is true', async () => {
    render(
      <Wrapper>
        <FileInputControl<FormValues>
          name="attachment"
          label="Your documents"
          description="Please select your documents."
          registerOptions={{ required: 'Your documents is required' }}
          hideErrorMessage
        />
        <button type="submit">Submit</button>
      </Wrapper>,
    );

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      const input = screen.getByLabelText(/Your documents/i);
      expect(input.getAttribute('aria-describedby')).not.toMatch(
        /attachment-error/i,
      );
    });
  });

  it('does not render when shouldShow returns false', () => {
    render(
      <Wrapper>
        <FileInputControl
          name="attachment"
          label="Your documents"
          shouldShow={() => false}
        />
      </Wrapper>,
    );

    expect(screen.queryByLabelText(/Your Documents/i)).not.toBeInTheDocument();
  });

  it('renders when shouldShow returns true', () => {
    render(
      <Wrapper>
        <FileInputControl
          name="attachment"
          label="Your documents"
          shouldShow={() => true}
        />
      </Wrapper>,
    );

    expect(screen.getByLabelText(/Your Documents/i)).toBeInTheDocument();
  });

  it('re-renders when shouldShow depends on watched value', async () => {
    const user = userEvent.setup();

    const ConditionalForm = () => {
      const methods = useForm<{ attachment: string; showField: boolean }>({
        defaultValues: { attachment: '', showField: false },
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

          <FileInputControl<{ attachment: string; showField: boolean }>
            name="attachment"
            label="Your documents"
            shouldShow={(watch) => watch('showField')}
          />
        </FormProvider>
      );
    };

    render(<ConditionalForm />);

    // Initially hidden
    expect(screen.queryByLabelText(/Your Documents/i)).not.toBeInTheDocument();

    // Toggle checkbox - field should appear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(await screen.findByLabelText(/Your Documents/i)).toBeInTheDocument();

    // Toggle checkbox - field should disappear
    await user.click(screen.getByLabelText('Toggle field'));
    expect(screen.queryByLabelText(/Your Documents/i)).not.toBeInTheDocument();
  });
});
