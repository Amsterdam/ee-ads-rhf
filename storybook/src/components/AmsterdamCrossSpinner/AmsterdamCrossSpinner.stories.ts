import type { Meta, StoryObj } from '@storybook/react-vite';
import { AmsterdamCrossSpinner } from '@amsterdam/ee-ads-rhf';

const meta = {
  title: 'Components/AmsterdamCrossSpinner',
  component: AmsterdamCrossSpinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A decorative loading spinner with three animated Amsterdam crosses. Styling is bundled with the component. The spinner is hidden from assistive technology; provide an accessible loading message separately.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AmsterdamCrossSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
