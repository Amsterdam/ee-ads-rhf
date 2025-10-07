import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import FileInputControl from './FileInputControl';
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

describe('TextInputControl', () => {
  it('renders with label and input', () => {
    render(
      <Wrapper>
        <FileInputControl<FormValues>
          name="attachment"
          label="Your documents"
        />
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
        <FileInputControl<FormValues>
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
        <FileInputControl<FormValues>
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
});
