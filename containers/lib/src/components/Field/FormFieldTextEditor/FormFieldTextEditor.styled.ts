import styled from "styled-components";
import theme from "@root/theme";

export const EditorWrapper = styled.div<{ $error?: boolean }>`
  	.jodit-container {
		width: 620px !important;
		border: none !important;
	}

	.jodit-toolbar__box {
		background-color: white !important;
		border-radius: 0px !important;
		margin-bottom: 8px !important;
		border: ${({ $error }) => ($error ? theme.borders.error : theme.borders.simplyGrey)} !important;
	}

	.jodit-workplace {
		background-color: ${theme.newColors.grey1["100"]} !important;
		max-height: 200px !important;
		overflow-y: auto !important;
		padding: 16px !important;
		color: ${theme.newColors.almostBlack["100"]};
		border: ${({ $error }) => {
		if ($error) return theme.borders.error;
		return theme.borders.simplyGrey;
	}} !important;

		& .jodit-wysiwyg {
			padding: 0px !important;
			margin: 0px !important;
			width: 100% !important;
			height: 100% !important;

			& p:first-child {
				margin-top: 0px !important;
			}
		}

		&:focus-within {
			box-shadow: 0px 0px 5px ${theme.newColors.almostBlack["20"]};
			border: 1px solid ${theme.newColors.almostBlack["100"]} !important;
		}
	}

	.jodit-placeholder {
		padding: 16px !important;
	}

	.jodit-workplace:focus-within + .jodit-status-bar {
		box-shadow: 0px 0px 5px ${theme.newColors.almostBlack["20"]};
		border: 1px solid ${theme.newColors.almostBlack["100"]} !important;
		border-top: none !important;
	}

	.jodit-status-bar {
		border-radius: 0px !important;
		border: ${({ $error }) => {
		if ($error) return theme.borders.error;
		return theme.borders.simplyGrey;
	}} !important;
		border-top: none !important;
		font-family: ${theme.fontFamily};
		background-color: ${theme.newColors.grey2["100"]};
	}
`;

export const StyledSkeletonWrapper = styled.div`
	display: flex;
	flex-flow: column;
	gap: 8px;
`;
