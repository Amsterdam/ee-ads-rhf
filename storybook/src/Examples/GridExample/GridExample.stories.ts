import type { Meta, StoryObj } from '@storybook/react-vite';
import GridExample from './GridExample';

const meta = {
  title: 'Examples/GridExample',
  component: GridExample,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: ``,
      },
      description: {
        component:
          'It is common to use the amsterdam-design-system Grid system with form templates. This is an example to demonstrate use of the FormProvider `useGrid` and `gridProps` props.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GridExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
