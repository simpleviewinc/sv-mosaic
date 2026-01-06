import type { MutableRefObject } from "react";

export interface ScrollSpyProps {
	/**
     * The DOM element that is the scrollable viewport
     */
	container: MutableRefObject<HTMLElement>;
	/**
	 * The amount of intersection that should occur between
	 * the section and the container for the section to be
	 * considered an active element
	 */
	intersectionRatioThreshold?: number;
}

export interface ScrollSpyResult {
	registerRef: (ref: HTMLElement) => () => void;
	goToSection: (section: number) => void;
	activeSection?: number;
}
