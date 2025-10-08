import type { Meta, StoryObj } from '@storybook/react-vite';

import { PasswordInputControl } from './PasswordInputControl';

const meta = {
  title: 'Example/PasswordInput',
  component: PasswordInputControl,
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
} satisfies Meta<typeof PasswordInputControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Password',
    name: 'password',
    registerOptions: {
      required: 'A password is required',
    },
    wrapperProps: {
      className: 'ams-mb-m',
    },
    placeholder: 'Password',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Password',
    name: 'password',
    description: 'Passwords must consist of at least 8 characters and ...',
    registerOptions: {
      required: 'You must accept the terms',
    },
    placeholder: 'Password',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled password',
    name: 'password',
    disabled: true,
    placeholder: 'Password',
  },
};
