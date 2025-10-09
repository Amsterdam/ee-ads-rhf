import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextInputControl } from './TextInputControl';

const meta = {
  title: 'Example/TextInput',
  component: TextInputControl,
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
} satisfies Meta<typeof TextInputControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Name',
    name: 'name',
    registerOptions: {
      required: 'A name is required',
    },
    wrapperProps: {
      className: 'ams-mb-m',
    },
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Name',
    name: 'name',
    description: 'Please provide your name',
    registerOptions: {
      required: 'Please enter your name',
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled name',
    name: 'name',
    disabled: true,
  },
};
