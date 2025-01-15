import type { GetOptions } from "@root/components/DataViewFilterMultiselect";
import type { FieldDefBase } from "@root/components/Field";
import type { MosaicLabelValue } from "@root/types";

export type optionsWithCategory = {
	category?: string;
} & MosaicLabelValue;

interface AdvancedSelectionBasic {
	createNewOption?: (filter: string) => Promise<MosaicLabelValue>;
	selectLimit?: number;
}

export type AdvancedSelectionLocalOptions = {
	/**
	* Options to be display within the Modal.
	*/
	options: MosaicLabelValue[];
} & AdvancedSelectionBasic;

export type AdvancedSelectionExternalOptions = {
	/**
	 * Used to get the selected options on the parent component.
	 */
	getOptions: GetOptions;
	getOptionsLimit?: number;
} & AdvancedSelectionBasic;

export type AdvancedSelectionInputSettings = AdvancedSelectionLocalOptions | AdvancedSelectionExternalOptions;

export interface ChipListPropsTypes {
	fieldDef: {
		inputSettings: {
			deleteSelectedOption: (options: MosaicLabelValue[]) => Promise<void>;
		};
		disabled: boolean;
	};
	value: MosaicLabelValue[];
}

export interface AdvanceSelectionDrawerPropTypes {
	value: MosaicLabelValue[];
	fieldDef: FieldDefBase<"advancedSelection", AdvancedSelectionInputSettings>;
	onChange: (e: MosaicLabelValue[]) => Promise<void>;
	isModalOpen: boolean;
	handleClose: (save?: boolean) => Promise<void>;
}

export type AdvancedSelectionData = MosaicLabelValue[];

export type FieldDefAdvancedSelection = FieldDefBase<"advancedSelection", AdvancedSelectionInputSettings>;
