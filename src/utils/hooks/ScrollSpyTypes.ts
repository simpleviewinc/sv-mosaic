export interface ScrollSpyProps{
	/**
	 * Array of references to the sections to spy on. The references
	 * should DOM elements and the array should be in the order that
	 * the elements appear on the page
	 */
	refs: HTMLElement[],
    /**
     * The DOM element that is the scrollable viewport
     */
	container: HTMLElement
}

export interface ScrollSpyResult{
	activeSection: number
}
