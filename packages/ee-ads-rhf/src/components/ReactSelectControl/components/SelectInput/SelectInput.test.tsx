import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SelectInput from './SelectInput';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { SelectInstance } from 'react-select';
import { SelectOption } from '../../../../types';

const ref = createRef<SelectInstance<SelectOption> | null>();

describe('SelectInput', () => {
  it('renders with options and selected value', () => {
    const handleChange = vi.fn();
    render(
      <SelectInput
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
        value={{ value: 'one', label: 'One' }}
        ref={ref}
        onChange={handleChange}
      />,
    );

    expect(screen.getByText('One')).toBeInTheDocument();
  });

  it('calls onChange when a new option is selected', async () => {
    const handleChange = vi.fn();
    render(
      <SelectInput
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
        ref={ref}
        onChange={handleChange}
      />,
    );

    const selectControl = screen.getByRole('combobox');
    await userEvent.click(selectControl);
    await userEvent.click(screen.getByText('Two'));

    expect(handleChange).toHaveBeenCalled();
  });

  it('adds aria-invalid and error message when error is passed', () => {
    render(
      <SelectInput
        options={[]}
        error="This field is required"
        ref={ref}
        onChange={() => {}}
      />,
    );

    const combo = screen.getByRole('combobox');
    expect(combo).toHaveAttribute('aria-invalid', 'true');
    expect(combo).toHaveAttribute(
      'aria-errormessage',
      'This field is required',
    );
  });

  it('adds aria-invalid and error message when error is passed', () => {
    render(
      <SelectInput
        options={[]}
        error="This field is required"
        ref={ref}
        onChange={() => {}}
      />,
    );

    const combo = screen.getByRole('combobox');
    expect(combo).toHaveAttribute('aria-invalid', 'true');
    expect(combo).toHaveAttribute(
      'aria-errormessage',
      'This field is required',
    );
  });

  it('respects isDisabled and isClearable props', () => {
    render(
      <SelectInput
        options={[{ value: 'one', label: 'One' }]}
        isDisabled
        isClearable={false}
        ref={ref}
        onChange={() => {}}
      />,
    );

    const combo = screen.getByRole('combobox', { hidden: true });
    expect(combo).toBeDisabled();
  });

  it('renders menu into the specified portal target', async () => {
    const portalRoot = document.createElement('div');
    document.body.appendChild(portalRoot);

    render(
      <SelectInput
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
        onChange={() => {}}
        ref={ref}
        menuPortalTarget={portalRoot}
      />,
    );

    const select = screen.getByRole('combobox');
    await userEvent.click(select);

    // Wait for the portal to render
    expect(portalRoot).toHaveTextContent('One');
    expect(portalRoot).toHaveTextContent('Two');
  });
});
