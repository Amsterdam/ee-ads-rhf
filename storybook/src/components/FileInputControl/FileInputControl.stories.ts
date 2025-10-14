import type { Meta, StoryObj } from '@storybook/react-vite';

import { FileInputControl } from './FileInputControl';

const meta = {
  title: 'Components/FileInputControl',
  component: FileInputControl,
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
      escription: 'Optional description text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof FileInputControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Attachment',
    name: 'attachment',
    registerOptions: {
      required: 'An attachment is required',
    },
    wrapperProps: {},
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Attachment',
    name: 'attachment1',
    description: 'Please select your document.',
    registerOptions: {
      required: 'An attachment is required',
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Select a document',
    name: 'attachment2',
    disabled: true,
  },
};
