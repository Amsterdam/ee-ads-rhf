import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioControl } from './RadioControl';

const meta = {
  title: 'Example/Radio',
  component: RadioControl,
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
} satisfies Meta<typeof RadioControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Type',
    options: [
      {
        label: 'A',
        value: 'a',
      },
      {
        label: 'B',
        value: 'b',
      },
    ],
    registerOptions: {
      required: 'A type is required',
    },
    wrapperProps: {
      className: 'ams-mb-m',
    },
  },
};

export const WithPlainArray: Story = {
  args: {
    label: 'Type',
    options: ['A', 'B', 'C'],
    registerOptions: {
      required: 'A type is required',
    },
    wrapperProps: {
      className: 'ams-mb-m',
    },
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Type',
    options: [
      {
        label: 'A',
        value: 'a',
      },
      {
        label: 'B',
        value: 'b',
      },
    ],
    description: 'A type is required',
    registerOptions: {
      required: 'You must select a type',
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled select a type',
    options: [
      {
        label: 'A',
        value: 'a',
      },
      {
        label: 'B',
        value: 'b',
      },
    ],
    disabled: true,
  },
};
