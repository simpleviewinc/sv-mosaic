import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';
import theme from '../../utils/theme.js';

const chipFont = `
  font-size: 14px;
  font-family: ${theme.fontFamily};
`;

export const StyledDeletableChip = styled(Chip)`
  &.MuiChip-root {
    background-color: ${(pr) => (pr.disabled ? '#fed57b' : '#FDB924')};
    color: #1a1a1a;

    &:hover {
      background-color: ${(pr) => (pr.disabled ? '#fed57b' : '#E3A520')};
    }

    &:focus {
      background-color: #e3a520;
    }
  }

  .MuiChip-deleteIcon {
    color: #1a1a1a;
    margin-right: 8px;
    &:hover {
      color: #1a1a1a;
    }
  }

  & .MuiChip-label {
    ${chipFont}
    padding-left: 16px;
    padding-right: 12px;
  }
`;

export const StyledChip = styled(Chip)`
  color: #1a1a1a;

  &.MuiChip-root {
    background-color: ${(pr) => {
		if (pr.selected && !pr.disabled) {
			return '#FDB924';
		} else if (pr.selected && pr.disabled) {
			return '#fed57b';
		}
		return '#F0F2F5';
	}};

    &:hover {
      background-color: #bebebe;
    }
  }
  & .MuiChip-label {
    ${chipFont}
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const StyledLabel = styled.span`
  letter-spacing: 0.7px;
  max-width: 141px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
