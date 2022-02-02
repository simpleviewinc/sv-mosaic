export type Options = {
	/**
	 * Name of the menu option.
	 */
	label: string;
	/**
	 * Callback function that will be triggered
	 * when the option is clicked.
	 */
	action: () => void;
}

export type ImageVideoDocumentSetUpDef = {
	/**
	 * Callback executed when the remove button is clicked.
	 * This function should empty the assetProperties array
	 * to go the set up stage.
	 */
	handleRemove?: () => void;
	/**
	 * Callback executed when the set document button is clicked.
	 * It should fill the assetProperties array with the document
	 * properties.
	 */
	handleSetDocument?: () => void;
	/**
	 * Callback executed when the set document button is clicked.
	 * It should fill the assetProperties array with the document
	 * properties.
	 */
	handleSetImage: () => void;
	/**
	 * Callback executed when the set document button is clicked.
	 * It should fill the assetProperties array with the document
	 * properties.
	 */
	handleSetVideo?: () => void;
	/**
	 * List of menu options that can be executed by the component.
	 */
	options?: Options[];
	/**
	 * If the asset contains an image, its source should be passed
	 * via this src prop.
	 */
	src?: string;
}
