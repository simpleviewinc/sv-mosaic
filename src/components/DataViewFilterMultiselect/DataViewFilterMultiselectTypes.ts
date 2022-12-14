import { DataViewFilterProps } from "../DataView/DataViewTypes";

export type MultiSelectComparison = "in" | "not_in" | "all" | "exists" | "not_exists";

interface DataViewFilterMultiselectData {
	value?: any;
	comparison?: MultiSelectComparison | "";
}

export interface DataViewFilterMultiselectProps extends DataViewFilterProps {
	data: DataViewFilterMultiselectData;
	args: {
		getOptions(val: any): Promise<any> | any;
		getSelected(val: any): Promise<any> | any;
		comparisons?:  MultiSelectComparison[];
		placeholder?: string;
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
}
