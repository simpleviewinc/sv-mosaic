import { useId, useMemo, useState } from "react";
import type { AnchorElement, AnchorProps, TooltipProps } from "./TooltipTypes";

type HookTooltipProps = Required<Pick<TooltipProps, "anchorEl" | "open" | "id">>;

export interface UseTooltipResult {
	tooltipProps: HookTooltipProps;
	anchorProps: AnchorProps;
}

function useTooltip(): UseTooltipResult {
	const [ref, setRef] = useState<AnchorElement | null>(null);
	const [open, setOpen] = useState(false);

	const id = useId();

	const tooltipProps = useMemo<HookTooltipProps>(() => ({
		open,
		anchorEl: ref,
		id: `tooltip-${id}`,
	}), [open, ref, id]);

	const anchorProps = useMemo<AnchorProps>(() => ({
		ref: setRef,
		onMouseEnter: () => setOpen(true),
		onMouseLeave: () => setOpen(false),
		onFocus: () => setOpen(true),
		onBlur: () => setOpen(false),
		onKeyDown: (event) => {
			if (event.key === "Escape") {
				setOpen(false);
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
