import { FormControlLabelProps as MUIFormControlLabelProps } from "@mui/material/FormControlLabel";
import { MosaicFieldProps } from "@root/components/Field";
import { FormFieldToggleSwitchDef } from "../../forms/FormFieldToggleSwitch";

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
	onChange?: MosaicFieldProps<FormFieldToggleSwitchDef, boolean>["onChange"];
	/**
	 * OnBlur function inherit from the FormFieldToggleSwitch parent component.
	 */
	onBlur?: MosaicFieldProps<FormFieldToggleSwitchDef, boolean>["onBlur"];
}
