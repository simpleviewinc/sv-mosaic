import styled from "styled-components";
import theme from "../../utils/theme.js";

// Buttons should be 30/36/42 in height for small/medium/large in ALL variants
// The styling of text, outlined, and icon are shared. Contained are different because they usually need to get darker on hover/active than the primary color

export const ButtonWrapper = styled.span`
  display: inline-block;

  &.fullWidth {
    display: block;
  }

  & > button {
    font-family: ${theme.fontFamily};
    text-transform: none;
    font-size: 14px;
    // font-weight: ${theme.fontWeight.semiBold};
    font-weight: ${theme.fontWeight.bold};
    min-width: auto;
	line-height: 1.715;
  }

  &.normalButton > button {
    box-shadow: none;
  }

  &.normalButton > button > span > .icon {
    font-size: 20px;
  }

  &.normalButton.size_small > button {
    padding: 3px 12px;
  }

  &.normalButton.size_large > button {
    padding: 9px 24px;
  }

  &.normalButton.size_small.variant_outlined > button {
    padding-top: 1px;
    padding-bottom: 1px;
  }

  &.normalButton.size_medium.variant_outlined > button {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  &.normalButton.size_large.variant_outlined > button {
    padding-top: 7px;
    padding-bottom: 7px;
  }

  &.normalButton.size_small > button .icon_left {
    margin-right: 4px;
    margin-left: -4px;
  }

  &.normalButton.size_small > button .icon_right {
    margin-left: 4px;
    margin-right: -4px;
  }

  &.normalButton.size_medium > button .icon_left {
    margin-right: 4px;
    margin-left: -4px;
  }

  &.normalButton.size_medium > button .icon_right {
    margin-left: 4px;
    margin-right: -4px;
  }

  &.normalButton.size_large > button .icon_left {
    margin-right: 7px;
    margin-left: -7px;
  }

  &.normalButton.size_large > button .icon_right {
    margin-left: 7px;
    margin-right: -7px;
  }

  &.iconButton svg {
    font-size: ${theme.iconFontSize};
  }

  &.iconButton > button  {
    padding: 4px;
  }

  &.iconButton.size_small > button {
    padding: 3px;
  }

  &.iconButton.size_medium > button {
    // padding: 4px;
	margin: 2px;
  }

  &.iconButton.size_large > button {
    // padding: 9px;
	margin: 4px;
  }
`;

export const PopoverWrapper = styled.div`
  font-family: ${theme.fontFamily};
  padding: 10px;
`;

const BlackOnYellow = styled(ButtonWrapper)`
  & > button {
    color: ${theme.colors.almostBlack};
    font-family: ${theme.fontFamily};
    font-size: 16px;
    font-weight: ${theme.fontWeight.bold};
    height: auto;
    min-width: auto;
  }
`;

const GrayOnWhite = styled(ButtonWrapper)`
  & > button {
    color: ${theme.colors.almostBlack};
    font-family: ${theme.fontFamily};
    font-size: 16px;
    font-weight: ${theme.fontWeight.bold};
    height: auto;
    min-width: auto;
  }
`;

const TealOnWhite = styled(ButtonWrapper)`
  & > button {
    color: ${theme.colors.blueTeal};
    font-weight: ${theme.fontWeight.bold};
  }

  & > button:hover {
	background-color: transparent;
    color: ${theme.colors.blueTealHover};
  }
`;

const RedOnWhite = styled(ButtonWrapper)`
  & > button {
    color: ${theme.colors.red};
    border-color: ${theme.colors.red};
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeight.bold};
  }

  & > button:hover {
    background: ${theme.colors.red}12;
  }

  & > button:active,
  & > button:focus {
    background: ${theme.colors.red}24;
  }
`;

const BlackOnWhite = styled(ButtonWrapper)`
  & > button {
    color: ${theme.colors.black};
    border-color: ${theme.colors.gray400};
  }

  & > button:hover {
    background: ${theme.colors.gray200};
  }

  & > button:active,
  & > button:focus {
    background: ${theme.colors.gray300};
  }
`;

const BlueOnWhite = styled(ButtonWrapper)`
  & > button {
    color: ${theme.colors.blue};
    border-color: ${theme.colors.blue};
  }

  & > button:hover {
    background: ${theme.colors.blue}12;
  }

  & > button:active,
  & > button:focus {
    background: ${theme.colors.blue}24;
  }
`;

export const types = {
	yellow_contained: styled(BlackOnYellow)`
    & > button {
      background-color: ${theme.colors.simplyGold};
      border-radius: 0;
      font-size: 14px;
      text-transform: uppercase;
    }

    .MuiButton-contained.Mui-disabled {
      color: ${theme.colors.almostBlack};
      background-color: ${theme.colors.simplyGold};
      opacity: 0.5;
    }

    & > button:hover {
      background-color: ${theme.colors.simplyGoldHover};
      color: ${theme.colors.almostBlack};
    }
  `,
  
	blue_contained: styled(ButtonWrapper)`
    & > button {
      background: ${theme.colors.blue};
      border-radius: 0;
      color: white;
      font-size: 14px;
      text-transform: uppercase;
    }
    .MuiButton-contained.Mui-disabled {
      color: white;
      background-color: ${theme.colors.blue};
      opacity: 0.5;
    }
    & > button:hover {
      background: ${theme.colors.blueHover};
    }
    & > button:active,
    & > button:focus {
      background: ${theme.colors.blueActive};
    }
  `,
	lightBlue_contained: styled(ButtonWrapper)`
    & > button {
      background: ${theme.colors.blue}12;
      border-radius: 0;
      color: ${theme.colors.blue};
      font-size: 14px;
      text-transform: uppercase;
    }
    .MuiButton-contained.Mui-disabled {
      color: ${theme.colors.blue};
      background-color: ${theme.colors.blue}12;
      opacity: 0.5;
    }
    & > button:hover {
      background: ${theme.colors.blue}24;
    }
    & > button:active,
    & > button:focus {
      background: ${theme.colors.blue}32;
    }
  `,
	red_contained: styled(ButtonWrapper)`
    & > button {
      background: ${theme.colors.red};
      border-radius: 0;
      color: white;
      font-size: 14px;
      text-transform: uppercase;
    }
    .MuiButton-contained.Mui-disabled {
      color: white;
      background-color: ${theme.colors.red};
      opacity: 0.5;
    }
    & > button:hover {
      background: ${theme.colors.redHover};
    }
    & > button:active,
    & > button:focus {
      background: ${theme.colors.redActive};
    }
  `,
	black_contained: styled(ButtonWrapper)`
    & > button {
      background: ${theme.colors.gray200};
      border-radius: 0;
      color: ${theme.colors.black};
      font-size: 14px;
      text-transform: uppercase;
    }
    .MuiButton-contained.Mui-disabled {
      color: ${theme.colors.black};
      background-color: ${theme.colors.gray200};
      opacity: 0.5;
    }
    & > button:hover {
      background: ${theme.colors.gray300};
    }
    & > button:active,
    & > button:focus {
      background: ${theme.colors.gray400};
    }
  `,
	gray_outlined: styled(GrayOnWhite)`
    & > button {
      background-color: white;
      border: 2px solid ${theme.colors.simplyGray};
      border-radius: 0;
      font-size: 14px;
      text-transform: uppercase;
    }

    .MuiButton-outlined.Mui-disabled {
      background-color: white;
      border: 2px solid ${theme.colors.simplyGray};
      color: ${theme.colors.almostBlack};
      opacity: 0.5;
    }

    & > button:hover {
      background-color: ${theme.colors.gray200};
      color: ${theme.colors.almostBlack};
    }
  `,
	teal_outlined: styled(TealOnWhite)`
    & > button {
      background-color: white;
      border-radius: 0;
      border: 2px solid ${theme.colors.blueTeal};
      font-size: 14px;
      text-transform: uppercase;
    }

    .MuiButton-outlined.Mui-disabled {
      background-color: white;
      border: 2px solid ${theme.colors.blueTeal};
      color: ${theme.colors.blueTeal};
      opacity: 0.5;
    }

    & > button:hover {
      background-color: ${theme.colors.blueTeal}1a;
      color: ${theme.colors.blueTeal};
    }
  `,
	blue_outlined: styled(BlueOnWhite)`
    & > button {
      background-color: white;
      border-radius: 0;
      border: 2px solid ${theme.colors.blue};
      font-size: 14px;
      text-transform: uppercase;
    }

    .MuiButton-outlined.Mui-disabled {
      background-color: white;
      opacity: 0.5;
      border: 2px solid ${theme.colors.blue};
      color: ${theme.colors.blue};
    }

    & > button:hover {
      box-shadow: 0 2px 3px ${theme.colors.blue}12;
    }

    & > button:active,
    & > button:focus {
      box-shadow: 0 1px 2px ${theme.colors.blue}24;
    }
  `,
	red_outlined: styled(RedOnWhite)`
    & > button {
      background-color: white;
      border-radius: 0;
      border: 2px solid ${theme.colors.red};
      font-size: 14px;
      text-transform: uppercase;
    }

    .MuiButton-outlined.Mui-disabled {
      background-color: white;
      opacity: 0.5;
      border: 2px solid ${theme.colors.red};
      color: ${theme.colors.red};
    }

    & > button:hover {
      background-color: #b100001a;
      color: ${theme.colors.red};
    }

    & > button:active,
    & > button:focus {
      box-shadow: 0 1px 2px ${theme.colors.red}24;
    }
  `,
	black_outlined: styled(BlackOnWhite)`
    & > button {
      background-color: white;
      border-radius: 0;
      border: 2px solid ${theme.colors.black};
      font-size: 14px;
      text-transform: uppercase;
    }
    .MuiButton-outlined.Mui-disabled {
      background-color: white;
      opacity: 0.5;
      border: 2px solid ${theme.colors.black};
      color: ${theme.colors.black};
    }
    & > button:hover {
      box-shadow: 0 2px 3px ${theme.colors.black}12;
    }
    & > button:active,
    & > button:focus {
      box-shadow: 0 1px 2px ${theme.colors.black}24;
    }
  `,
	teal_text: styled(TealOnWhite)`
    span {
      color: ${theme.colors.blueTeal};
      opacity: ${({ children }) => (!children[0].props.disabled ? 1 : 0.5)};

      &:hover {
        color: ${({ children }) =>
		!children[0].props.disabled ? theme.colors.blueTealHover : ""};
      }
    }

    & > button {
      font-size: ${({ smallText }) => (smallText ? "14px" : "16px")};
	  line-height: 1.5;
    }
  `,
	blue_text: styled(BlueOnWhite)`
    span {
      color: ${theme.colors.blue};
      opacity: ${({ children }) => (!children[0].props.disabled ? 1 : 0.5)};
    }

    & > button {
      font-size: ${({ smallText }) => (smallText ? "14px" : "16px")};
	  line-height: 1.5;
    }
  `,
	red_text: styled(RedOnWhite)`
    span {
      color: ${theme.colors.red};
      opacity: ${({ children }) => (!children[0].props.disabled ? 1 : 0.5)};
    }

    & > button {
      font-size: ${({ smallText }) => (smallText ? "14px" : "16px")};
	  line-height: 1.5;
    }
  `,
	black_text: styled(BlackOnWhite)`
    span {
      color: ${theme.colors.black};
      opacity: ${({ children }) => (!children[0].props.disabled ? 1 : 0.5)};
    }

    & > button {
      font-size: ${({ smallText }) => (smallText ? "14px" : "16px")};
	  line-height: 1.5;
    }
  `,
	blue_icon: BlueOnWhite,
	black_icon: BlackOnWhite,
	red_icon: RedOnWhite,
	gray_icon: styled(GrayOnWhite)`
    & > button {
      color: ${theme.colors.gray600};
    }

    & > button:hover {
      color: ${theme.colors.almostBlack};
    }
  `,
};

export const TooltipContent = styled.div`
  z-index: 100;
  background: ${theme.colors.almostBlack};
  color: white;
  padding: 4px 8px;
  margin-top: 4px;
  border-radius: 4px;
  color: white;
  font-family: ${theme.fontFamily};
  font-size: 12px;
  margin: 12px 0px;
  max-width: 200px;
`;
