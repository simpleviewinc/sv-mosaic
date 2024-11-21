import { DataViewFilterProps } from "../DataView/DataViewTypes";
import { NumberFieldInputSettings } from "../Field/FormFieldNumber";

interface DataViewFilterNumberRange {
	min?: number;
	max?: number;
}

export type DataViewFilterNumberOnChange = (value: DataViewFilterNumberRange) => void;

export interface DataViewFilterNumberProps extends DataViewFilterProps {
	data: DataViewFilterNumberRange;
	onChange: DataViewFilterNumberOnChange;
	args: Omit<NumberFieldInputSettings, "placeholder">;
}

export type DataViewFilterNumberDropdownContentProps = Pick<DataViewFilterNumberProps, "data" | "onChange" | "args"> & {
	onClose: () => void;
};
