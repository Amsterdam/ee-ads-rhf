import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioControl } from './RadioControl';

const meta = {
  title: 'Components/RadioControl',
  component: RadioControl,
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
        'Whether to render tshe field, useful for conditional form elements',
    },
    attributes: {
      control: 'object',
      description:
        'Generic input props, for example, `className`, to apply to the design-system form field component',
    },
  },
} satisfies Meta<typeof RadioControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Type',
    options: [
      {
        label: 'A',
        value: 'a',
      },
      {
        label: 'B',
        value: 'b',
      },
    ],
    registerOptions: {
      required: 'A type is required',
    },
    wrapperProps: {},
  },
};

export const WithPlainArray: Story = {
  args: {
    label: 'Type',
    name: 'type',
    options: ['A', 'B', 'C'],
    registerOptions: {
      required: 'A type is required',
    },
    wrapperProps: {},
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Type',
    name: 'type1',
    options: [
      {
        label: 'A',
        value: 'a',
      },
      {
        label: 'B',
        value: 'b',
      },
    ],
    description: 'A type is required',
    registerOptions: {
      required: 'You must select a type',
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled select a type',
    name: 'type2',
    options: [
      {
        label: 'A',
        value: 'a',
      },
      {
        label: 'B',
        value: 'b',
      },
    ],
    disabled: true,
  },
};
