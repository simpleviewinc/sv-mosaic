import { AdvancedSelectionInputSettings } from "@root/forms/FormFieldAdvancedSelection";
import { DataViewFilterProps } from "../DataView/DataViewTypes";
import { MosaicLabelValue } from "@root/types";

export type MultiSelectComparison = "in" | "not_in" | "all" | "exists" | "not_exists";

interface DataViewFilterMultiselectData {
	value?: any;
	comparison?: MultiSelectComparison | "";
}
export interface GetOptionsArgs {
	limit?: number
	skip?: number
	keyword?: string
}

export interface GetOptionsReturn {
	docs: MosaicLabelValue[]
	hasMore?: boolean
}

export type GetOptions = (val: GetOptionsArgs) => Promise<GetOptionsReturn> | GetOptionsReturn;

export interface DataViewFilterMultiselectProps extends DataViewFilterProps {
	data: DataViewFilterMultiselectData;
	args: {
		getOptions: GetOptions
		getSelected(val: any): Promise<any> | any;
		comparisons?:  MultiSelectComparison[];
		placeholder?: string;
		limit?: number;
	}
	onChange(val: DataViewFilterMultiselectData): void;
}

export interface DataViewFilterMultiselectDropdownContentProps {
	value?: any;
	selected: any[];
	comparison: DataViewFilterMultiselectProps["data"]["comparison"];
	comparisons?: {label: string; value: DataViewFilterMultiselectProps["data"]["comparison"]}[];
	getOptions: DataViewFilterMultiselectProps["args"]["getOptions"];
	onApply: (val: any) => void;
	isOpen: boolean;
	placeholder?: DataViewFilterMultiselectProps["args"]["placeholder"];
	limit?:  DataViewFilterMultiselectProps["args"]["limit"];
	onChange?: (val: any) => void;
	hideButtons?: boolean;
	createNewOption?: AdvancedSelectionInputSettings["createNewOption"];
	selectLimit?: AdvancedSelectionInputSettings["selectLimit"];
}
