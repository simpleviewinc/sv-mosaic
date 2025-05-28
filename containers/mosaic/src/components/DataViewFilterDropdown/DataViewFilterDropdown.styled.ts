import styled from "styled-components";
import theme from "@root/theme";
import Popover from "@mui/material/Popover";

export const StyledWrapper = styled.div`
	border-radius: 5px;
	border: 1px solid ${theme.newColors.grey2["100"]};
	background: white;
`;

export const StyledPopover = styled(Popover)`
	.MuiPaper-root {
		box-shadow: 0px 2px 6px ${theme.newColors.almostBlack["20"]};
	}
`;
