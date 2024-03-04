import { MutableRefObject } from "react";

export interface UseScrollToParams {
	/**
     * A reference to the containing HTML element
     * that should be scrolled
     */
	container: MutableRefObject<HTMLDivElement>;
	/**
	 * A callback to invoke when the scrolling
	 * animation is complete
	 */
	onComplete?: () => void;
}
