import type { CheckboxProps as MUICheckboxProps } from "@mui/material/Checkbox";

/**
 * `aria-label`/`aria-labelledby` (inherited from `MUICheckboxProps`) are
 * forwarded to the underlying `<input>` and take precedence over `label` as
 * the checkbox's accessible name. Only set them when `label` is empty/absent
 * and there is otherwise no visible text for assistive technology to read
 * (e.g. a colour swatch option); setting both logs a dev warning, since the
 * announced name will then silently diverge from the visible text.
 */
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
	 * Short description to elaborate on option label. To
	 * be displayed in smaller text below the label.
	 */
	description?: string;
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
