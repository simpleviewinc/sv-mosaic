import { FieldProps } from '@root/components/Field';
import { ChangeEvent } from 'react';

export interface FormFieldToggleSwitchProps extends FieldProps {
	inputSettings?: {
		toggleLabel?: string;
	}
  /**
   * If true, the toggle switch is checked
   */
//   checked?: boolean;
}
