import type { Meta, StoryObj } from '@storybook/react-vite';

import BookingForm from './BookingForm';

const meta = {
  title: 'Examples/BookingForm',
  component: BookingForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BookingForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
