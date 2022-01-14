import { ChangeEventHandler } from 'react';
import { RadioGroupProps as MUIRadioGroup } from '@material-ui/core/RadioGroup';
import { MosaicLabelValue } from '@root/types';

export type FormFieldRadioDef = {
	/**
	 * Function that listens to changes on the selected option.
	 */
	onChange?: ChangeEventHandler<HTMLInputElement>;
	/**
	* Array of objects containing each of the options to be displayed within the radio button.
	*/
	options?: MosaicLabelValue[];
	/**
	 * Value of the selected radio button.
	 */
	value?: MUIRadioGroup['value'];
}
