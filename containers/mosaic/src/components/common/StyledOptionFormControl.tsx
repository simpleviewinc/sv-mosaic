import styled from "styled-components";
import { default as MUIFormControlLabel } from "@mui/material/FormControlLabel";
import type { Theme } from "@root/theme";
import theme from "@root/theme";

export const StyledOptionFormControl = styled(MUIFormControlLabel)<{ $gap?: Parameters<Theme["spacing"]> }>`
	&& {
		align-items: center;
		gap: ${({ $gap = [1] }) => theme.spacing(...$gap)};
		margin-left: 0;
		margin-right: 0;
	}
`;
