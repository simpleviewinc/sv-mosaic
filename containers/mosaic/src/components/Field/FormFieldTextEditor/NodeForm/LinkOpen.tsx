import type { ReactElement } from "react";

import React from "react";
import NewTabIcon from "@mui/icons-material/OpenInNew";

import { StyledLinkOpen } from "./NodeForm.styled";

export function LinkOpen({ url }: { url: string }): ReactElement {
	return (
		<StyledLinkOpen href={url} target="_blank">
			<NewTabIcon />
			{" "}
			Preview
		</StyledLinkOpen>
	);
}
