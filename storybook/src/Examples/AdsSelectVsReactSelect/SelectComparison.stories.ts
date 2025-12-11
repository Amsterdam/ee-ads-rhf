import type { Meta, StoryObj } from '@storybook/react-vite';
import SelectComparison from './SelectComparison';

const meta = {
  title: 'Examples/ADS-select vs react-select',
  component: SelectComparison,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'This is an example to clearly show the differences in styling. The first row is single select with no default value, the second row is single select with a default value. The third row is multi select with default values.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectComparison>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
