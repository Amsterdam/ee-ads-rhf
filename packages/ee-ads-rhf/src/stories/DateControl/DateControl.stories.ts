import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { DateControl } from './DateControl';

const meta = {
  title: 'Example/DateInput',
  component: DateControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The date input label',
    },
    description: {
      control: 'text',
      escription: 'Optional description text'
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof DateControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Start date',
    registerOptions: {
      required: 'The start date is required'
    },
    wrapperProps: {
      className: 'ams-md-m',
    },
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Start date',
    description: 'Please select a date.',
    registerOptions: {
      required: 'The start date is required'
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Select a date',
    disabled: true,
  }
};
