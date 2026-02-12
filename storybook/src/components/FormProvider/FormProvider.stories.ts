import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormProvider } from './FormProvider';

const meta = {
  title: 'Form/FormProvider',
  component: FormProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    useGrid: {
      control: 'boolean',
      description: 'Wraps children in the Grid layout',
    },
    noValidate: {
      control: 'boolean',
      description: 'Disables native browser validation',
    },
    gridProps: {
      control: 'object',
      description: 'Props passed to the Grid component',
    },
  },
} satisfies Meta<typeof FormProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    useGrid: false,
  },
};

export const WithGridLayout: Story = {
  args: {
    useGrid: true,
    gridProps: { paddingBottom: '2x-large', paddingTop: 'large' },
  },
};
