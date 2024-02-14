import { AdvancedSelectionInputSettings } from "@root/components/Field/FormFieldAdvancedSelection";
import { DataViewFilterGetOptionsReturn, DataViewFilterProps } from "../DataView";
import { MosaicLabelValue } from "@root/types";

export type MultiSelectComparison = "in" | "not_in" | "all" | "exists" | "not_exists";

interface DataViewFilterMultiselectData {
	value?: any;
	comparison?: MultiSelectComparison | "";
}

export interface GetOptionsArgs {
	limit?: number;
	skip?: number;
	keyword?: string;
}

export interface GetOptionsReturn {
	docs: MosaicLabelValue[];
	hasMore?: boolean;
}

export type GetOptions = (val: GetOptionsArgs) => Promise<DataViewFilterGetOptionsReturn> | DataViewFilterGetOptionsReturn;

export interface DataViewFilterMultiselectProps extends DataViewFilterProps {
	data: DataViewFilterMultiselectData;
	args: {
		getOptions: GetOptions;
		getSelected(val: any): Promise<any> | any;
		comparisons?: MultiSelectComparison[];
		placeholder?: string;
		limit?: number;
	};
	onChange(val: DataViewFilterMultiselectData): void;
}

export interface DataViewFilterMultiselectDropdownContentProps {
	selected: MosaicLabelValue[];
	comparison: DataViewFilterMultiselectProps["data"]["comparison"];
	comparisons?: { label: string; value: DataViewFilterMultiselectProps["data"]["comparison"] }[];
	getOptions: DataViewFilterMultiselectProps["args"]["getOptions"];
	onApply: ({ value, comparison }: { value: string[]; comparison: DataViewFilterMultiselectProps["data"]["comparison"] }) => void;
	isOpen: boolean;
	placeholder?: DataViewFilterMultiselectProps["args"]["placeholder"];
	limit?: DataViewFilterMultiselectProps["args"]["limit"];
	onChange?: (val: MosaicLabelValue[]) => void;
	hideButtons?: boolean;
	createNewOption?: AdvancedSelectionInputSettings["createNewOption"];
	selectLimit?: AdvancedSelectionInputSettings["selectLimit"];
}
