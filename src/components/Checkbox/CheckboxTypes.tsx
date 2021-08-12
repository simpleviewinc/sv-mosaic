import { CheckboxProps as MUICheckboxProps } from "@material-ui/core/Checkbox";

export interface CheckboxProps {
	checked: boolean;
	className?: string;
	edge?: MUICheckboxProps["edge"];
	onClick?: MUICheckboxProps["onClick"];
    label: string;
    disabled?: boolean;
	helperText?: string;
}