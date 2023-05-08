import styled from "styled-components";
import Sizes from "@root/theme/sizes";

export const StyledContents = styled.div`
	margin: 0px 6px;

	& > .inputRow {
		display: flex;
		align-items: center;
		margin-top: 6px;
	}

	.MuiFormControl-root {
		margin-bottom: 0;
	}

	& > .inputRow > .disabled {
		margin-top: 8px;
		padding: 12px 16px 12px 8px;
		width: ${Sizes.sm};
	}

	& > .inputRow > .comparisonButton {
		margin-top: 8px;
		margin-left: 10px;
	}

	& .comparisonContainer {
		border-left: 1px solid #ccc;
		margin: 5px;
		padding-left: 5px;
		flex-shrink: 0;
	}
`;
