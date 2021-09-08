import { ChangeEventHandler } from 'react';
import { RadioGroupProps as MUIRadioGroup } from '@material-ui/core/RadioGroup';
import { MosaicLabelValue } from '@root/types';

export interface FormFieldRadioGroupProps {
  /**
   * Indicates whether the field is disabled.
   */
  disabled?: boolean;
  /**
   * If true, changes border color, adds red background and displays errorText (if any).
   */
  error?: boolean;
  /**
   * 	Text to be shown if there’s an error.
   */
  errorText?: string;
  /**
   * Text to provide context to the current field.
   */
  instructionText?: string | JSX.Element;
  /**
   * Meaningful name related to the field.
   */
  label: string;
  /**
   * Function that listens to changes on the selected option.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Indicates whether the fied is required or not.
   */
  required?: boolean;
  /**
   * Array of objects containing each of the options to be displayed within the radio button.
   */
  options?: MosaicLabelValue[];
  /**
   * Value of the selected radio button.
   */
  value?: MUIRadioGroup['value'];
}
