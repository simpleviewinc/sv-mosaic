import * as React from "react";
import styled from "styled-components";

// Material UI
import { Tooltip } from "@mui/material";

import theme from "@root/theme";

export const StyledDefaultTooltip = styled(props => (
	<Tooltip
		classes={{ popper: props.className, tooltip: "tooltip", arrow: "arrow" }}
		{...props}
	/>
))`
	& .tooltip {
		background-color: ${theme.newColors.almostBlack["100"]};
		color: white;
		padding: 4px 8px;
		margin-top: 4px;
		font-size: 12px;
		font-family: ${theme.fontFamily};
	}

	& .arrow {
		color: ${theme.newColors.almostBlack["100"]};
	}
`;

// export const StyledAdvancedTooltip = styled(props => (
// 	<Tooltip
// 		classes={{ popper: props.className, tooltip: "tooltip", arrow: "arrow" }}
// 		{...props}
// 	/>
// ))`
// 	& .tooltip {
// 		background-color: white;
// 		color: ${theme.newColors.grey3["100"]};
// 		padding: 12px;
// 		margin-bottom: 8px;
// 		font-size: 12px;
// 		max-width: 280px;
// 		box-shadow: 0px 2px 6px #00000029;
// 		border: 1px solid ${theme.newColors.grey2["100"]};
// 		left: ${pr => pr.placement !== "top" ? "-30px !important" : ""};
// 		font-family: ${theme.fontFamily};
// 		font-weight: ${theme.fontWeight.normal};
// 		line-height: 14px;
// 		letter-spacing: normal;
// 		text-align: left;
// 	}

// 	& .arrow {
// 		color: white;
// 		left: ${pr => pr.placement !== "top" ? "32px !important" : ""};
// 	}
// `;
