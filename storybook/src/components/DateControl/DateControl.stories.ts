import type { Meta, StoryObj } from '@storybook/react-vite';

import { DateControl } from './DateControl';

const meta = {
  title: 'Components/DateControl',
  component: DateControl,
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
        'Generic props, for example, className, to apply to the `Field` wrapper component',
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
  },
} satisfies Meta<typeof DateControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Start date',
    name: 'start_date',
    registerOptions: {
      required: 'The start date is required',
    },
    wrapperProps: {},
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Start date',
    name: 'start_date1',
    description: 'Please select a date.',
    registerOptions: {
      required: 'The start date is required',
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Select a date',
    name: 'start_date2',
    disabled: true,
  },
};
