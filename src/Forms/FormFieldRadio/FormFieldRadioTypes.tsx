import { ChangeEventHandler } from 'react';
import { RadioGroupProps as MUIRadioGroup } from '@material-ui/core/RadioGroup';
import { MosaicLabelValue } from '@root/types';
import { FieldProps } from '@root/components/Field';

export interface FormFieldRadioProps extends FieldProps {
  /**
   * Function that listens to changes on the selected option.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  inputSettings?: {
	/**
   * Array of objects containing each of the options to be displayed within the radio button.
   */
	 options?: MosaicLabelValue[];
  }
  /**
   * Value of the selected radio button.
   */
  value?: MUIRadioGroup['value'];
}
