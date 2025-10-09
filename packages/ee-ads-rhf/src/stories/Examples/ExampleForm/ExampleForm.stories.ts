import type { Meta, StoryObj } from '@storybook/react-vite';

import { ExampleForm } from './ExampleForm';

const meta = {
  title: 'Examples/ExampleForm',
  component: ExampleForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ExampleForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
