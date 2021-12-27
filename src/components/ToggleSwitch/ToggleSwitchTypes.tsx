import { FormControlLabelProps as MUIFormControlLabelProps } from "@material-ui/core/FormControlLabel";

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
  labelPlacement?: MUIFormControlLabelProps['labelPlacement'];
  /**
   * Indicates whether the toggle switch is required or not.
   */
  required?: boolean;
}
