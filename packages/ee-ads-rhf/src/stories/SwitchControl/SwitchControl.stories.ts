import type { Meta, StoryObj } from '@storybook/react-vite';

import { SwitchControl } from './SwitchControl';

const meta = {
  title: 'Components/SwitchControl',
  component: SwitchControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The switch label',
    },
    description: {
      control: 'text',
      description: 'Optional description text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof SwitchControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Do you agree?',
    name: 'terms',
    registerOptions: {
      required: 'The terms are required',
    },
    wrapperProps: {
      className: 'ams-mb-m',
    },
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Accept terms and conditions',
    name: 'terms',
    description: 'Please read the terms carefully before accepting',
    registerOptions: {
      required: 'You must accept the terms',
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    name: 'terms',
    disabled: true,
  },
};
