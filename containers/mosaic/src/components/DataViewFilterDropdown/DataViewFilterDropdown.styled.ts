import styled from "styled-components";
import Popover from "@mui/material/Popover";
import theme from "@root/theme";

export const StyledPopover = styled(Popover)`
	.MuiPaper-root {
		border-radius: ${theme.rounded.md};
		box-shadow: ${theme.border.light}, ${theme.shadow["2xl"]};
		border: 0;
	}
`;

export const StyledWrapper = styled.div`
	background: ${theme.color.white};
`;
