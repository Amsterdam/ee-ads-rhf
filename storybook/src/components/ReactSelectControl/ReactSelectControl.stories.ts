import type { Meta, StoryObj } from '@storybook/react-vite';

import { ReactSelectControl } from './ReactSelectControl';
import provinces from '../../utils/provinces';
import { SelectOption } from 'packages/ee-ads-rhf/dist/types';

const meta = {
  title: 'Components/ReactSelectControl',
  component: ReactSelectControl,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The react-select label',
    },
    name: {
      control: 'text',
      description: 'The react-select name',
    },
    description: {
      control: 'text',
      description: 'Optional description text',
    },
    options: {
      control: 'object',
      description: 'Array of options that populate the select menu',
    },
    registerOptions: {
      control: 'object',
      description: '...',
    },
    isMulti: {
      control: 'boolean',
      description: 'Support multiple selected options',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof ReactSelectControl>;

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
