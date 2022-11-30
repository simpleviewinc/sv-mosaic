import styled from "styled-components";

export const StyledContents = styled.div`
	& > .inputRow {
		display: flex;
		align-items: center;
		margin-top: 6px;
	}

	.MuiFormControl-root {
		margin-bottom: 0;
	}

	& > .inputRow > .disabled input.Mui-disabled {
		padding: 12px 16px;
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
