import type { CheckboxListProps } from "@root/components/CheckboxList";
import type { FieldDefBase } from "@root/components/Field";
import type { MosaicLabelValue } from "@root/types";

export interface FormFieldCheckboxInputSettings extends Pick<CheckboxListProps, "itemsPerColumn"> {
	/**
	* List of options. Set `ariaLabel` on an option to give its checkbox an
	* accessible name when `label` is empty (e.g. a colour swatch option).
	*/
	options: MosaicLabelValue[] | (() => Promise<MosaicLabelValue[]>);
}

export type CheckboxData = MosaicLabelValue[];

export type FieldDefCheckbox = FieldDefBase<"checkbox", FormFieldCheckboxInputSettings>;
