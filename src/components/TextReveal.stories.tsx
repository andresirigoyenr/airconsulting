import type { Meta, StoryObj } from '@storybook/react';
import TextReveal from './TextReveal';

const meta: Meta<typeof TextReveal> = {
  title: 'Components/TextReveal',
  component: TextReveal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to be revealed',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    delay: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
      description: 'Delay before animation starts (in seconds)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Hello World',
    className: '',
    delay: 0,
  },
};

export const LongText: Story = {
  args: {
    text: 'This is a longer text that will demonstrate the word-by-word animation effect',
    className: '',
    delay: 0,
  },
};

export const WithDelay: Story = {
  args: {
    text: 'Delayed Animation',
    className: '',
    delay: 1,
  },
};

export const CustomStyling: Story = {
  args: {
    text: 'Custom Styled Text',
    className: 'text-2xl font-bold text-blue-600',
    delay: 0,
  },
};
