import type { FormControlLabelProps as MUIFormControlLabelProps } from "@mui/material/FormControlLabel";
import type { MosaicFieldProps } from "@root/components/Field";
import type { ToggleInputSettings } from "@root/components/Field/FormFieldToggle";

export interface ToggleProps {
	/**
   * If true, the component is checked
   */
	checked?: boolean;
	/**
   * Indicates whether the toggle switch is disabled.
   */
	disabled?: boolean;
	/**
   * Significant name related to its toggle switch.
   */
	label: string;
	/**
   * The position of the label.
   */
	labelPlacement?: MUIFormControlLabelProps["labelPlacement"];
	/**
   * Indicates whether the toggle switch is required or not.
   */
	required?: boolean;
	/**
	 * Change function inherit from the FormFieldToggle parent component.
	 */
	onChange?: MosaicFieldProps<"toggle", ToggleInputSettings, boolean>["onChange"];
	/**
	 * OnBlur function inherit from the FormFieldToggle parent component.
	 */
	onBlur?: MosaicFieldProps<"toggle", ToggleInputSettings, boolean>["onBlur"];
}
