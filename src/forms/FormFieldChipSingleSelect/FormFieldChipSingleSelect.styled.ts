import theme from "@root/theme";
import styled from "styled-components";

export const StyledChipGroup = styled.div`
	& .MuiChip-root {
		border: 1px solid ${pr => pr.error ? theme.colors.red : "transparent"};
  		margin-right: 12px;
	}

	& .MuiChip-root:last-child {
  		margin-right: 0px;
	}
`;