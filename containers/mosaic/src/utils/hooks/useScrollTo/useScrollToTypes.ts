import type { MutableRefObject } from "react";

export interface UseScrollToParams<E extends HTMLElement> {
	/**
     * A reference to the containing HTML element
     * that should be scrolled
     */
	container: MutableRefObject<E>;
	/**
	 * A callback to invoke when the scrolling
	 * animation is complete
	 */
	onComplete?: () => void;
	/**
	 * A callback to invoke when the scrolling
	 * animation stops. This means either when it
	 * is stopped with animation.stop() or it is
	 * complete
	 */
	onStop?: () => void;
}
