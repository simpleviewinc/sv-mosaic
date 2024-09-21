import React from "react";

import type { ContentFieldTooltipProps } from "./ContentTypes";

import { TooltipIcon } from "../common";
import Tooltip, { useTooltip } from "../Tooltip";

export function ContentFieldTooltip({ tooltip }: ContentFieldTooltipProps) {
	const { anchorProps, tooltipProps } = useTooltip();

	return (
		<>
			<TooltipIcon {...anchorProps} />
			<Tooltip {...tooltipProps}>
				{tooltip}
			</Tooltip>
		</>

	);
}
