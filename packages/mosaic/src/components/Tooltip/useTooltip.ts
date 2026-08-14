import { useId, useMemo, useState } from "react";
import type { AnchorElement, AnchorProps, TooltipProps } from "./TooltipTypes";

type HookTooltipProps = Required<Pick<TooltipProps, "anchorEl" | "open" | "id">>;

export interface UseTooltipResult {
	tooltipProps: HookTooltipProps;
	anchorProps: AnchorProps;
}

function useTooltip(): UseTooltipResult {
	const [ref, setRef] = useState<AnchorElement | null>(null);
	// Pointer and keyboard are tracked separately rather than as one `open`
	// flag. With a single flag, blurring closes a tooltip the pointer is still
	// resting on — measured — because the two triggers are also bound to two
	// different elements (hover on the wrapper, focus on the button).
	// SC 1.4.13 Persistent asks for the content to stay until its trigger is
	// removed, and one of the two triggers is still present in that case.
	const [hovered, setHovered] = useState(false);
	const [focused, setFocused] = useState(false);
	// Escape dismisses without moving focus (SC 1.4.13 Dismissible), which the
	// trigger flags alone cannot express: focus is still on the anchor.
	// Re-entering by either trigger clears it.
	const [dismissed, setDismissed] = useState(false);

	const open = (hovered || focused) && !dismissed;

	const id = useId();

	const tooltipProps = useMemo<HookTooltipProps>(() => ({
		open,
		anchorEl: ref,
		id: `tooltip-${id}`,
	}), [open, ref, id]);

	const anchorProps = useMemo<AnchorProps>(() => ({
		ref: setRef,
		onMouseEnter: () => {
			setDismissed(false);
			setHovered(true);
		},
		onMouseLeave: () => setHovered(false),
		onFocus: () => {
			setDismissed(false);
			setFocused(true);
		},
		onBlur: () => setFocused(false),
		onKeyDown: (event) => {
			if (event.key === "Escape") {
				setDismissed(true);
			}
		},
		"aria-describedby": open ? `tooltip-${id}` : undefined,
	}), [id, open]);

	return {
		tooltipProps,
		anchorProps,
	};
}

export default useTooltip;
