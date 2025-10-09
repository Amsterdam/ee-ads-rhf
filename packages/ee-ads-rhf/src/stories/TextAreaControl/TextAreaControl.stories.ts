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
    label: {
      control: 'text',
      description: 'The textarea label',
    },
    description: {
      control: 'text',
      description: 'Optional description text',
    },
    disabled: {
      control: 'boolean',
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
    wrapperProps: {
      className: 'ams-mb-m',
    },
    placeholder: 'Comments',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Comments',
    name: 'comments',
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
    name: 'comments',
    disabled: true,
    placeholder: 'Comments',
  },
};
