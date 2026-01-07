import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextAreaControl } from './TextAreaControl';

const meta = {
  title: 'Components/TextAreaControl',
  component: TextAreaControl,
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
    hideFieldError: {
      control: 'boolean',
      default: 'false',
      description: 'Hides the invalid prop on the `Field` wrapper component',
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
        'Generic textarea props, for example, `className`, to apply to the design-system form field component',
    },
  },
} satisfies Meta<typeof TextAreaControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Comments',
    name: 'comments',
    registerOptions: {
      required: 'A comment is required',
    },
    wrapperProps: {},
    placeholder: 'Comments',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Comments',
    name: 'comments1',
    description: 'Please enter a comment',
    registerOptions: {
      required: 'A comment is required',
    },
    placeholder: 'Comments',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled comments',
    name: 'comments2',
    disabled: true,
    placeholder: 'Comments',
  },
};
