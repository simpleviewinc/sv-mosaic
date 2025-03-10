import type { MosaicLabelValue } from "@root/types";

export interface ChipListProps {
	disabled?: boolean;
	onDelete?: (options: MosaicLabelValue[]) => void;
	options: MosaicLabelValue[];
	maxInitialChips?: number;
}
