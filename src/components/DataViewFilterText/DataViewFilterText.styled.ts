import styled from "styled-components";
import Sizes from "@root/theme/sizes";
import { StyledTextField } from "@root/components/Field/FormFieldText/FormFieldText.styled";
import Button from "@root/components/Button";

export const StyledContents = styled.div`

	& > .inputRow {
		display: flex;
		align-items: center;
		padding: 12px 16px 0;
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
			width: 100%;

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
			margin-left: -1px;

			.Mui-focused fieldset,
			fieldset:hover {
				z-index: 1;
			}
		}
	`}
`;
