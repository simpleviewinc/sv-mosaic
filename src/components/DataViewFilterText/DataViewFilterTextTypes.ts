import { DataViewFilterProps } from "../DataView";

export type FilterTextComparison = "contains" | "not_contains" | "equals" | "not_equals" | "exists" | "not_exists";

export interface DataViewFilterTextProps extends DataViewFilterProps{
	data: { value?: string; comparison?: FilterTextComparison };
	args: {
		comparisons?: FilterTextComparison[];
		placeholder?: string;
		comparisonDefault?: string;
	};
	onChange: (value?: any) => void;
}

export interface DataViewFilterTextDropdownContentProps {
	value: string;
	placeholder?: string;
	onChange: DataViewFilterTextProps["onChange"];
	comparison: DataViewFilterTextProps["data"]["comparison"];
	comparisons?: { label: string; value: DataViewFilterTextProps["data"]["comparison"] }[];
	onClose: () => void;
}
