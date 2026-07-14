import type { FocusEvent, RefObject } from "react";

/**
 * MUI X accessible pickers fire blur on the section container when focus moves
 * between internal elements (e.g. tabbing into the field). Only call onBlur when
 * focus has actually left the picker container.
 *
 * Clear/open adornments sit inside the container but outside the text field, so
 * callers should attach this handler to the container (React onBlur bubbles via
 * focusout) rather than only the text field — otherwise tabbing out via those
 * buttons never notifies the form.
 *
 * Open picker overlays are portaled outside the container; pass
 * `isFocusStillContained` (e.g. open ref / overlay DOM check) to avoid treating
 * that as a leave.
 */
export function isFocusInPickerOverlay(activeElement: Element | null = document.activeElement): boolean {
	if (!(activeElement instanceof Element)) {
		return false;
	}

	// MUI X renamed the popper root from MuiPickersPopper-root to MuiPickerPopper-root;
	// keep both so focus-in-overlay detection works across versions.
	return Boolean(activeElement.closest(".MuiPickerPopper-root, .MuiPickersPopper-root, .MuiModal-root"));
}

export interface ContainedBlurHandlerOptions {
	isFocusStillContained?: () => boolean;
}

export type ContainedBlurHandler = ((event?: FocusEvent) => void) & {
	cancel: () => void;
};

export function createContainedBlurHandler(
	containerRef: RefObject<HTMLElement | null>,
	onBlur?: () => void,
	options?: ContainedBlurHandlerOptions,
): ContainedBlurHandler {
	let frameId: number | undefined;

	const handler = ((event?: FocusEvent) => {
		if (!onBlur) {
			return;
		}

		const relatedTarget = event?.relatedTarget as Node | null;
		if (relatedTarget && containerRef.current?.contains(relatedTarget)) {
			return;
		}

		if (frameId !== undefined) {
			cancelAnimationFrame(frameId);
		}

		frameId = requestAnimationFrame(() => {
			frameId = undefined;

			if (containerRef.current?.contains(document.activeElement)) {
				return;
			}

			if (options?.isFocusStillContained?.() || isFocusInPickerOverlay()) {
				return;
			}

			onBlur();
		});
	}) as ContainedBlurHandler;

	handler.cancel = () => {
		if (frameId !== undefined) {
			cancelAnimationFrame(frameId);
			frameId = undefined;
		}
	};

	return handler;
}
