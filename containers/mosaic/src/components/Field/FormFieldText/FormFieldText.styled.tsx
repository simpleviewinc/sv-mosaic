import styled from "styled-components";

// Material UI
import TextField from "@mui/material/TextField";

//Styles & Types
import theme from "@root/theme";

export const StyledTextField = styled(TextField)<{ $bluntLeft?: boolean; $bluntRight?: boolean }>(({ $bluntLeft, $bluntRight }) => `
	--border: var(--mos-border-medium);
	--shadow: var(--mos-shadow-sm);

	.MuiInputBase-root {
		z-index: 1;
		padding: 0;

		.MuiInputBase-input {
			font-size: ${theme.fontSize.text.lg};
			line-height: ${theme.line.tight};
			padding: ${theme.spacing(3, 4)};
			height: auto;
		}

		fieldset {
			background-color: ${theme.color.white};
			border: 0;
			border-radius: ${theme.rounded.md};
			box-shadow: var(--border), var(--shadow);
			top: 0;
			z-index: -1;

			${!$bluntLeft ? "" : `
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			`}

			${!$bluntRight ? "" : `
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			`}

			legend {
				display: none;
			}
		}

		&.Mui-error {
			fieldset {
				background-color: ${theme.color.red[25]};
				--border: var(--mos-border-danger);
			}
		}

		&:not(.Mui-error):not(.Mui-disabled) {
			&:hover {
				fieldset {
					--border: var(--mos-border-dark);
				}
			}
		}

		&.Mui-focused {
			z-index: 2;

			fieldset {
				outline: 2px solid ${theme.color.gray[700]};
				outline-offset: 3px;
			}
		}

		&.Mui-disabled {
			fieldset {
				--border: var(--mos-border-light);
			}
		}

		&.MuiInputBase-adornedStart {
			padding-left: ${theme.spacing(4)};

			.MuiInputBase-input {
				padding-left: 0;
			}
		}

		&.MuiInputBase-adornedEnd {
			padding-right: ${theme.spacing(4)};

			.MuiInputBase-input {
				padding-right: 0;
			}
		}

		.MuiInputAdornment-root {
			color: currentColor;
		}
	}
`);
