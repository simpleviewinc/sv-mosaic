import type { MosaicLabelValue } from "@root/types";
import type { Ref } from "react";

export interface ChipListProps {
	disabled?: boolean;
	onDelete?: (options: MosaicLabelValue[]) => void;
	options: MosaicLabelValue[];
	maxInitialChips?: number;
	ref?: Ref<HTMLDivElement>;
}
