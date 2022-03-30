import Chip from "@material-ui/core/Chip";
import styled from "styled-components";
import theme from "../../utils/theme.js";

const chipFont = `
  font-size: 14px;
  font-family: ${theme.fontFamily};
  font-weight: ${theme.fontWeight.semiBold};
`;

export const StyledDeletableChip = styled(Chip)`
  &.MuiChip-root {
    background-color: ${pr => pr.disabled ?
		theme.colors.simplyGoldDisabled
		: theme.colors.simplyGold};
    color: ${theme.colors.almostBlack};
    max-width: 186px;

    &:hover {
      background-color: ${pr => pr.disabled ?
		theme.colors.simplyGoldDisabled
		: theme.colors.simplyGoldHover};
    }

    &:focus {
      background-color: ${theme.colors.simplyGold};
    }
    padding: 8px 16px;
  }

  .MuiChip-deleteIcon {
    color: ${theme.colors.almostBlack};
    margin: 0;
    height: 14px;
    width: 14px;

    &:hover {
      color: ${theme.colors.almostBlack};
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
  color: ${theme.colors.almostBlack};

  &.MuiChip-root {
    background-color: ${pr => {
		if (pr.selected && !pr.disabled) {
			return theme.colors.simplyGold;
		} else if (pr.selected && pr.disabled) {
			return theme.colors.simplyGoldDisabled;
		}
		return theme.colors.gray200;
	}};

    &:hover {
      background-color: ${pr => pr.selected ? theme.colors.simplyGoldHover : theme.colors.simplyGray};
    }

    &:focus {
      background-color: ${pr => pr.selected ? theme.colors.simplyGold : theme.colors.gray200};
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