import { FieldProps } from "@root/components/Field/Field";
import { MosaicLabelValue } from "@root/types";

export interface FormFieldChipSingleSelectProps extends FieldProps {
	selectedOption?: MosaicLabelValue;
	/**
   * Array of objects containing each of the options to be displayed within the dropdown.
   */
	options?: MosaicLabelValue[];
}