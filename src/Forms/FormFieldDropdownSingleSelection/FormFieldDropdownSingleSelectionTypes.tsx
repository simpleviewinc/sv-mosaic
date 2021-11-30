import { FieldProps } from "@root/components/Field";
import { Sizes } from "@root/theme/sizes";
import { SyntheticEvent } from 'react';

export interface DropdownSingleSelectionProps extends FieldProps {
	inputSettings?: {
		/**
		 * Example text shown inside of the text field
		 * portion of the dropdown
		 */
		placeholder?: string;
		/**
		 * Enum of default sizes to choose from
		 */
		size?: Sizes;
		/**
		 * Array of options to be displayed on the
		 * dropdown
		 */
		options: Option[],
	}
	value: Option;
}

type Option = {
	title: string;
	[key: string]: any;
}