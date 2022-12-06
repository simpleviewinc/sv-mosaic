import Chip from "@mui/material/Chip";
import styled from "styled-components";
import theme from "@root/theme";

const chipFont = `
  font-size: 14px;
  font-family: ${theme.fontFamily};
  font-weight: ${theme.fontWeight.medium};
`;

export const StyledDeletableChip = styled(Chip)`
  &.MuiChip-root {
    background-color: ${pr => pr.disabled ?
		theme.newColors.simplyGold["60"]
		: theme.newColors.simplyGold["100"]};
    color: ${theme.colors.almostBlack};
    max-width: 186px;

    &:hover {
      background-color: ${pr => pr.disabled ?
		theme.newColors.simplyGold["60"]
		: theme.newColors.darkerSimplyGold["100"]};
    }

    &:focus {
      background-color: ${theme.newColors.simplyGold["100"]};
    }
    padding: 8px 16px;
  }

  .MuiChip-deleteIcon {
    color: ${theme.colors.almostBlack} !important;
    margin: 0 !important;
    height: 16px;
    width: 16px;

    &:hover {
      color: ${theme.colors.almostBlack} !important;
    }
  }

  & .MuiChip-label {
    ${chipFont}
    line-height: 16px;
    margin-right: 12px;
    padding: 0;
  }
`;

export const StyledChip = styled(Chip)`
  &.MuiChip-root {
    background-color: ${pr => {
		if (pr.selected && !pr.disabled) {
			return theme.newColors.simplyGold["100"];
		} else if (pr.selected && pr.disabled) {
			return theme.newColors.simplyGold["60"];
		}
		return theme.colors.gray200;
	}};
	color: ${theme.colors.almostBlack};

    &:hover {
      background-color: ${pr => pr.selected ? theme.newColors.darkerSimplyGold["100"] : theme.colors.simplyGray};
    }

    &:focus {
      background-color: ${pr => pr.selected ? theme.newColors.simplyGold["100"] : theme.colors.gray200};
    }

    padding: 8px 16px;
  }

  & .MuiChip-label {
    ${chipFont}
    line-height: 16px;
    padding: 0;
  }
`;

export const StyledLabel = styled.p`
  letter-spacing: 0.7px;
  margin: 0;
  max-width: 141px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
