import React, { ComponentProps, forwardRef, PropsWithChildren, ReactElement } from "react";

import type { ShortcutDef } from "../../FormFieldTextEditorTypes";

import Tooltip, { useTooltip } from "@root/components/Tooltip";
import { StyledControlButton } from "../../FormFieldTextEditorTipTap.styled";
import { Shortcut } from "..";

interface ControlButtonProps extends ComponentProps<typeof StyledControlButton> {
	label?: string;
	active?: boolean;
	square?: boolean;
	shortcut?: ShortcutDef;
}

export const ControlButton = forwardRef<HTMLButtonElement, PropsWithChildren<ControlButtonProps>>(function ControlButton({ label, children, active, square, shortcut, ...props }, providedRef): ReactElement {
	const { anchorProps, tooltipProps } = useTooltip();

	const setRef = (ref: HTMLButtonElement) => {
		anchorProps.ref(ref);

		if (providedRef) {
			if (typeof providedRef === "function") {
				providedRef(ref);
			} else {
				providedRef.current = ref;
			}
		}
	};

	return (
		<>
			<StyledControlButton
				{...props}
				{...anchorProps}
				ref={setRef}
				$active={active}
				$square={square}
			>
				{children}
			</StyledControlButton>
			{label && (
				<Tooltip {...tooltipProps}>
					{label}
					{" "}
					{shortcut && (
						<>
							(
							<Shortcut shortcut={shortcut} />
							)
						</>
					)}
				</Tooltip>
			)}
		</>
	);
});
