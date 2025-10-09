import type { Meta, StoryObj } from '@storybook/react-vite';

import { TimeControl } from './TimeControl';

const meta = {
  title: 'Components/TimeControl',
  component: TimeControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The checkbox label',
    },
    description: {
      control: 'text',
      description: 'Optional description text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof TimeControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Start time',
    name: 'start_time',
    registerOptions: {
      required: 'A start time is required',
    },
    wrapperProps: {
      className: 'ams-mb-m',
    },
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Start time',
    name: 'start_time',
    description: 'Please provide a start time',
    registerOptions: {
      required: 'A start time is required',
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled name',
    name: 'start_time',
    disabled: true,
  },
};
