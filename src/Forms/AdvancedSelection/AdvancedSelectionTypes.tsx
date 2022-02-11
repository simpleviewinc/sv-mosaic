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
		currentPage,
		filter,
		limit,
		offset,
		// groupByCategory,
	}: {
		currentPage?: number;
		filter?: string;
		limit?: number;
		offset?: number;
		// groupByCategory?: boolean,
	} | undefined) => optionsWithCategory[] | Promise<optionsWithCategory[]>;
	getOptionsLimit?: number;
	createNewOption?: (filter: string) => Promise<void>;
	getSelected?: (options: string[]) => Promise<optionsWithCategory[]>;
	//onChange: (selectedOptions: optionsWithCategory[]) => void;
}
