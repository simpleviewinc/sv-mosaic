import { FieldDef } from '@root/components/Field';

export interface FormFieldToggleSwitchProps extends FieldDef {
	inputSettings?: {
		toggleLabel?: string;
	}
	/**
	 * If true, the toggle switch is checked
	 */
	//   checked?: boolean;
}
