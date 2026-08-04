import type { CheckboxListProps } from "@root/components/CheckboxList";
import type { FieldDefBase } from "@root/components/Field";
import type { MosaicLabelValue } from "@root/types";

export interface FormFieldCheckboxInputSettings extends Pick<CheckboxListProps, "itemsPerColumn"> {
	/**
	* List of options
	*/
	options: MosaicLabelValue[] | (() => Promise<MosaicLabelValue[]>);
}

export type CheckboxData = MosaicLabelValue[];

export type FieldDefCheckbox = FieldDefBase<"checkbox", FormFieldCheckboxInputSettings>;
