import type { DataViewFilterMultiselectProps } from "@root/components/DataViewFilterMultiselect";
import type { MosaicLabelValue } from "@root/types";

export interface UseAdvancedOptionsParams {
	getOptions: DataViewFilterMultiselectProps["args"]["getOptions"];
	limit?: number;
	onCreateNew?: (keyword: string) => Promise<MosaicLabelValue>;
}

export interface UseAdvancedOptionsState {
	options: MosaicLabelValue[];
	hasMore: boolean;
	skip: number;
	keyword?: string;
	isLoading: boolean;
}

export interface UseAdvancedOptionsResult {
	state: UseAdvancedOptionsState;
	reset: () => void;
	loadMore: () => void;
	debouncedSetKeyword: (keyword: string) => void;
	createNewOption?: (keyword: string) => Promise<MosaicLabelValue>;
}
