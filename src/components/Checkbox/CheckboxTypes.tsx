import { CheckboxProps as MUICheckboxProps } from "@material-ui/core/Checkbox";

export interface CheckboxProps {
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
	 * Additional text shown under the checkbox
	 * that helps the user understand the selector
	 */
	helperText?: string;
}