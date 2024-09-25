import React from "react";

import type { ContentFieldTooltipProps } from "./ContentTypes";

import { TooltipIcon } from "../common";
import Tooltip, { useTooltip } from "../Tooltip";
import testIds from "@root/utils/testIds";

export function ContentFieldTooltip({ tooltip }: ContentFieldTooltipProps) {
	const { anchorProps, tooltipProps } = useTooltip();

	return (
		<>
			<TooltipIcon
				{...anchorProps}
				data-testid={testIds.CONTENT_TOOLTIP_ICON}
			/>
			<Tooltip {...tooltipProps}>
				{tooltip}
			</Tooltip>
		</>

	);
}
