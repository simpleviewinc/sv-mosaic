import type { FocusEvent, RefObject } from "react";

/**
 * MUI X accessible pickers fire blur on the section container when focus moves
 * between internal elements (e.g. tabbing into the field). Only call onBlur when
 * focus has actually left the picker container.
 */
export function createContainedBlurHandler(
	containerRef: RefObject<HTMLElement | null>,
	onBlur?: () => void,
): (event?: FocusEvent) => void {
	return (event?: FocusEvent) => {
		if (!onBlur) {
			return;
		}

		const relatedTarget = event?.relatedTarget as Node | null;
		if (relatedTarget && containerRef.current?.contains(relatedTarget)) {
			return;
		}

		requestAnimationFrame(() => {
			if (!containerRef.current?.contains(document.activeElement)) {
				onBlur();
			}
		});
	};
}
