import styled from "styled-components";
import { default as MUICheckbox } from "@mui/material/Checkbox";
import { default as MUIFormControlLabel } from "@mui/material/FormControlLabel";
import theme from "@root/theme";
import { Text } from "../Typography";

export const StyledFormControlLabel = styled(MUIFormControlLabel)`
	&& {
		align-items: center;
		gap: ${theme.spacing(1)};
		margin-left: 0;
		margin-right: 0;
	}
`;

export const StyledLabel = styled(Text)
	.attrs<{ $disabled?: boolean }>(({ $disabled }) => ({
		size: "lg",
		color: $disabled ? theme.color.gray[600] : undefined,
	}))`
		max-width: 414px;
	`;

export const StyledCheckbox = styled(MUICheckbox)`
	&& {
		padding: ${theme.spacing(2)};
		color: ${theme.color.black};

		svg {
			width: 22px;
			height: 22px;
		}

		&:hover {
			background-color: ${theme.color.translucent.grey[100]};
		}

		&.Mui-disabled {
			color: ${theme.color.gray[400]};
		}

		&.Mui-checked,
		&.MuiCheckbox-indeterminate {
			color: ${theme.color.gold[500]};

			&.Mui-disabled {
				color: ${theme.color.gold[200]};
			}

			&:hover {
				background-color: ${theme.color.translucent.gold[100]};
			}
		}

		&.Mui-focusVisible {
			outline: 2px solid ${theme.color.gray[700]};
			outline-offset: -2px;
		}
  	}
`;

export const StyledCheckboxOutline = styled.span`
	border: 2px solid currentColor;
	width: 16px;
	height: 16px;
`;

export const StyledCheckboxIcon = styled.span`
	border-radius: 2px;
	overflow: hidden;
	vertical-align: middle;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	svg {
		margin: -3px;
	}
`;
