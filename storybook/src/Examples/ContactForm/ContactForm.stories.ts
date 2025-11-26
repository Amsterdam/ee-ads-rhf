import type { Meta, StoryObj } from '@storybook/react-vite';

import ContactForm from './ContactForm';

const meta = {
  title: 'Examples/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
