import styled from "styled-components";
import Sizes from "@root/theme/sizes";
import { StyledTextField } from "@root/components/Field/FormFieldText/FormFieldText.styled";
import Button from "@root/components/Button";
import theme from "@root/theme";

export const StyledContents = styled.div`

	& > .inputRow {
		display: flex;
		align-items: center;
		gap: ${theme.spacing(2)};
		padding: 16px 16px 0;
		margin-bottom: 16px;
	}

	.MuiFormControl-root {
		margin-bottom: 0;
		margin-top: 0;
	}

	& > .inputRow > .disabled {
		margin-top: 8px;
		padding: 12px 16px 12px 8px;
		width: ${Sizes.sm};
	}

	& .comparisonContainer {
		border-left: 1px solid #ccc;
		margin: 5px;
		padding-left: 5px;
		flex-shrink: 0;
	}
`;

export const StyledFilterButton = styled(Button)<{ $hasQuery?: boolean }>`
	&& {
		position: relative;
		z-index: 1;

		.MuiSvgIcon-root:first-of-type {
			margin-left: auto;
		}

		${({ $hasQuery }) => !$hasQuery && `
			width: calc(100% - 32px);

			.MuiButtonBase-root {
				width: 100%;
				justify-content: start;

			}
		`}
	}
`;

export const StyledFilterTextField = styled(StyledTextField)<{ $hasComparisonDropdown?: boolean }>`
	${({ $hasComparisonDropdown }) => $hasComparisonDropdown && `
		&& {
			.Mui-focused fieldset,
			fieldset:hover {
				z-index: 1;
			}
		}
	`}
`;
