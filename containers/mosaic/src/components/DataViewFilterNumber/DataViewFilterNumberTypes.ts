import { DataViewFilterProps } from "../DataView/DataViewTypes";
import { NumberFieldInputSettings } from "../Field/FormFieldNumber";

type DataViewFilterNumberRange = {
	min?: number;
	max?: number;
};

export interface DataViewFilterNumberOnChange {
	(value: DataViewFilterNumberRange): void;
}

export interface DataViewFilterNumberProps extends DataViewFilterProps {
	data: DataViewFilterNumberRange;
	onChange: DataViewFilterNumberOnChange;
	args: Omit<NumberFieldInputSettings, "placeholder">;
}

export type DataViewFilterNumberDropdownContentProps = Pick<DataViewFilterNumberProps, "data" | "onChange" | "args"> & {
	onClose: () => void;
};
