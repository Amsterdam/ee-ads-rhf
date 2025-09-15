import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import FormProvider from './FormProvider';

describe('FormProvider', () => {
  it('renders children inside the form', () => {
    render(
      <FormProvider onSubmit={vi.fn()} defaultValues={{ email: '' }}>
        <div data-testid="child">Test</div>
      </FormProvider>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});
