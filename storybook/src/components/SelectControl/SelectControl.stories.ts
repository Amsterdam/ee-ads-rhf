import type { Meta, StoryObj } from '@storybook/react-vite';

import { SelectControl } from './SelectControl';
import provinces from '../../utils/provinces';

const meta = {
  title: 'Components/SelectControl',
  component: SelectControl,
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
} satisfies Meta<typeof SelectControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Province',
    name: 'province',
    options: provinces,
    registerOptions: {
      required: 'A province is required',
    },
    wrapperProps: {},
  },
};

export const WithPlainArray: Story = {
  args: {
    label: 'Province',
    name: 'province1',
    options: provinces.map(({ label }) => label),
    registerOptions: {
      required: 'A province is required',
    },
    wrapperProps: {},
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Province',
    name: 'province2',
    options: provinces,
    description: 'A province is required',
    registerOptions: {
      required: 'You must select a province',
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled province',
    name: 'province3',
    options: provinces,
    disabled: true,
  },
};
