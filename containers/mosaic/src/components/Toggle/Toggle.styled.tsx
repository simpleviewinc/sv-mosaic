import styled from "styled-components";

// Material UI
import Switch from "@mui/material/Switch";

// Utils
import theme from "@root/theme";

export const StyledSwitch = styled(Switch)`
  margin-right: 2px;
  && {
    width: 60px;
    height: 40px;
  }

  .MuiSwitch-colorPrimary,
  .MuiSwitch-colorPrimary.Mui-disabled {
    color: white;
  }

  .MuiSwitch-colorPrimary.Mui-checked,
  .MuiSwitch-colorPrimary.Mui-disabled.Mui-checked {
    color: ${theme.newColors.simplyGold["100"]};
  }

  .MuiSwitch-colorPrimary {
    padding: 10px;

    &:hover {
      background-color: ${theme.newColors.simplyGrey["20"]};
    }
  }

  .MuiSwitch-colorPrimary {
    &.Mui-checked {
      &:hover {
        background-color: ${theme.newColors.simplyGold["20"]};
      }
    }
  }

  .MuiSwitch-track {
    background-color: ${theme.newColors.simplyGrey["100"]};
    opacity: 1;
    height: 14px;
    width: 34px;
    margin: auto 0px;
  }

  .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
    background-color: ${theme.newColors.simplyGold["40"]};
    opacity: 1;
  }

  .MuiSwitch-colorPrimary.Mui-disabled.Mui-checked + .MuiSwitch-track {
    background-color: ${theme.newColors.simplyGold["40"]};
  }

  .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track {
    background-color: ${theme.newColors.simplyGrey["100"]};
    opacity: 0.5;
  }
`;

export const StyledSwitchWrapper = styled.div`
	position: relative;
	padding: 3px 0;
	z-index: 1;
`;

export const StyledCheckboxInput = styled.input.attrs({ type: "checkbox" })`
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	width: 100%;
	height: 100%;
	cursor: inherit;
	z-index: 1;
`;

export const StyledSwitchTrack = styled.div<{ $checked?: boolean }>`
	width: 36px;
	height: 14px;
	border-radius: ${theme.rounded.full};
	transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

	${({ $checked }) => $checked ? `
		background-color: ${theme.color.gold[200]};
		border: 1px solid ${theme.color.gold[300]};
		box-shadow: 0 0 6px 0 rgba(244, 178, 35, 0.6) inset;
	` : `
		background-color: ${theme.color.gray[400]};
		border: 1px solid transparent;
		box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25) inset;
	`}
`;

export const StyledSwitchKnobBase = styled.div<{ $checked?: boolean }>`
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: ${theme.rounded.full};
`;

export const StyledSwitchKnob = styled(StyledSwitchKnobBase)`
	width: 20px;
	height: 20px;

	${({ $checked }) => $checked ? `
		transform: translateX(16px);
		background-image: linear-gradient(to bottom, #FDBA26, #FDAE02);
		border: 1px solid ${theme.color.gold[600]};
		box-shadow:
			0 0 2px 0 rgba(0, 0, 0, 0.10),
			0 1px 2px 0 rgba(177, 125, 10, 0.35);
	` : `
		transform: translateX(0);
		background-color: ${theme.color.white};
		border: 1px solid ${theme.color.gray[400]};
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
	`}
`;

export const StyledSwitchKnobFocus = styled(StyledSwitchKnobBase)<{ $isFocusVisible?: boolean; $isOver?: boolean }>`
	width: 32px;
	height: 32px;
	border: 2px solid transparent;
	z-index: -1;

	${({ $isFocusVisible }) => $isFocusVisible && `
		border-color: ${theme.color.gray[700]};
	`}

	${({ $isOver }) => $isOver && `
		background-color: ${theme.color.translucent.grey[100]};
	`}

	${({ $checked }) => $checked ? `
		transform: translate(10px, -6px);
	` : `
		transform: translate(-6px, -6px);
	`}
`;
