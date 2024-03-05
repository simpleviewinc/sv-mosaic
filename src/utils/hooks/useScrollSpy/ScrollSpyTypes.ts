import { Animation } from "@root/utils/math/animateTypes";
import { MutableRefObject } from "react";

export interface ScrollSpyProps<E extends HTMLElement> {
	/**
	 * Array of references to the sections to spy on. The references
	 * should DOM elements and the array should be in the order that
	 * the elements appear on the page
	 */
	refs: HTMLElement[];
	/**
     * The DOM element that is the scrollable viewport
     */
	container: MutableRefObject<E>;
	/**
     * The amount of the page that the top of each section should
     * intersect to be considered active
     *
     * default = 0.4
     */
	threshold?: number;
}

export interface ScrollSpyResult {
	activeSection: number;
	setActiveSection: (index: number) => void;
	animation: Animation;
}
