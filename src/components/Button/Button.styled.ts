import styled from "styled-components";
import theme from "@root/theme";

// Buttons should be 30/36 in height for small/medium in ALL variants
// The styling of text, outlined, and icon are shared. Contained are different because they usually need to get darker on hover/active than the primary color

export const ButtonWrapper = styled.span`
  display: inline-block;

  &.fullWidth {
    display: block;
  }

  & > .MuiButtonBase-root {
	font-family: ${theme.fontFamily};
	text-transform: none;
	font-size: 14px;
	font-weight: ${theme.fontWeight.bold};
	min-width: auto;
	line-height: 1.715;
	letter-spacing: 1px;
  }

  &.normalButton > .MuiButtonBase-root {
    box-shadow: none;
  }

  &.normalButton > .MuiButtonBase-root > span > .icon {
    font-size: 20px;
  }

  &.normalButton.size_small > .MuiButtonBase-root {
    padding: 3px 12px;
  }

  &.normalButton.size_small.variant_outlined > .MuiButtonBase-root {
    padding-top: 1px;
    padding-bottom: 1px;
  }

  &.normalButton.size_medium.variant_outlined > .MuiButtonBase-root {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  &.normalButton.size_small > .MuiButtonBase-root .icon_left {
    margin-right: 12px;
    margin-left: -4px;
    font-size: 16px;
  }

  &.normalButton.size_small > .MuiButtonBase-root .icon_right {
    margin-left: 12px;
    margin-right: -4px;
    font-size: 16px;
  }

  &.normalButton.size_medium > .MuiButtonBase-root .icon_left {
    margin-right: 12px;
    margin-left: -4px;
    font-size: 16px;
  }

  &.normalButton.size_medium > .MuiButtonBase-root .icon_right {
    margin-left: 12px;
    margin-right: -4px;
    font-size: 16px;
  }

  &.iconButton svg {
    font-size: ${theme.iconFontSize};
  }

  &.iconButton > .MuiIconButton-root  {
    padding: 4px;
  }

  &.iconButton.size_small > .MuiIconButton-root {
    padding: 3px;
  }

  &.iconButton.size_medium > .MuiIconButton-root {
    margin: 2px;
  }

  .MuiTouchRipple-child {
      opacity: 0.5;
  }
`;

export const PopoverWrapper = styled.div`
  font-family: ${theme.fontFamily};
  padding: 10px;
`;

const BlackOnYellow = styled(ButtonWrapper)`
  & > .MuiButtonBase-root {
    color: ${theme.newColors.almostBlack["100"]};
    font-family: ${theme.fontFamily};
    height: auto;
    min-width: auto;
  }
`;

const GrayOnWhite = styled(ButtonWrapper)`
  & > .MuiButtonBase-root {
    color: ${theme.newColors.almostBlack["100"]};
    font-family: ${theme.fontFamily};
    height: auto;
    min-width: auto;
  }
`;

const TealOnWhite = styled(ButtonWrapper)`
  & > .MuiButtonBase-root {
    color: ${theme.newColors.realTeal["100"]};
  }

  & > .MuiButtonBase-root:hover {
		border-radius: 0;
    	color: ${theme.newColors.darkerRealTeal["100"]};
  }
`;

const RedOnWhite = styled(ButtonWrapper)`
  & > .MuiButtonBase-root {
    color: ${theme.newColors.darkRed["100"]};
    border-color: ${theme.newColors.darkRed["100"]};
    font-family: ${theme.fontFamily};
  }

  & > .MuiButtonBase-root:hover {
		background: ${theme.newColors.darkRed["20"]};
		border-radius: 0;
  }

  & > .MuiButtonBase-root:active,
  & > .MuiButtonBase-root:focus {
    background: ${theme.newColors.darkRed["20"]};
  }
`;

const BlackOnWhite = styled(ButtonWrapper)`
  & > .MuiButtonBase-root {
    color: ${theme.newColors.almostBlack["100"]};
    border-color: ${theme.colors.gray400};
  }

  & > .MuiButtonBase-root:hover {
    background: ${theme.newColors.grey2["100"]};
		border-radius: 0;
  }

  & > .MuiButtonBase-root:active,
  & > .MuiButtonBase-root:focus {
    background: ${theme.colors.gray300};
  }
`;

const BlueOnWhite = styled(ButtonWrapper)`
  & > .MuiButtonBase-root {
    color: ${theme.colors.blue};
    border-color: ${theme.colors.blue};
  }

  & > .MuiButtonBase-root:hover {
    background: ${theme.colors.blue}12;
		border-radius: 0;
  }

  & > .MuiButtonBase-root:active,
  & > .MuiButtonBase-root:focus {
    background: ${theme.colors.blue}24;
  }
`;

const WhiteOnBlack = styled(ButtonWrapper)`
  & > .MuiButtonBase-root {
    color: ${theme.colors.white};
    border-color: ${theme.colors.white};
  }

  & > .MuiButtonBase-root:hover {
    background: ${theme.colors.white}30;
  }

  & > .MuiButtonBase-root:active,
  & > .MuiButtonBase-root:focus {
    background: ${theme.colors.white}60;
  }
`;

const textButtonStyles = {
	opacity: (disabled: boolean) => disabled ? 1 : 0.5,
	fontSize: (smallText: boolean) => smallText ? "14px" : "14px",
	lineHeight: 1.715
}

export const types = {
	yellow_contained: styled(BlackOnYellow)`
    & > .MuiButtonBase-root {
      background-color: ${theme.newColors.simplyGold["100"]};
      border-radius: 0;
      font-size: 14px;
      text-transform: uppercase;
    }

    .MuiButton-contained.Mui-disabled {
      color: ${theme.newColors.almostBlack["100"]};
      background-color: ${theme.newColors.simplyGold["100"]};
      opacity: 0.5;
    }

    & > .MuiButtonBase-root:hover {
      background-color: ${theme.newColors.darkerSimplyGold["100"]};
      color: ${theme.newColors.almostBlack["100"]};
    }
  `,

	blue_contained: styled(ButtonWrapper)`
    & > .MuiButtonBase-root {
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
    & > .MuiButtonBase-root:hover {
      background: ${theme.colors.blueHover};
    }
    & > .MuiButtonBase-root:active,
    & > .MuiButtonBase-root:focus {
      background: ${theme.colors.blueActive};
    }
  `,
	lightBlue_contained: styled(ButtonWrapper)`
    & > .MuiButtonBase-root {
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
    & > .MuiButtonBase-root:hover {
      background: ${theme.colors.blue}24;
    }
    & > .MuiButtonBase-root:active,
    & > .MuiButtonBase-root:focus {
      background: ${theme.colors.blue}32;
    }
  `,
	red_contained: styled(ButtonWrapper)`
    & > .MuiButtonBase-root {
      background: ${theme.newColors.darkRed["100"]};
      border-radius: 0;
      color: white;
      font-size: 14px;
      text-transform: uppercase;
    }
    .MuiButton-contained.Mui-disabled {
      color: white;
      background-color: ${theme.newColors.darkRed["100"]};
      opacity: 0.5;
    }
    & > .MuiButtonBase-root:hover {
      background: ${theme.newColors.darkerRed[100]};
    }
    & > .MuiButtonBase-root:active,
    & > .MuiButtonBase-root:focus {
      background: ${theme.colors.redActive};
    }
  `,
	black_contained: styled(ButtonWrapper)`
    & > .MuiButtonBase-root {
      background: ${theme.newColors.grey2["100"]};
      border-radius: 0;
      color: ${theme.newColors.almostBlack["100"]};
      font-size: 14px;
      text-transform: uppercase;
    }
    .MuiButton-contained.Mui-disabled {
      color: ${theme.newColors.almostBlack["100"]};
      background-color: ${theme.newColors.grey2["100"]};
      opacity: 0.5;
    }
    & > .MuiButtonBase-root:hover {
      background: ${theme.colors.gray300};
    }
    & > .MuiButtonBase-root:active,
    & > .MuiButtonBase-root:focus {
      background: ${theme.colors.gray400};
    }
  `,
	gray_outlined: styled(GrayOnWhite)`
    & > .MuiButtonBase-root {
      background-color: white;
      border: 2px solid ${theme.newColors.simplyGrey["100"]};
      border-radius: 0;
      font-size: 14px;
      text-transform: uppercase;
    }

    .MuiButton-outlined.Mui-disabled {
      background-color: white;
      border: 2px solid ${theme.newColors.simplyGrey["100"]};
      color: ${theme.newColors.almostBlack["100"]};
      opacity: 0.5;
    }

    & > .MuiButtonBase-root:hover {
      background-color: ${theme.newColors.grey2["100"]};
      color: ${theme.newColors.almostBlack["100"]};
			border: 2px solid ${theme.newColors.simplyGrey["100"]};
    }
  `,
	teal_outlined: styled(TealOnWhite)`
    & > .MuiButtonBase-root {
      background-color: white;
      border-radius: 0;
      border: 2px solid ${theme.newColors.realTeal["100"]};
      font-size: 14px;
      text-transform: uppercase;
    }

    .MuiButton-outlined.Mui-disabled {
      background-color: white;
      border: 2px solid ${theme.newColors.realTeal["100"]};
      color: ${theme.newColors.realTeal["100"]};
      opacity: 0.5;
    }

    & > .MuiButtonBase-root:hover {
      background-color: ${theme.newColors.realTeal["20"]};
      color: ${theme.newColors.realTeal["100"]};
			border: 2px solid ${theme.newColors.realTeal["100"]};
    }
  `,
	blue_outlined: styled(BlueOnWhite)`
    & > .MuiButtonBase-root {
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

    & > .MuiButtonBase-root:hover {
      box-shadow: 0 2px 3px ${theme.colors.blue}12;
			border: 2px solid ${theme.colors.blue};
    }

    & > .MuiButtonBase-root:active,
    & > .MuiButtonBase-root:focus {
      box-shadow: 0 1px 2px ${theme.colors.blue}24;
    }
  `,
	red_outlined: styled(RedOnWhite)`
    & > .MuiButtonBase-root {
      background-color: white;
      border-radius: 0;
      border: 2px solid ${theme.newColors.darkRed["100"]};
      font-size: 14px;
      text-transform: uppercase;
    }

    .MuiButton-outlined.Mui-disabled {
      background-color: white;
      opacity: 0.5;
      border: 2px solid ${theme.newColors.darkRed["100"]};
      color: ${theme.newColors.darkRed["100"]};
    }

    & > .MuiButtonBase-root:hover {
      background-color: ${theme.newColors.darkRed["20"]};
      color: ${theme.newColors.darkRed["100"]};
			border: 2px solid ${theme.newColors.darkRed["100"]};
    }

    & > .MuiButtonBase-root:active,
    & > .MuiButtonBase-root:focus {
      box-shadow: 0 1px 2px ${theme.newColors.darkRed["20"]};
    }
  `,
	black_outlined: styled(BlackOnWhite)`
		& > .MuiButtonBase-root {
			background-color: white;
			border-radius: 0;
			border: 2px solid ${theme.newColors.almostBlack["100"]};
			font-size: 14px;
			text-transform: uppercase;
		}
		.MuiButton-outlined.Mui-disabled {
			background-color: white;
			opacity: 0.5;
			border: 2px solid ${theme.newColors.almostBlack["100"]};
			color: ${theme.newColors.almostBlack["100"]};
		}
		& > .MuiButtonBase-root:hover {
			box-shadow: 0 2px 3px ${theme.newColors.almostBlack["20"]};
			border: 2px solid ${theme.newColors.almostBlack["100"]};
		}
		& > .MuiButtonBase-root:active,
		& > .MuiButtonBase-root:focus {
			box-shadow: 0 1px 2px ${theme.newColors.almostBlack["100"]};
		}
  `,
	teal_text: styled(TealOnWhite)`
		&.normalButton > .MuiButtonBase-root {
			color: ${theme.newColors.realTeal["100"]};
			opacity: ${({ children }) => textButtonStyles.opacity(!children[0].props.disabled)};

			&:hover {
				color: ${({ children }) => !children[0].props.disabled ? theme.newColors.darkerRealTeal[100] : ""};
			}
		}

		& > .MuiButtonBase-root {
			font-size: ${({ smallText }) => textButtonStyles.fontSize(smallText)};
			line-height: ${textButtonStyles.lineHeight};
		}
  `,
	blue_text: styled(BlueOnWhite)`
		&.normalButton > .MuiButtonBase-root {
			color: ${theme.colors.blue};
			opacity: ${({ children }) => textButtonStyles.opacity(!children[0].props.disabled)};
		}

		& > .MuiButtonBase-root {
			font-size: ${({ smallText }) => textButtonStyles.fontSize(smallText)};
			line-height: ${textButtonStyles.lineHeight};
		}
  `,
	red_text: styled(RedOnWhite)`
		&.normalButton > .MuiButtonBase-root {
			color: ${theme.newColors.darkRed["100"]};
			opacity: ${({ children }) => textButtonStyles.opacity(!children[0].props.disabled)};
		}

		& > .MuiButtonBase-root {
			font-size: ${({ smallText }) => textButtonStyles.fontSize(smallText)};
			line-height: ${textButtonStyles.lineHeight};
		}
  `,
	black_text: styled(BlackOnWhite)`
		&.normalButton > .MuiButtonBase-root {
			color: ${theme.newColors.almostBlack["100"]};
			opacity: ${({ children }) => textButtonStyles.opacity(!children[0].props.disabled)};
		}

		& > .MuiButtonBase-root, & > a {
			font-size: ${({ smallText }) => textButtonStyles.fontSize(smallText)};
			line-height: ${textButtonStyles.lineHeight};
		}

		& > a {
			color: ${theme.newColors.almostBlack["100"]};
			text-transform: capitalize;
			font-weight: ${theme.fontWeight.bold};
		}

		& > a:hover {
			text-decoration: underline;
		}
  `,
	blue_icon: BlueOnWhite,
	black_icon: BlackOnWhite,
	teal_icon: TealOnWhite,
	red_icon: RedOnWhite,
	white_icon: WhiteOnBlack,
	gray_icon: styled(GrayOnWhite)`
		& > .MuiButtonBase-root {
			color: ${theme.newColors.grey3["100"]};
		}

		& > .MuiButtonBase-root:hover {
			color: ${theme.newColors.almostBlack["100"]};
		}
  `,
};

export const TooltipContent = styled.div`
  z-index: 1500;
  background: ${theme.newColors.almostBlack["100"]};
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
