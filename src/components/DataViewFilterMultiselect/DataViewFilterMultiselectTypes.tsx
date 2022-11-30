/* type ValueTypes = string[];

type ComparisonTypes = "in" | "not_in" | "all" | "exists" | "not_exists" ;

type DataTypes = {
    value?: ValueTypes;
    comparison?: ComparisonTypes;
}

type SelectedTypes = {
    label?: string;
    value?: string;
}

export interface DataViewFilterMultiselectProps {
	data?: DataTypes;
	args?: {
        comparisons?: ComparisonTypes[];
        comparisonDefault?: ComparisonTypes;
        placeholder?: string;
        getOptions?: () => void;
        getSelected?: (value: ValueTypes) => any[];
    };
	onChange?: (data?: DataTypes) => void;
	label: string;
	type?: string;
	onRemove?: () => void;
}

export interface DataViewFilterMultiselectDropdownContentProps {
	value?: ValueTypes;
	selected?: SelectedTypes[];
	comparison?: ComparisonTypes;
	comparisons?: SelectedTypes[];
	getOptions?: (options: {limit?: number, skip?: number, keyword?: string}) => any;
	onApply?: (data: {value?: string[], comparison?: ComparisonTypes}) => void;
	isOpen?: boolean;
	placeholder?: string;
	onClose?: () => void;
} */
