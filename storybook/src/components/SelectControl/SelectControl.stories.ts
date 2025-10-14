import type { Meta, StoryObj } from '@storybook/react-vite';

import { SelectControl } from './SelectControl';

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
    options: [
      {
        label: 'Groningen',
        value: 'gr',
      },
      {
        label: 'Fryslân (Friesland)',
        value: 'fr',
      },
      {
        label: 'Drenthe',
        value: 'dr',
      },
      {
        label: 'Overijssel',
        value: 'ov',
      },
      {
        label: 'Flevoland',
        value: 'fl',
      },
      {
        label: 'Gelderland',
        value: 'ge',
      },
      {
        label: 'Utrecht',
        value: 'ut',
      },
      {
        label: 'Noord-Holland',
        value: 'nh',
      },
      {
        label: 'Zuid-Holland',
        value: 'zh',
      },
      {
        label: 'Zeeland',
        value: 'ze',
      },
      {
        label: 'Noord-Brabant',
        value: 'nb',
      },
      {
        label: 'Limburg',
        value: 'li',
      },
    ],
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
    options: [
      'Groningen',
      'Fryslân (Friesland)',
      'Drenthe',
      'Overijssel',
      'Flevoland',
      'Gelderland',
      'Utrecht',
      'Noord-Holland',
      'Zuid-Holland',
      'Zeeland',
      'Noord-Brabant',
      'Limburg',
    ],
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
    options: [
      {
        label: 'Groningen',
        value: 'gr',
      },
      {
        label: 'Fryslân (Friesland)',
        value: 'fr',
      },
      {
        label: 'Drenthe',
        value: 'dr',
      },
      {
        label: 'Overijssel',
        value: 'ov',
      },
      {
        label: 'Flevoland',
        value: 'fl',
      },
      {
        label: 'Gelderland',
        value: 'ge',
      },
      {
        label: 'Utrecht',
        value: 'ut',
      },
      {
        label: 'Noord-Holland',
        value: 'nh',
      },
      {
        label: 'Zuid-Holland',
        value: 'zh',
      },
      {
        label: 'Zeeland',
        value: 'ze',
      },
      {
        label: 'Noord-Brabant',
        value: 'nb',
      },
      {
        label: 'Limburg',
        value: 'li',
      },
    ],
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
    options: [
      {
        label: 'Groningen',
        value: 'gr',
      },
      {
        label: 'Fryslân (Friesland)',
        value: 'fr',
      },
      {
        label: 'Drenthe',
        value: 'dr',
      },
      {
        label: 'Overijssel',
        value: 'ov',
      },
      {
        label: 'Flevoland',
        value: 'fl',
      },
      {
        label: 'Gelderland',
        value: 'ge',
      },
      {
        label: 'Utrecht',
        value: 'ut',
      },
      {
        label: 'Noord-Holland',
        value: 'nh',
      },
      {
        label: 'Zuid-Holland',
        value: 'zh',
      },
      {
        label: 'Zeeland',
        value: 'ze',
      },
      {
        label: 'Noord-Brabant',
        value: 'nb',
      },
      {
        label: 'Limburg',
        value: 'li',
      },
    ],
    disabled: true,
  },
};
