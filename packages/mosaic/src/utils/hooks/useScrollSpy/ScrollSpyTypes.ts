import type { MutableRefObject } from "react";
import type { SectionRegisterRef } from "@root/components/Form/Section/SectionTypes";

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
	registerRef?: SectionRegisterRef;
	goToSection: (id: string) => void;
	activeSection?: string;
}
