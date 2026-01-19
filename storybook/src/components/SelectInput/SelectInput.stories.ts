import type { Meta, StoryObj } from '@storybook/react-vite';

import { SelectInput } from './SelectInput';
import provinces from '../../utils/provinces';

const meta = {
  title: 'Components/ReactSelectControl - SelectInput',
  component: SelectInput,
  tags: ['autodocs'],
  argTypes: {
    isClearable: {
      control: 'object',
      description:
        'Generic props, for example, className, to apply to the `Field` wrapper component',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disables user interaction with the select.',
    },
    isMulti: {
      control: 'boolean',
      description: 'Enable multiple selected options',
    },
    options: {
      control: 'object',
      description:
        'List of selectable options. Each option is an object `{ label, value }`',
    },
    id: {
      control: 'text',
      description: 'Form field id',
    },
    name: {
      control: 'text',
      description: 'Form field name',
    },
    value: {
      control: 'text',
      description: 'Form field value',
    },
    customAriaDescribedBy: {
      control: 'text',
      description:
        'By default React-Select only handles errors in `aria-describedby`, this enables the `describedby` tag if you use a description',
    },
    menuPortalTarget: {
      control: 'object',
      description:
        'React-select exposes a menuPortalTarget prop, that lets you portal the select menu to a dom node of your choosing',
    },
    ref: {
      control: 'object',
      description:
        'A ref that exposes the underlying DOM element or component instance',
    },
    error: {
      control: 'text',
      description:
        'An error message, used to display error styles and aria invalid state',
    },
    onChange: {
      control: 'object',
      description: 'Handle blur events on the component',
    },
    onBlur: {
      control: 'object',
      description: 'Handle. change events on the component',
    },
  },
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 'province',
    name: 'province',
    options: provinces,
    error: undefined,
  },
};

export const WithMultiple: Story = {
  args: {
    id: 'province2',
    name: 'province',
    options: provinces,
    isMulti: true,
    error: '',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled province',
    name: 'province4',
    options: provinces,
    isDisabled: true,
  },
};
