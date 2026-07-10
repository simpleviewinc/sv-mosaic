import styled from "styled-components";
import { PickersTextField } from "@mui/x-date-pickers/PickersTextField";

import theme from "@root/theme";

/**
 * A styled wrapper around MUI X's PickersTextField that matches the Mosaic field
 * visual style. Used by DatePicker and TimePicker to replace StyledTextField
 * (which wraps a plain MUI TextField and is incompatible with the accessible
 * section-based field DOM structure).
 *
 * Class name mapping from StyledTextField (legacy) → PickersTextField (accessible):
 *   .MuiInputBase-root           → .MuiPickersInputBase-root
 *   &.Mui-error                  → &.MuiPickersInputBase-error
 *   &.Mui-focused                → &.MuiPickersInputBase-focused
 *   &.Mui-disabled               → &.MuiPickersInputBase-disabled
 *   .MuiInputBase-input          → .MuiPickersInputBase-sectionsContainer
 *   &.MuiInputBase-adornedStart  → &.MuiPickersInputBase-adornedStart
 *   &.MuiInputBase-adornedEnd    → &.MuiPickersInputBase-adornedEnd
 */
export const MosaicPickersTextField = styled(PickersTextField)`
	--border: var(--mos-border-medium);
	--shadow: var(--mos-shadow-sm);

	.MuiPickersInputBase-root {
		z-index: 1;
		padding: 0;

		.MuiPickersInputBase-sectionsContainer {
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

			legend {
				display: none;
			}
		}

		&.MuiPickersInputBase-error {
			fieldset {
				background-color: ${theme.color.red[25]};
				--border: var(--mos-border-danger);
			}
		}

		&:not(.MuiPickersInputBase-error):not(.MuiPickersInputBase-disabled) {
			&:hover {
				fieldset {
					--border: var(--mos-border-dark);
				}
			}
		}

		&.MuiPickersInputBase-focused {
			z-index: 2;

			fieldset {
				outline: 2px solid ${theme.color.gray[700]};
				outline-offset: 3px;
			}
		}

		&.MuiPickersInputBase-disabled {
			fieldset {
				--border: var(--mos-border-light);
			}
		}

		&.MuiPickersInputBase-adornedStart {
			padding-left: ${theme.spacing(4)};

			.MuiPickersInputBase-sectionsContainer {
				padding-left: 0;
			}
		}

		&.MuiPickersInputBase-adornedEnd {
			padding-right: ${theme.spacing(4)};

			.MuiPickersInputBase-sectionsContainer {
				padding-right: 0;
			}
		}

		.MuiInputAdornment-root {
			color: currentColor;
		}
	}
`;
