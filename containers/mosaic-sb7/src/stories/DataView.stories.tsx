import { ComponentProps } from "react";
import type { Meta, StoryObj } from '@storybook/react';

import DataView from '@root/components/DataView';

interface DataViewStoryProps {}

type DataViewProps = ComponentProps<typeof DataView> & DataViewStoryProps;

function DataViewStory({...props}: DataViewProps) {
  return <DataView {...props} />
}

const meta: Meta<DataViewProps> = {
  title: 'Atoms/DataView',
  component: DataView,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    columns: [{name: "id", label: "ID"}, {name: "title", label: "Title"}],
    data: [{id: 1, title: "Item 1"}, {id: 2, title: "Item 2"}, {id: 3, title: "Item 3"}],
    skip: 0,
    count: 3
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: DataViewStory,
};
