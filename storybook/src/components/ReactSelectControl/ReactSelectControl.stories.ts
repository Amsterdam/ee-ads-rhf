import type { Meta, StoryObj } from '@storybook/react-vite';

import { ReactSelectControl } from './ReactSelectControl';
import provinces from '../../utils/provinces';

const meta = {
  title: 'Components/ReactSelectControl',
  component: ReactSelectControl,
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
    options: {
      control: 'object',
      description:
        'List of selectable options. Each option is an object `{ label, value }`',
    },
    isMulti: {
      control: 'boolean',
      description: 'Enable multiple selected options',
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
    inputProps: {
      control: 'object',
      description:
        'Optional additional props for the underlying `InputAutoSelect` component.',
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

export const WithMultiple: Story = {
  args: {
    label: 'Province',
    name: 'province3',
    options: provinces,
    description: 'You can select multiple provinces',
    isMulti: true,
    registerOptions: {
      required: 'You must select a province',
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled province',
    name: 'province4',
    options: provinces,
    disabled: true,
  },
};
