import type { CheckboxProps as MUICheckboxProps } from "@mui/material/Checkbox";

export interface CheckboxProps extends MUICheckboxProps {
	/**
	 * Boolean value that indicates whether the
	 * current checkbox is selected or not
	 */
	checked: boolean;
	/**
	 * Material UI native prop for the checkbox:
	 * Boolean value that when true renders the
	 * checkbox as indeterminate
	 */
	indeterminate?: MUICheckboxProps["indeterminate"];
	/**
	 * Additional custom css class for styling
	 * the component
	 */
	className?: string;
	/**
	 * Material UI native prop for the checkbox:
	 * Negative margin given to the checkbox to
	 * counteract the padding on one side
	 */
	edge?: MUICheckboxProps["edge"];
	/**
	 * Material UI native prop for the checkbox:
	 * Function to be executed once the user clicks
	 * on the checkbox
	 */
	onClick?: MUICheckboxProps["onClick"];
	/**
	 * Text to be shown next to the current
	 * checkbox
	 */
	label?: string;
	/**
	 * Boolean value that indicates whether the
	 * current checkbox can be selected or not
	 */
	disabled?: boolean;
	/**
	 * A unique ID that should be provided to the
	 * checkbox and be referenced by a label.
	 */
	id?: string;
}
