import { MosaicLabelValue } from 'src/types/index'

export type optionsWithCategory = {
	category?: string;
} & MosaicLabelValue;

type AdvancedSelectionBasic = {
	/**
	 * Descriptive title for the modal displayed on the 
	 * header.
	 */
	modalTitle: string;
	createNewOption?: (filter: string) => Promise<string>;
	getSelected: (options: string[]) => Promise<optionsWithCategory[]>;
	/**
	 * If true, displays a checkbox list for each category
	 * otherwise displays a single checkbox list with all the
	 * checkboxOptions.
	 */
	// groupByCategory?: boolean;
}

type AdvancedSelectionLocalOptions = {
	/**
	* Options to be display within the Modal.
	*/
	checkboxOptions: optionsWithCategory[];
} & AdvancedSelectionBasic;

type AdvancedSelectionExternalOptions = {
	/**
	 * Used to get the selected options on the parent component.
	 */
	getOptions: ({
		filter,
		limit,
		offset,
	}: {
		filter?: string;
		limit?: number;
		offset?: number;
	}) => Promise<optionsWithCategory[]>;
	getOptionsLimit?: number | string;
} & AdvancedSelectionBasic;

export type AdvancedSelectionDef = AdvancedSelectionLocalOptions | AdvancedSelectionExternalOptions;
