import type { Meta, StoryObj } from '@storybook/react-vite';

import { CheckboxControl } from './CheckboxControl';

const meta = {
  title: 'Components/CheckboxControl',
  component: CheckboxControl,
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
} satisfies Meta<typeof CheckboxControl>;

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
    label: 'Disabled checkbox',
    name: 'terms',
    disabled: true,
  },
};
