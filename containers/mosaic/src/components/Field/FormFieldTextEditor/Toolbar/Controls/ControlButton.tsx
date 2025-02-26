import type { ComponentProps, PropsWithChildren, ReactElement } from "react";

import React, { forwardRef } from "react";

import type { ShortcutDef } from "../../FormFieldTextEditorTypes";

import Tooltip, { useTooltip } from "@root/components/Tooltip";
import { StyledControlButton } from "../../FormFieldTextEditor.styled";
import { Shortcut } from "../Shortcut";
import { useSpreadRefs } from "@root/utils/hooks";

interface ControlButtonProps extends ComponentProps<typeof StyledControlButton> {
	label?: string;
	active?: boolean;
	square?: boolean;
	shortcut?: ShortcutDef;
	disabled?: boolean;
}

export const ControlButton = forwardRef<HTMLButtonElement, PropsWithChildren<ControlButtonProps>>(function ControlButton({
	label,
	children,
	active,
	square,
	shortcut,
	disabled,
	...props
}, providedRef): ReactElement {
	const { anchorProps, tooltipProps } = useTooltip();
	const setRef = useSpreadRefs([anchorProps.ref, providedRef]);

	return (
		<>
			<StyledControlButton
				{...props}
				{...anchorProps}
				ref={setRef}
				$active={active}
				$square={square}
				disabled={disabled}
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
