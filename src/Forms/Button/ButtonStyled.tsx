import styled from 'styled-components';
import { ButtonStyle, ButtonType } from './ButtonTypes';
import theme from '@root/theme';

const outlinedButtonPadding = '12px 16px';
const outlinedButtonHeight = '40px';
const outlinedMinWidth = '92px';

const typeStyle: { [key in ButtonType]: ButtonStyle } = {
	primary: {
		border: 'none',
		colorText: theme.colors.almostBlack,
		colorTextHover: theme.colors.almostBlack,
		fontSize: '14px',
		height: outlinedButtonHeight,
		hover: theme.colors.simplyGoldHover,
		minWidth: outlinedMinWidth,
		textTransform: 'uppercase',
		padding: outlinedButtonPadding,
		regular: theme.colors.simplyGold,
	},
	secondary: {
		border: `2px solid ${theme.colors.simplyGray}`,
		colorText: theme.colors.almostBlack,
		colorTextHover: theme.colors.almostBlack,
		fontSize: '14px',
		height: outlinedButtonHeight,
		hover: theme.colors.gray200,
		minWidth: outlinedMinWidth,
		textTransform: 'uppercase',
		padding: outlinedButtonPadding,
		regular: 'white',
	},
	blueText: {
		border: 'none',
		colorText: theme.colors.blueTeal,
		colorTextHover: theme.colors.blueTealHover,
		fontSize: '16px',
		height: 'auto',
		hover: 'transparent',
		minWidth: 'auto',
		textTransform: 'none',
		padding: '0',
		regular: 'transparent',
	},
	redText: {
		border: 'none',
		colorText: theme.colors.red,
		colorTextHover: theme.colors.redHover,
		fontSize: '16px',
		height: 'auto',
		hover: 'transparent',
		minWidth: 'auto',
		textTransform: 'none',
		padding: '0',
		regular: 'transparent',
	},
	approve: {
		border: `2px solid ${theme.colors.blueTeal}`,
		colorText: theme.colors.blueTeal,
		colorTextHover: theme.colors.blueTeal,
		fontSize: '14px',
		hover: '#008DA81A',
		height: outlinedButtonHeight,
		minWidth: outlinedMinWidth,
		textTransform: 'uppercase',
		padding: outlinedButtonPadding,
		regular: 'white',
	},
	deny: {
		border: `2px solid ${theme.colors.red}`,
		colorText: theme.colors.red,
		colorTextHover: theme.colors.red,
		fontSize: '14px',
		hover: '#B100001A',
		height: outlinedButtonHeight,
		minWidth: outlinedMinWidth,
		textTransform: 'uppercase',
		padding: outlinedButtonPadding,
		regular: 'white',
	},
};

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(pr) => typeStyle[pr.buttonType].regular};
  border: ${(pr) => typeStyle[pr.buttonType].border};
  border-radius: 0;
  color: ${(pr) => typeStyle[pr.buttonType].colorText};
  cursor: ${(pr) => (!pr.disabled ? 'pointer' : 'auto')};
  font-family: ${theme.fontFamily};
  font-size: ${(pr) => (pr.smallerButton ? '14px' : typeStyle[pr.buttonType].fontSize)};
  font-weight: ${theme.fontWeight.bold};
  height: ${(pr) => typeStyle[pr.buttonType].height};;
  min-width: ${(pr) => typeStyle[pr.buttonType].minWidth};;
  opacity: ${(pr) => (!pr.disabled ? 1 : 0.5)};
  padding: ${(pr) => typeStyle[pr.buttonType].padding};
  pointer-events:  ${(pr) => (!pr.disabled ? 'auto' : 'none')};
  text-transform: ${(pr) => typeStyle[pr.buttonType].textTransform};

  &:hover {
    background-color: ${(pr) => typeStyle[pr.buttonType].hover};
    color: ${(pr) => typeStyle[pr.buttonType].colorTextHover}
  }

  svg {
    margin-right: ${pr => pr.iconPosition === 'left' ? '12px' : 0};
    margin-left: ${pr => pr.iconPosition === 'right' ? '12px' : 0};
  }
`;

export const StyledIcon = styled.div`
  &.MuiSvgIcon-root {
    font-size: 16px;
    height: 16px;
    width: 16px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  & > * {
    margin-right: 10px;
  }
`;
