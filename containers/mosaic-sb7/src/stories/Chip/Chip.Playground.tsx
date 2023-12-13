import { ComponentProps } from "react";

import Chip from '@root/components/Chip';

interface ChipStoryProps {
    hasOnDelete: boolean
  }

export type ChipPlaygroundProps = ComponentProps<typeof Chip> & ChipStoryProps;

function ChipPlayground({hasOnDelete, ...props}: ChipPlaygroundProps) {
    return <Chip {...props} onDelete={hasOnDelete ? props.onDelete : undefined} />
}

export default ChipPlayground
