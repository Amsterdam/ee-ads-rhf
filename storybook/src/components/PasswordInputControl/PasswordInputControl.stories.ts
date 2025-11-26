import type { Meta, StoryObj } from '@storybook/react-vite';

import { PasswordInputControl } from './PasswordInputControl';

const meta = {
  title: 'Components/PasswordInputControl',
  component: PasswordInputControl,
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
    wrapperProps: {},
    placeholder: 'Password',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Password',
    name: 'password1',
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
    name: 'password2',
    disabled: true,
    placeholder: 'Password',
  },
};
