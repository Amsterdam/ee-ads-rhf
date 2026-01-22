import type { Meta, StoryObj } from '@storybook/react-vite';

import { CheckboxControlGroup } from './CheckboxControlGroup';

const meta = {
  title: 'Components/CheckboxControlGroup',
  component: CheckboxControlGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Form field name, used by React Hook Form for registration.',
    },
    label: {
      control: 'text',
      description: 'Field label displayed above the select.',
    },
    description: {
      control: 'text',
      description: 'Optional helper text displayed below the label.',
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables user interaction with the select.',
    },
    registerOptions: {
      control: 'object',
      description: 'Validation rules passed directly to React Hook Form.',
    },
    wrapperProps: {
      control: 'object',
      description:
        'Generic props, for example, `className`, to apply to the `Field` wrapper component',
    },
    hideErrorMessage: {
      control: 'boolean',
      default: 'false',
      description: 'Hides the error message text',
    },
    shouldShow: {
      control: 'boolean',
      default: 'true',
      description:
        'Whether to render the field, useful for conditional form elements',
    },
    attributes: {
      control: 'object',
      description:
        'Generic input props, for example, `className`, to apply to the design-system form field component',
    },
  },
} satisfies Meta<typeof CheckboxControlGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Which options do you prefer?',
    options: [
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
      { label: 'Option C', value: 'c' },
    ],
    name: 'terms',
    registerOptions: {
      required: 'At least one option is required',
    },
    wrapperProps: {},
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Which options do you prefer?',
    name: 'terms1',
    description: 'Multiple options can be selected.',
    registerOptions: {
      required: 'At least one option is required',
    },
    options: [
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
      { label: 'Option C', value: 'c' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: 'Which options do you prefer?',
    name: 'terms2',
    options: [
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
      { label: 'Option C', value: 'c' },
    ],
    disabled: true,
  },
};
