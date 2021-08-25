import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';
import theme from '../../utils/theme.js';

const chipFont = `
  font-size: 14px;
  font-family: ${theme.fontFamily};
`;

export const StyledDeletableChip = styled(Chip)`
         &.MuiChip-root {
           background-color: ${pr =>
		pr.disabled
			? theme.colors.simplyGoldDisabled
			: theme.colors.simplyGold};
           color: ${theme.colors.almostBlack};

           &:hover {
             background-color: ${pr =>
		pr.disabled
			? theme.colors.simplyGoldDisabled
			: theme.colors.simplyGoldHover};
           }

           &:focus {
             background-color: ${theme.colors.simplyGold};
           }
         }

         .MuiChip-deleteIcon {
           color: ${theme.colors.almostBlack};
           margin-right: 8px;
           height: 14px;
           width: 14px;
           &:hover {
             color: ${theme.colors.almostBlack};
           }
         }

         & .MuiChip-label {
           ${chipFont}
           padding-left: 16px;
           padding-right: 12px;
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
  }
  & .MuiChip-label {
    ${chipFont}
    padding-left: 16px;
    padding-right: 16px;
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
