import { MosaicLabelValue } from 'src/types/index'

export type optionsWithCategory = {
	category?: string;
} & MosaicLabelValue;

export type AdvancedSelectionDef = {
	/**
	* Options to be display within the Modal.
	*/
	checkboxOptions: optionsWithCategory[];
	/**
	 * Descriptive title for the modal displayed on the 
	 * header.
	 */
	modalTitle: string;
	/**
	 * If true, displays a checkbox list for each category
	 * otherwise displays a single checkbox list with all the
	 * checkboxOptions.
	 */
	groupByCategory?: boolean;
	// updateOptionsCb?: (key: any) => void;
	/**
	 * Used to get the selected options on the parent component.
	 */
	getOptions?: ({
		filter,
		limit,
		offset,
	}: {
		filter?: string;
		limit?: number;
		offset?: number;
	}) => Promise<optionsWithCategory[]>;
	getOptionsLimit?: number | string;
	createNewOption?: (filter: string) => Promise<string>;
	getSelected?: (options: string[]) => Promise<optionsWithCategory[]>;
}
