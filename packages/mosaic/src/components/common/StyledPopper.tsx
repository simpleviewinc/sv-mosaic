import styled from "styled-components";
import theme from "@root/theme";

import Popper from "@mui/material/Popper";

export const StyledPopper = styled(Popper).attrs({
	popperOptions: {
		modifiers: [
			{
				name: "offset",
				options: {
					offset: [0, parseInt(theme.spacing(2), 10)],
				},
			},
		],
	},
})<{ $width?: number | string }>`
	z-index: 1300;

	${({ $width, anchorEl }) => typeof $width === "number" ? `
		width: ${$width}px;
	` : typeof $width === "string" ? `
		width: ${$width};
	` : anchorEl && "clientWidth" in anchorEl ? `
		width: ${anchorEl.clientWidth}px;
	` : ""}
`;
