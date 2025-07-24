import styled from "styled-components";
import Autocomplete from "@mui/material/Autocomplete";
import theme from "@root/theme";

export const StyledAutocomplete = styled(Autocomplete)`
	.Mos-DropdownChevron {
		.MuiSvgIcon-root {
			font-size: 32px;
			color: ${theme.color.gray[500]};
		}
	}
`;
