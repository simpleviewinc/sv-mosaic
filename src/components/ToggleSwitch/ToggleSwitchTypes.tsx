import { FormControlLabelProps as MUIFormControlLabelProps } from "@mui/material/FormControlLabel";
import { MosaicFieldProps } from "@root/components/Field";
import { ToggleSwitchInputSettings } from "@root/components/Field/FormFieldToggleSwitch";

export interface ToggleSwitchProps {
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
	 * Change function inherit from the FormFieldToggleSwitch parent component.
	 */
	onChange?: MosaicFieldProps<"toggleSwitch", ToggleSwitchInputSettings, boolean>["onChange"];
	/**
	 * OnBlur function inherit from the FormFieldToggleSwitch parent component.
	 */
	onBlur?: MosaicFieldProps<"toggleSwitch", ToggleSwitchInputSettings, boolean>["onBlur"];
}
