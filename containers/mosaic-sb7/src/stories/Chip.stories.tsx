import { ComponentProps } from "react";
import type { Meta, StoryObj } from '@storybook/react';

import Chip from '@root/components/Chip';

interface ChipStoryProps {
  hasOnDelete: boolean
}

type ChipProps = ComponentProps<typeof Chip> & ChipStoryProps;

function ChipStory({hasOnDelete, ...props}: ChipProps) {
  return <Chip {...props} onDelete={hasOnDelete ? props.onDelete : undefined} />
}

const meta: Meta<ChipProps> = {
  title: 'Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ChipStory,
  args: {
    label: 'Button',
    hasOnDelete: false
  },
};

export const Docs = (props: ComponentProps<typeof Chip>) => <Chip {...props} />
